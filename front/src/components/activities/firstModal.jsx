import React from 'react';
import Swal from 'sweetalert2'; 
import ReactDOMServer from 'react-dom/server';
import SecondModal from './secondModal';


const FirstModal = () => {

  const dummyData = {
    id:"001",
    title1: "Titulo de la actividad",
    first_description: "Estimadas familias, lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title2: "Horario de la salida:",
    schedule: "Viernes de 9:00 a 12:00 hs.",
    title3: "¿Que se necesita?",
    middle_description: "Zapatillas cómodas, agua, comida y gorra.",
    title4: "Autorización",
    last_description: "Para esta actividad, se requiere la autorización de los tutores. Ante cualquier duda o consulta, por favor contáctenos.",
  };
  

  const openFirstModal = () => {
    // primer modal
    const modalContent = ReactDOMServer.renderToStaticMarkup(
      <div className='flex flex-col text-left gap-4'>
        <div>
          <h2 className='font-semibold text-center'>{dummyData.title1}</h2>
          <p className='mt-1'>{dummyData.first_description}</p>
        </div>
        <div>
          <h2 className='font-semibold text-center'>{dummyData.title2}</h2>
          <p className='mt-1'>{dummyData.schedule}</p>
        </div>
        <div>
          <h2 className='font-semibold text-center'>{dummyData.title3}</h2>
          <p className='mt-1'>{dummyData.middle_description}</p>
        </div>
        <div>
          <h2 className='font-semibold text-center'>{dummyData.title4}</h2>
          <p className='mt-1'>{dummyData.last_description}</p>
        </div>
      </div>
    );
   
    Swal.fire({
      html: modalContent,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: 'Autorizar',
      cancelButtonText: 'No autorizar',
    }).then((result) => {
      if (result.value) {
        // entra segundo modal
        Swal.fire({
          html: ReactDOMServer.renderToStaticMarkup( <SecondModal /> ),
          showCloseButton: true,
          showConfirmButton: false,
        });
      }
    });
  };
    
  return (
    <>
    <button onClick={openFirstModal} className='bg-violet-500 hover:bg-violet-700 text-white font-medium py-1 px-4 rounded'>VER MÁS</button>
    </>
  );
};

export default FirstModal;