
const Login = () => {
  return (
    <section>
      <div className="flex justify-center min-h-screen">
        <div className="flex items-center justify-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div>
            <div className="flex justify-center">
            <img src="public/images/logo_educlass.webp" alt="logo educlass" className="border-8 rounded-3xl border-blue-400 w-[150px]" />
            </div>
            <h1 className="text-2xl text-center font-semibold mt-2">¡Te damos la bienvenida a Educlass!</h1>
            <p className="mt-4 text-center">
              Sigue el progreso de tus hijos o hijas.
            </p>

            <form action="" className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">

              <div>
                <label className="block mb-2 text-sm">E-mail</label>
                <input
                  placeholder="Ingresa tu e-mail"
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Contraseña</label>
                <input
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                />
                <label className="block text-sm">Recordarme</label>
              </div>

              <div className="px-4 py-2 focus:ring focus:ring-opacity-40 border rounded-md text-center">
                <a href="#" className="text-sm text-center text-gray-600 hover:text-gray-900">¿Olvidaste tu contraseña?</a>
              </div>

              <button className="block w-full p-3 text-center bg-violet-500 text-white rounded hover:bg-violet-600">Iniciar Sesión</button>

            </form>
          </div>
        </div>

        <div className="hidden bg-cover lg:block lg:w-3/5" style={{ backgroundImage: "url('/images/milad-fakurian-0_8gAoFrzbw-unsplash.webp')" }}>
        </div>

      </div>
    </section>
  )
}

export default Login;