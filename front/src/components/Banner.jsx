import React, { useEffect, useState } from 'react';
import axios from 'axios';


const DateComponent = ({ date }) => {
  return (
    <div className='text-center'>
      <p className='text-3xl font-medium'>{date}</p>
    </div>
  );
};

const CheckboxItem = ({ text }) => {
  return (
    <p className='flex justify-left items-center gap-2 text-lg font-medium'>
      {text}
    </p>
  );
};


const Banner = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const response = await axios.get('https://educlass-2024.onrender.com/api/notification');
        const data = response.data.data;

        console.log('Notification data:', data);

        const sortedNotifications = data.document.sort((a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion));
        const latestNotification = sortedNotifications[0];

        setNotification(latestNotification);
      } catch (error) {
        console.error('Error fetching notification:', error);
      }
    };

    fetchNotification();
  }, []);

  return (
    <section className='flex justify-center items-center gap-4 h-40 border rounded-lg border-blue-400 p-4 m-4 mb-24 max-w-5xl bg-blue-50 shadow-md shadow-[#3FA3EB]'>
      <DateComponent date={new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })} />
     
      <div className='w-4/5 h-full rounded-md bg-no-repeat bg-cover' style={{backgroundImage: "url('src/assets/images/banner-img.webp')"}}>
        <div className='rounded-md backdrop-blur-sm bg-white/50 m-2 p-2'>
        {notification && (
          <>
          <CheckboxItem text={notification.titulo} />
          </>
        )}
        </div>
      </div>
    </section>
  );
};

export default Banner;