import React from "react";
import plus from "./../images/profileimg/Group 672.png";

function Work() {
  return (
    <div>
      <div className="bg-white p-5 w-[984px] rounded-md mt-[-10px]">
        <h2 className="text-xl font-semibold ">Work Experience</h2>
        <h3>Tell us your Work Experience</h3>

        <div className="w-[984px] flex items-center justify-between h-[30px] mt-1.5 ">
          <div className="w-[200px] flex items-center justify-start h-[100%] ">
            <input
              type="checkbox"
             
            />

            <p className="ml-1.5">I am a Fresher</p>
          </div>
          <div className="flex justify-between items-center  h-[100%] w-[175px] ">
            <img src={plus} alt="img" className="h-[18px]" />
            <h1 className="text-sm">Add Another Job</h1>
          </div>
        </div>

        <div className="w-[985px] h-[180px] mt-[20px] flex flex-wrap justify-between">
          <input
            type="text"
            placeholder="Job Title"
            className="border border-gray-300 h-[50px] p-2 bg-gray-100 rounded-md w-[448px]"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="border h-[50px] border-gray-300 p-2 w-[448px] bg-gray-100 rounded-md "
          />

          <input
            type="text"
            placeholder="Start Date"
            className="border border-gray-300 h-[50px] bg-gray-100 p-2 rounded-md w-[448px]"
          />
          <input
            type="text"
            placeholder="End Date"
            className="border border-gray-300 h-[50px] bg-gray-100 p-2 rounded-md w-[448px]"
          />
        </div>

        <textarea
          placeholder="Tell us something about your Roles and Responsibilities"
          className="border border-gray-300 p-2 bg-gray-100 rounded-md w-[985px] h-[150px]"
        ></textarea>

        <button className="bg-[#7900BA] text-white w-[490px] h-[60px] block mx-auto rounded-md mt-4">
          Update
        </button>
      </div>
    </div>
  );
}

export default Work;
