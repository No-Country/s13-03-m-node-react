#  Edu Server API

Esta documentación corresponde a la API de Edu Server, una aplicación web colaborativa que replica la funcionalidad para la interacción entre padres y instituciones educativas. Este proyecto utiliza Express.js y Mongoose como su stack principal

## Introducción

La API de Edu Server proporciona acceso a una variedad de funciones que permiten a los usuarios(client) realizar tareas básicas de un CRUD mediante verbos. Por tanto corresponde a una API RESTfull.

## Consumo de API Deployed (en la nube):

IMPORTANTE: Recomendamos NO utilizar esta versión hasta nuevo aviso, ya que se encuentra desactualizada, los últimos cambios se encuentran en el servidor local.

- Ruta  https://educlass-2024.onrender.com/

## Consumo de API local:

Para consumir la API Edu Server de manera local, es muy IMPORTANTE que mediante una terminal se posicione dentro de la carpeta Server. De esta manera tendrá acceso a los scripts previamente configurados en el package.json del entorno Server, encargado de levantar un servidor web local.

1. Instalar paquetes de node.js necesarios (debe tener una version de node superior a v16, recomendamos encarecidamente v18.x.x lts).

   ```
   npm i
   ```

2. Añadir archivo `.env` y configurar las variables de entorno necesarias guiándose con el archivo `.env.sample`. las credenciales se entregan por comunicación interna (DS, WSP, Spark).

3. Levantar servidor.

- Levantar servidor local en dispositivos Windows:

  ```
  npm start
  ```

- Levantar servidor local en dispositivos Unix (Linux/WSL/MacOS):

  ```
  npm start
  ```

Si todo salio bien vera el siguiente mensaje en consola (terminal):`Servidor escuchando en el puerto http://localhost:3031`.
En caso de error, comuníquese con team @back

## Estructura de la API:

La API de Edu Server se estructura de la siguiente manera: `http://host:port/api/entity/:params`

- `http://host:port`: Corresponde al nombre de dominio o servidor Ej: `http://localhost:3001`.
- `/api`: Es la base desde donde nace nuestra API. Se usa para agrupar todas las rutas relacionadas con la API bajo un subdirectorio especifico. Util por si a futuro se requiere de otra API en la aplicación.
- `/entity`: Corresponde a la entidad o recurso al que se quiere consultar o manipular.
- `/:params`: Este campo corresponde a un parámetro. El símbolo `:` indica que esta parte de la ruta es variable y se espera que el cliente proporcione un valor especifico en su lugar.

**RECURSOS / ENTIDADES:**

- `/user`: Recurso relacionado con la gestión de usuarios del sistema.
- `/teacher`: Recurso relacionado con la gestión de publicaciones.
- `/auth`: Recurso relacionado con el logueo de los usaurios 
- `/student`: Recurso relacionado Creación de un alumno (admin escuela)
- `/attendance`: Recurso Crear un registro de asistencia para un alumno


**PARÁMETROS:**

- `/:id`: Parámetro que sugiere o espera un id alfanumérico (definido por Object.id de MongoDB).
- `/:email`: Parámetro que sugiere o espera un email.


## Seguridad

La API de Edu Server cuenta con un sistema de seguridad basado en JSON Web Token (JWT), el cual define las rutas protegidas, desde ahora conocidas como public y private.

- Public: rutas con acceso publico, necesarias para que un usuario no registrado pueda acceder a ciertos recursos de la aplicación.
- Private: Rutas protegidas solo se puede acceder si el usuario cuenta con el bearer token necesario.

_NOTA_: Con el fin de facilitar el consumo de la api, en esta primera etapa, no todas las rutas tienen token.

## Endpoints

A continuación, se enumeran los principales endpoints de la API de Edu Server junto a su método, alcance y descripción correspondiente.

**USER:**

| HTTP METHOD | ENDPOINT         | ACCESS  | DESCRIPTION                                                         |
| ----------- | ---------------- | ------- | ------------------------------------------------------------------- |
| POST        | /api//user    | Public  | Registro de un nuevo usuario.                                       |
| POST        | /api/auth       | Public  | Inicio de sesión con usuario existente.                             |
| GET         | /api/user        | Public | Lista información de todos los usuarios registrados.                |
| GET         | /api/user/:email | Public | Lista información de un usuario mediante el parámetro puede ser  :email  |
| PUT         | /api/user/:email | Public | Permite actualizar los datos de un usuario mediante :email    |                      |

