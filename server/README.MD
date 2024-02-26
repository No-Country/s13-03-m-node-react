#  Edu Server API

Esta documentación corresponde a la API de Airbnb Clon, una app web colaborativa que replica la funcionalidad de Airbnb. Este proyecto utiliza Express.js y Mongoose como stack principal.

## Introducción

La API de Airbnb Clone proporciona acceso a una variedad de funciones que permiten a los usuarios(client) realizar tareas básicas de un CRUD mediante verbos. Por tanto corresponde a una API RESTfull.

## Consumo de API Deployed (en la nube):

IMPORTANTE: Recomendamos NO utilizar esta versión hasta nuevo aviso, ya que se encuentra desactualizada, los últimos cambios se encuentran en el servidor local.

- Ruta en fl0.io: https://clon-airbnb-dev-shhb.1.us-1.fl0.io/api/publication

## Consumo de API local:

Para consumir la API Airbnb Clone de manera local, es muy IMPORTANTE que mediante una terminal se posicione dentro de la carpeta Server. De esta manera tendrá acceso a los scripts previamente configurados en el package.json del entorno Server, encargado de levantar un servidor web local.

1. Instalar paquetes de node.js necesarios (debe tener una version de node superior a v16, recomendamos encarecidamente v18.x.x lts).

   ```
   npm i
   ```

2. Añadir archivo `.env` y configurar las variables de entorno necesarias guiándose con el archivo `.env.sample`. las credenciales se entregan por comunicación interna (DS, WSP, Spark).

3. Levantar servidor.

- Levantar servidor local en dispositivos Windows:

  ```
  npm run dev-win
  ```

- Levantar servidor local en dispositivos Unix (Linux/WSL/MacOS):

  ```
  npm run dev
  ```

Si todo salio bien vera el siguiente mensaje en consola (terminal):`Servidor escuchando en el puerto http://localhost:3000`.
En caso de error, comuníquese con team @back

## Estructura de la API:

La API de Airbnb Clone se estructura de la siguiente manera: `http://host:port/api/entity/:params`

- `http://host:port`: Corresponde al nombre de dominio o servidor Ej: `http://localhost:3000`.
- `/api`: Es la base desde donde nace nuestra API. Se usa para agrupar todas las rutas relacionadas con la API bajo un subdirectorio especifico. Util por si a futuro se requiere de otra API en la aplicación.
- `/entity`: Corresponde a la entidad o recurso al que se quiere consultar o manipular.
- `/:params`: Este campo corresponde a un parámetro. El símbolo `:` indica que esta parte de la ruta es variable y se espera que el cliente proporcione un valor especifico en su lugar.

**RECURSOS / ENTIDADES:**

- `/user`: Recurso relacionado con la gestión de usuarios del sistema.
- `/publication`: Recurso relacionado con la gestión de publicaciones.
- `/photo`: Recurso relacionado con la gestión de imágenes asociadas a las publicaciones.
- `/booking`: Recurso relacionado con las reservas.
- `/favorite`: Recurso relacionado con la lista de favoritos de cada usuario.
- `/review`: Recurso relacionado con las reseñas generadas por los usuarios en las publicaciones.

**PARÁMETROS:**

- `/:id`: Parámetro que sugiere o espera un id alfanumérico (definido por Object.id de MongoDB).
- `/:email`: Parámetro que sugiere o espera un email.

Nota: Como modelo de negocio recomendamos utilizar el email para gestionar users y publications.

## Seguridad

La API de Airbnb Clone cuenta con un sistema de seguridad basado en JSON Web Token (JWT), el cual define las rutas protegidas, desde ahora conocidas como public y private.

- Public: rutas con acceso publico, necesarias para que un usuario no registrado pueda acceder a ciertos recursos de la aplicación.
- Private: Rutas protegidas solo se puede acceder si el usuario cuenta con el bearer token necesario.

_NOTA_: Con el fin de facilitar el consumo de la api, en esta primera etapa, no todas las rutas tienen token.

## Endpoints

A continuación, se enumeran los principales endpoints de la API de Airbnb Clone junto a su método, alcance y descripción correspondiente.

