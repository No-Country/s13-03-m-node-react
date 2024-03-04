import React from 'react'
// import { HiOutlineChatAlt } from 'react-icons/hi';

const ChatbotIcon = ({ onClick }) => {
  return (
    <div className='fixed right-2 bottom-0 rounded-full cursor-pointer' onClick={onClick}>
      {/* <HiOutlineChatAlt onClick={onClick} /> */}
      <img src="src/assets/images/Rectangle 695.png" alt="" className='w-16 ' />
    </div>
  );
}

export default ChatbotIcon;