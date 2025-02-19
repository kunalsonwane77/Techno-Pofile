import React from 'react'
import plus from './../images/profileimg/Group 672.png';


function Certification() {
  return (
      <div>
          <div className="bg-white p-5 w-[984px] rounded-md mt-[-10px]">
            <h2 className="text-xl font-semibold ">Certification</h2>
           
    
            <div className="w-[984px] flex items-center justify-between h-[30px] mt-1.5 ">
            <h3>Do you Have Certifications?</h3>
              <div className="flex justify-between items-center  h-[100%] w-[175px] ">
                <img src={plus} alt="img" className="h-[18px]" />
                <h1 className="text-sm">Add Another Certificate</h1>
              </div>
            </div>
    
            <div className="w-[985px] h-[150px] mt-[20px] flex flex-wrap justify-between">
              <input
                type="text"
                placeholder="Certificate Name"
                className="border border-gray-300 h-[40px] p-2 bg-gray-100 rounded-md w-[448px]"
              />
              <input
                type="text"
                placeholder="Issued Organization"
                className="border h-[40px] border-gray-300 p-2 w-[448px] bg-gray-100 rounded-md "
              />
    
              <input
                type="text"
                placeholder="Credentials I’d"
                className="border border-gray-300 h-[40px] bg-gray-100 p-2 rounded-md w-[448px]"
              />
              <input
                type="text"
                placeholder="Date of Completion"
                className="border border-gray-300 h-[40px] bg-gray-100 p-2 rounded-md w-[448px]"
              />
            </div>
            
    
            <textarea
              placeholder="Tell us something about that you did/learned through the course"
              className="border border-gray-300 p-2 bg-gray-100 rounded-md w-[985px] h-[200px]"
            ></textarea>
    
            <button className="bg-[#7900BA] text-white w-[490px] h-[60px] block mx-auto rounded-md mt-4">
              Update
            </button>
          </div>
        </div>
  )
}

export default Certification