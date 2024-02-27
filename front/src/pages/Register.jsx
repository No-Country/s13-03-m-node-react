
const Register = () => {
  return (
    <section>
      <div className="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-3/5" style={{backgroundImage: "url('/images/milad-fakurian-F93PQmh4krI-unsplash.webp')"}}>
        </div>

        <div className="flex items-center justify-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div>
            <h1 className="text-2xl text-center font-semibold">¡Te damos la bienvenida a Educlass!</h1>
            <p className="mt-4">
              Completa el siguiente formulario para crear tu cuenta. 
            </p>

            <form action="" className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">

            <div>
                <label className="block mb-2 text-sm">Apellido de la familia</label>
                <input
                  placeholder="Ej: Montero"
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Código del alumno</label>
                <input
                  placeholder="Ej: 12345B"
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Email</label>
                <input
                  placeholder="Ingresa tu Email"
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Contraseña</label>
                <input
                  placeholder="Ingresa tu Contraseña"
                  type="password"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Repetir contraseña</label>
                <input
                  placeholder="Repetí tu contraseña"
                  type="password"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <button className="block w-full p-3 text-center bg-violet-500 text-white rounded hover:bg-violet-600">Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register;