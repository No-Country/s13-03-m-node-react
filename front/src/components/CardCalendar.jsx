import { Card,Image } from "@nextui-org/react";


function CardCalendar({src, title, subTitle, alt}){
    return(
        <>
        <Card className=" flex flex-col items-start  h-44 w-1/2 px-3 pt-1 mx-auto mt-5 mb-10 bg-[#F4FAFF] border-1 border-[#3FA3EB] shadow-md shadow-[#3fa3eb66]  text-[#280058] ">
          <h3 className=" mt-4 mb-3  font-bold ">{title}</h3>
          <h4 className="mb-2  text-sm  ">{subTitle}</h4>
          <div className="h-[5.563rem]  flex  justify-center ">
            <Image className="h-full" src={src} alt={alt} />
          </div>
        </Card>
        </>
    )
}
export default CardCalendar