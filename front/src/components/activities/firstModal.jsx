import Swal from 'sweetalert2';
import ReactDOMServer from 'react-dom/server';
import SecondModal from './secondModal';
import axios from 'axios';


const FirstModal = () => {
  const openFirstModal = () => {

    axios.get('https://educlass-2024.onrender.com/api/activity')
      .then(response => {
        const activityData = response.data.data.document[0];
        // primer modal
        const modalContent = ReactDOMServer.renderToStaticMarkup(
          <div className='flex flex-col text-left gap-4 text-base'>
            <div>
              <h2 className='font-bold text-center mt-4'>
                {activityData.title}
              </h2>
              <p className='mt-1'>
                {activityData.description}
              </p>
            </div>
            <div>
              <h2 className='font-bold text-center'>
                Horario:
              </h2>
              <p className='mt-1'>
                El dia {activityData.activityDate}. De {activityData.hourBegin} a {activityData.hourEnd}
              </p>
            </div>
            <div>
              <h2 className='font-bold text-center'>
                ¿Que se necesita?
              </h2>
              <p className='mt-1'>
                {activityData.requirements}
              </p>
            </div>
            {activityData.needAuthorization && (
              <div>
                <h2 className='font-bold text-center'>Autorización</h2>
                <p className='mt-1'>Para esta actividad, se requiere la autorización de los tutores. Ante cualquier duda, por favor contáctenos.</p>
              </div>
            )}
          </div>
        );

        Swal.fire({
          html: modalContent,
          showCloseButton: true,
          showCancelButton: true,
          confirmButtonText: 'Autorizar',
          confirmButtonColor: '#7222d3',
          cancelButtonText: 'Denegar',
          cancelButtonColor: '#3fa3ebc1',
        }).then((result) => {
          if (result.value) {
            // entra segundo modal
            Swal.fire({
              html: ReactDOMServer.renderToStaticMarkup(<SecondModal />),
              showCloseButton: true,
              showConfirmButton: false,
            });
          }
        });
      })
      .catch(error => {
        console.error('Error al obtener los datos', error);
      });
  };

  return (
    <>
      <button onClick={openFirstModal} className='text-sky-500 hover:underline font-medium py-1 px-4 rounded'>Ver más</button>
    </>
  );
};

export default FirstModal;