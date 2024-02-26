import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

const SecondModal = () => {

  useEffect(() => {
    const openSecondModal = () => {
      // segundo modal
      Swal.fire({
        title: 'Inicia sesión para confirmar la autorización',
        html: '<SecondModal />',
      }).then((loginResult) => {
        if(loginResult.isConfirmed) {
          Swal.fire('Inicio de sesión exitoso, autorización confirmada.', "", "success");
        }
      });
    }

    openSecondModal();
  }, []);

  return (
    <div>
      <form action=""  className='flex flex-col gap-3 m-2'>
        <div className='flex items-center justify-center gap-2'>
          <input className='border-1 py-2 px-4 mr-2' type="text" placeholder="Usuario" required/>
          <MdEmail />
        </div>
        <div className='flex items-center justify-center gap-2'>
          <input className='border-1 py-2 px-4 mr-2' type="password" placeholder="Contraseña" required/>
          <RiLockPasswordFill />
        </div>
       
        <button type="submit" className='bg-violet-500 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded'>Iniciar sesión</button>
      </form>
    </div>
  );
}

export default SecondModal;