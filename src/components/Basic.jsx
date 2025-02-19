import React from 'react'

function Basic() {
  return (
    <div>
         <div className="bg-white p-5 w-[984px] rounded-md">
          <h2 className="text-xl font-semibold pb-2">Basic Details</h2>
          <h3 className="pb-2.5">Let’s Start with the Basics</h3>

          <div className="w-[985px] h-[180px] gap-6 flex flex-wrap justify-between">
          <input type="text" placeholder="Ninad Sathe" className="border border-gray-300  p-2 bg-gray-100 rounded-md w-[448px]" />
          <input type="text" placeholder="Nagpur, Maharashtra, India" className="border border-gray-300 p-2 w-[448px] bg-gray-100 rounded-md " />
          <input type="date" placeholder="06/11/2000" className="border p-2 border-gray-300 bg-gray-100 rounded-md w-[448px]" />
          <select className="border border-gray-300 p-2 bg-gray-100 rounded-md w-[448px]">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input type="email" placeholder="ninad@gmail.com" className="border border-gray-300 bg-gray-100 p-2 rounded-md w-[448px]" />
            <input type="tel" placeholder="+91 12345 67890" className="border border-gray-300 bg-gray-100 p-2 rounded-md w-[448px]" />

          </div>
          
          <textarea placeholder="Tell us little about yourself..." className="border border-gray-300 p-2 bg-gray-100 rounded-md w-[985px] mt-4 h-[150px]"></textarea>
          
          <button className="bg-[#7900BA] text-white w-[490px] h-[60px] block mx-auto rounded-md mt-4">Update</button>
        </div>
    </div>
  )
}

export default Basic