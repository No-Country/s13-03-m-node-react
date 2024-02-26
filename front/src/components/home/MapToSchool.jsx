const MapToSchool = () => {
    //CREAR UN ARRAY CON LAS DISTINTAS URL O TAMAÑOS
    return (
      <section className="flex  flex-col">
        <h3 className="font-bold text-base mx-4 mb-8 ">¿Cómo llego a mi escuela?</h3>
        <iframe
          className="self-center w-full h-64 px-4"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13616.480389971995!2d-64.1926056!3d-31.4383605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2f50c080985%3A0xec1e4c66fe09e826!2sFacultad%20de%20Matem%C3%A1tica%2C%20Astronom%C3%ADa%2C%20F%C3%ADsica%20y%20Computaci%C3%B3n%20-%20FaMAF!5e0!3m2!1ses!2sar!4v1708523851479!5m2!1ses!2sar"
                
          loading="lazy"
          //referrerpolicy="no-referrer-when-downgrade" REVISAR
        >            
        </iframe>
      </section>
    );
  };
  
  export default MapToSchool;