**USER:**

| HTTP METHOD | ENDPOINT         | ACCESS  | DESCRIPTION                                                         |
| ----------- | ---------------- | ------- | ------------------------------------------------------------------- |
| POST        | /api/register    | Public  | Registro de un nuevo usuario.                                       |
| POST        | /api/login       | Public  | Inicio de sesión con usuario existente.                             |
| GET         | /api/user        | Private | Lista información de todos los usuarios registrados.                |
| GET         | /api/user/:email | Private | Lista información de un usuario mediante el parámetro :email o :id. |
| PUT         | /api/user/:email | Private | Permite actualizar los datos de un usuario mediante :email o :id    |
| DELETE      | /api/user/:email | Private | Elimina un usuario mediante su :email o :id                         |

**PUBLICATION:**

| HTTP METHOD | ENDPOINT                | ACCESS  | DESCRIPTION                                                              |
| ----------- | ----------------------- | ------- | ------------------------------------------------------------------------ |
| POST        | /api/publication        | Private | Crear una nueva publicación.                                             |
| GET         | /api/publication        | Public  | Lista información de todas las publicaciones.                            |
| GET         | /api/publication/:email | Private | Lista información de una publicación mediante el parámetro :email o :id. |
| PUT         | /api/publication/:email | Private | Permite actualizar los datos de una publicación mediante :email o :id    |
| DELETE      | /api/publication/:email | Private | Elimina un publicación mediante su :email o :id                          |

**PHOTOS:**

| HTTP METHOD | ENDPOINT       | ACCESS  | DESCRIPTION                                                        |
| ----------- | -------------- | ------- | ------------------------------------------------------------------ |
| POST        | /api/photo     | Private | Agregar una nueva foto.                                            |
| GET         | /api/photo     | Public  | Lista información de todas las foto.                               |
| GET         | /api/photo/:id | Private | Lista información de una foto mediante el parámetro :id.           |
| PUT         | /api/photo/:id | Private | Permite actualizar los datos de una foto mediante el parámetro :id |
| DELETE      | /api/photo/:id | Private | Elimina un foto mediante el parámetro :id                          |

- **BOOKING:** _...pendiente_
- **FAVORITE:** _...pendiente_
- **REVIEW:** _...pendiente_

## Consumo

#### Consumo mediante fetch JavaScript:

```js
const API_BASE = 'http://localhost:3000/api';
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

La API de Airbnb Clone devuelve las respuestas en formato JSON con sus correspondientes código de estado HTTP.

- #### `POST` Registrar nuevo usuario:

  ```
  http://localhost:3000/api/register/
  ```

  body:

  ```json
  {
  	"names": "Pablo",
  	"surname": "Neruda",
  	"email": "pablo.neruda@email.com",
  	"password": "Pablo123!",
  	"birthDate": "12/07/1904",
  	"phone": "35 246 1284",
  	"address": "Isla Negra, El Quisco, Chile",
  	"officialId": "18999999-4",
  	"phoneUrgency": "+54 9999 9998",
  	"role": "user"
  }
  ```

- #### `POST` Iniciar sesión con usuario (email y contraseña) registrado:

  ```
  http://localhost:3000/api/login/
  ```

  body:

  ```json
  {
  	"email": "pablo.neruda@email.com",
  	"password": "Pablo123!"
  }
  ```

- #### `GET` Listar todos los usuarios.

  ```
  http://localhost:3000/api/user/
  ```

- #### `GET` Listar el usuario con el email= "pablo.neruda@email.com"

  ```
  http://localhost:3000/api/user/pablo.neruda@email.com
  ```

- #### `PUT` Actualizar el usuario con email= "pablo.neruda@email.com" por Gustavo Cerati.

  ```
  http://localhost:3000/api/user/pablo.neruda@email.com
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

- #### `DELETE` Eliminar el usuario con email= "gustavo.cerati@email.com".

  ```
  http://localhost:3000/api/user/gustavo.cerati@email.com
  ```

En construcción...

Creado con ☕️ / 🧉 por team @back 😊