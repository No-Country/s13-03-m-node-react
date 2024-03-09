import React from 'react'
// import { HiOutlineChatAlt } from 'react-icons/hi';
import bot from '../assets/images/Rectangle 695.png'

const ChatbotIcon = ({ onClick }) => {
  return (
    <div className='fixed right-2 bottom-0 rounded-full cursor-pointer z-50 mb-80' onClick={onClick}>
      {/* <HiOutlineChatAlt onClick={onClick} /> */}
      <img src={bot} alt="" className='w-16 ' />
    </div>
  );
}

export default ChatbotIcon;