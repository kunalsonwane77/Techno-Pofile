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
    <div className='w-[full] h-[90px] flex justify-between items-center px-[10px] border border-gray-200 shadow-sm bg-white'>
     <div className='w-[826px] flex  items-center '>
       <img src={Logo} alt="" />
       <div className='w-[668px] h-[50px]  border border-gray-300 rounded-md  flex items-center'>
        <div className='w-[100px] h-[100%] ml-2.5 flex justify-evenly items-center '>
            <img src={flag} alt="" />
            <p>India</p>
            <img src={down} alt="" />
        </div>

           <div className='flex  items-center pl-1 h-[24px] ml-3.5'>
              <img src={search} alt="" className='w-[24px] h-[24px] block' />
              <input type="text" name="" id="" className='h-[32px] ml-3 w-[255px] outline-none' placeholder='Job title, keyword, company' />
           </div>

       </div>
     </div>

     <div className='w-[137.14px] p-1.5 mr-1.5 flex justify-between items-center h-[48px] gap-[24px] '>
        <img src={msg} alt="img" />
        <img src={bell} alt="img" />
        <img src={Profileimg} alt="img" />

     </div>

    </div>
  );
}

export default Searchbar;