**ATTENDANCE**

| HTTP METHOD | ENDPOINT                | ACCESS  | DESCRIPTION                                                              |
| ----------- | ----------------------- | ------- | ------------------------------------------------------------------------ |
| POST        | /api/attendance        | Private | Crear una nueva asistencia.                                             |
| GET         | /api/attendance        | Public  | Lista información de todas las asistencia.                            |
| GET         | /api/attendance/?studentid=612345678901234567890222| Private | Lista información de una asistencia mediante el parámetro puede ser  :email, :id. o cualquier otro campo |
| PUT         | /api/attendance/:_id | Private | Permite actualizar los datos de una asistencias mediante  :id los datos a actualizar se esperan por body    |
| DELETE      | /api/attendance/:_id | Private | Elimina un publicación mediante su id                          |

**STUDENT:**

| HTTP METHOD | ENDPOINT       | ACCESS  | DESCRIPTION                                                        |
| ----------- | -------------- | ------- | ------------------------------------------------------------------ |
| POST        | /api/student     | Private | Agregar un nuevo estudiante, se esperan los datos por body.                                            |
| GET         | /api/student     | Public  | Lista información de todos los estudiantes.                               |
| GET         | /api/attendance/?studentid=612345678901234567890222 | Private | Lista información de un estudiante mediante el parámetro :id o cualquier otro parametro pasado por params.           |
| PUT         | /api/student/update/:_id | Private | Permite actualizar los datos de un estudiante mediante el parámetro :id |
| DELETE      | /api/student/:_id | Private | Elimina un estudiante mediante el parámetro :id                          |

- **AUT:** _...pendiente_
- **IMAGE:** _...pendiente_
- **REVIEW:** _...pendiente_

## Consumo

#### Consumo mediante fetch JavaScript:

```js
const API_BASE = 'http://localhost:3001/api';
const USER_DATA = `${API_BASE}/user`;
// const PUBLICATION_DATA = `${API_BASE}/publication`
// const PHOTO_DATA = `${API_BASE}/photo`

const fetchData = async entity => {
	try {
		const response = await fetch(entity);
		if (!response.ok)
			throw new Error(`La solicitud falló con el código de estado ${response.status}`);
		const data = await response.json();
		// console.log(data);
		return data;
	} catch (error) {
		console.log(`Ocurrió un error: ${error.message}`);
	}
};

const userData = fetchData(USER_DATA);
// const publicationData = fetchData(PUBLICATION_DATA)
// const photoData = fetchData(PHOTO_DATA)
```

## Respuestas

La API de Edu Server devuelve las respuestas en formato JSON con sus correspondientes código de estado HTTP.

- #### `POST` Registrar nuevo profesor:

  ```
  http://localhost:3031/api/teacher/
  ```

  body:

  ```json
  {
  	"name": "Juan Amós",
    "last_name": "Comenio",
    "birth_date": "1592-11-02",
    "subject_id": "60a4567d8f98283b34c742e2",
    "class_grade_id": "60a4567d8f98283b34c742ef",
    "is_active": true
  }
  ```

- #### `POST` Iniciar sesión con usuario (email y contraseña) registrado:

  ```
  http://localhost:3031/api/login/
  ```

  body:

  ```json
  {
  	"email": "pablo.neruda@email.com",
  	"password": "Pablo123!"
  }
  ```

- #### `GET` Listar todos los Profesores.

  ```
  http://localhost:3031/api/teacher/
  ```

- #### `GET` Listar el profesores  con el id= "65d6b642291c335804eee8ab" se puede buscar por cualquier parametro 

  ```
  http://localhost:3031/api/teacher/?_id=65d6b642291c335804eee8ab
  ```

- #### `PUT` Actualizar el profesor con id= "65d6aa461ebf186be6d091ec" por Gustavo Cerati.

  ```
  http://localhost:3031/api/teacher/update/65d6aa461ebf186be6d091ec
  ```

  Body:

  ```json
  {
  	"names": "Gustavo",
  	"surname": "Cerati",
  	"email": "gustavo.cerati@email.com",
  	"password": "Gustavo123!"
  }
  ```

- #### `DELETE` Eliminar el usuario con email= "65d6aa461ebf186be6d091ec".

  ```
  http://localhost:3031/api/teacher/65d6aa461ebf186be6d091ec
  ```

En construcción...

Creado con ☕️ / 🧉 por team @back 😊