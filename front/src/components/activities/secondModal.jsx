import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

const SecondModal = () => {

  useEffect(() => {
    const openSecondModal = () => {
      // segundo modal
      Swal.fire({
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
        <small className='text-left mt-3'>*Autorizo dar mi consentimiento para que mi hijo o hija participe de esta actividad.</small>
        <div className='flex items-center justify-center gap-2 mt-1'>
          <input className='border-1 py-2 px-4 mr-2' type="text" placeholder="Ingresa tu e-mail" required/>
          <MdEmail />
        </div>
        <div className='flex items-center justify-center gap-2'>
          <input className='border-1 py-2 px-4 mr-2' type="password" placeholder="Ingresa tu contraseña" required/>
          <RiLockPasswordFill />
        </div>
       
        <button type="submit" className='bg-violet-500 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded'>Autorizo</button>
      </form>
    </div>
  );
}

export default SecondModal;