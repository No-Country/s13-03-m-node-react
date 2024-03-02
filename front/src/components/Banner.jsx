import React from 'react';
import { FaCheck } from 'react-icons/fa';


const DateComponent = ({ date }) => {
  return (
    <div className='text-center'>
      <p className='text-3xl font-medium'>{date}</p>
    </div>
  );
};

const CheckboxItem = ({ text }) => {
  return (
    <p className='flex justify-left items-center gap-2 text-base font-medium'>
      <span><FaCheck /></span>
      {text}
    </p>
  );
};


const Banner = () => {
  return (
    <section className='flex justify-center items-center gap-4 h-40 border-1 rounded-md border-gray-800 p-4 m-4 mb-16 max-w-5xl'>
      <DateComponent date='21 Feb' />
     
      <div className='w-4/5 h-full rounded-md bg-no-repeat bg-cover' style={{backgroundImage: "url('src/assets/images/banner-img.webp')"}}>
        <div className='rounded-md backdrop-blur-sm bg-white/50 m-2 p-2'>
          <CheckboxItem text='Desinfección primaria' />
          <CheckboxItem text='Inscripción jardín' />
          <CheckboxItem text='Corte de agua' />
        </div>
      </div>
    </section>
  );
};

export default Banner;