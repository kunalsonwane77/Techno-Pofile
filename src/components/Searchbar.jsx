import React from 'react';
import flag from './../images/flag.png';
import down from './../images/CaretDown.png';
import search from './../images/fi_search.png';
import Logo from './../images/Logo.png';
import msg from './../images/msg.png';
import bell from './../images/BellRinging.png';
import Profileimg from './../images/Ellipse 18.png';

function Searchbar() {
  return (
    <div className='w-full h-[90px] sticky top-0 flex flex-wrap justify-between items-center px-4 border border-gray-200 shadow-sm bg-white z-50'>
      
      <div className='flex items-center w-full lg:w-[826px] flex-wrap'>
        <img src={Logo} alt="Logo" className='h-10 w-auto' />
        <div className='w-full lg:w-[668px] h-[50px] border border-gray-300 rounded-md flex items-center bg-white mt-2 lg:mt-0'>
          <div className='w-[100px] h-full ml-2.5 flex justify-evenly items-center'>
            <img src={flag} alt="flag" className='h-5' />
            <p className='text-sm'>India</p>
            <img src={down} alt="dropdown" className='h-4' />
          </div>
          <div className='flex items-center pl-2 h-[24px] ml-3.5 w-full'>
            <img src={search} alt="search" className='w-[24px] h-[24px] block' />
            <input 
              type="text" 
              className='h-[32px] ml-3 w-full lg:w-[255px] outline-none text-sm' 
              placeholder='Job title, keyword, company' 
            />
          </div>
        </div>
      </div>
      
   
      <div className='flex items-center gap-4 p-2 mt-2 lg:mt-0'>
        <img src={msg} alt="messages" className='h-6 w-auto' />
        <img src={bell} alt="notifications" className='h-6 w-auto' />
        <img src={Profileimg} alt="profile" className='h-8 w-8 rounded-full' />
      </div>
    </div>
  );
}

export default Searchbar;
