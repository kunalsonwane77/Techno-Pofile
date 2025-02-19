import React from 'react'
import plus from './../images/profileimg/Group 672.png';


function Education() {

  return (
    <div>
          <div className="bg-white p-5 w-[984px] rounded-md">
          <h2 className="text-xl font-semibold pb-2">Education Details</h2>
          
          <div className='w-[984px] flex justify-between items-center h-[30px]'>
          <h3 className="pb-2.5">Your Educational Background</h3>
          <div className='flex justify-between items-center  h-[100%] w-[175px] '>
            <img src={plus} alt="img" className='h-[18px]'/>
            <h1 className='text-sm'>Add Another Education</h1>
          </div>
          </div>

          <div className="w-[985px] h-[180px] mt-[20px] flex flex-wrap justify-between">
          <input type="text" placeholder="Highest Degree" className="border border-gray-300 h-[50px] p-2 bg-gray-100 rounded-md w-[448px]" />
          <input type="text" placeholder="Institution Name" className="border h-[50px] border-gray-300 p-2 w-[448px] bg-gray-100 rounded-md " />
         
            <input type="text" placeholder="Year of Graduation" className="border border-gray-300 h-[50px] bg-gray-100 p-2 rounded-md w-[448px]" />
            <input type="text" placeholder="Specialization (optional)" className="border border-gray-300 h-[50px] bg-gray-100 p-2 rounded-md w-[448px]" />

          </div>
          
          <textarea placeholder="Tell us something about your education" className="border border-gray-300 p-2 bg-gray-100 rounded-md w-[985px] h-[150px]"></textarea>
          
          <button className="bg-[#7900BA] text-white w-[490px] h-[60px] block mx-auto rounded-md mt-4">Update</button>
        </div>
    </div>
  )
}

export default Education