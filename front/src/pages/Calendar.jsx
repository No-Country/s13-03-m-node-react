import {
  Image,
} from "@nextui-org/react";

const Calendar = () => {
  
  return (
    <section className="flex flex-col    ">
      <h1 className="mx-4 mb-8 font-medium text-2xl ">Días de importantes de mi escuela</h1>
      <Image
                    className="self-center" 
                    width={300}
                    alt="NextUI hero Image"
                    src= "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                  />
      <h2 className="mx-4  font-medium text-2xl  ">Mi calendario</h2>
    
                
                  
           

    </section>
  );
};
export default Calendar;
