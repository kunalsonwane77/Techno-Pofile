import React from "react";
import Searchbar from "./Searchbar";
import Details from "./Details";
import Basic from "./Basic";
import Allroutes from "./Allroutes";


const Profile = () => {


  return (
    <>

     <Searchbar/>
      <div className="flex h-fit ">
      {/* Sidebar */}
      <div className="w-[288px] h-screen bg-white p-5 shadow-md fixed left-0 top-[90px] flex flex-col overflow-y-auto z-50">
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
      <div className= " flex-1 p-10 ml-[288px] overflow-auto">
        <div className="w-[984px]  ml-5 h-[80px] relative">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <div className="w-[100%] flex justify-evenly h-[30px] border-b border-gray-300 absolute bottom-0">
              <Details/>
                
            </div>

        </div>
        
  
       <Allroutes/>
      </div>
    </div>
    
    </>
  
  );
};

export default Profile;
