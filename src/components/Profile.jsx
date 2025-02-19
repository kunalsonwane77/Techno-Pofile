import React from "react";
import Searchbar from "./Searchbar";
import Details from "./Details";
import Basic from "./Basic";
import Allroutes from "./Allroutes";


const Profile = () => {


  return (
    <>

    <Searchbar/>
      <div className="flex h-screen ">
      {/* Sidebar */}
      <div className="w-[288px] bg-white p-5 shadow-md">
        <h2 className="text-xs text-gray-500">CANDIDATE DASHBOARD</h2>
        <nav className="mt-5">
          <ul>
            <li className="py-2 text-gray-700 font-semibold">Overview</li>
            <li className="py-2 text-purple-600 font-semibold">My Profile</li>
            <li className="py-2 text-gray-700 font-semibold">Applied Jobs</li>
            <li className="py-2 text-gray-700 font-semibold">Saved Jobs</li>
            <li className="py-2 text-gray-700 font-semibold">Scheduled Interview</li>
            <li className="py-2 text-gray-700 font-semibold">Settings</li>
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className= " flex-1 p-10">
        <div className="w-[984px]  ml-5 h-[80px] relative">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <div className="w-[100%] flex justify-evenly h-[30px] border-b border-gray-300 absolute bottom-0">
              <Details/>
                
            </div>

        </div>
        
        {/* <div className="bg-white p-5 w-[984px] rounded-md">
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
        </div> */}
       <Allroutes/>
      </div>
    </div>
    
    </>
  
  );
};

export default Profile;
