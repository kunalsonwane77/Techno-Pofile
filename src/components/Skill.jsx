import React from "react";

function Skill() {
  return (
    <div>
      <div className="bg-white p-5 w-[984px] rounded-md mt-[-10px]">
        <h2 className="text-xl font-semibold ">Skills and Perferences</h2>

        <div className="w-[984px] flex items-center justify-between h-[30px] mt-1.5 ">
          <h3 className="text-gray-500">
            Highlight Your Skills and Preferences to stand out
          </h3>
        </div>

        <div className="w-[985px] mb-2 h-[250px] gap-6 flex flex-wrap justify-between items-center">
          <div className="w-[500px] relative h-[65px] ">
            <h1>Job Type</h1>

            <div className="flex items-center absolute bottom-0 w-[100%] justify-between gap-1">
              <div className="flex justify-center items-center gap-1.5">
                <input type="checkbox" />
                <label>Full time</label>
              </div>
              <div className="flex  justify-center items-center gap-1.5">
                <input type="checkbox" />
                <label>Part Time</label>
              </div>
              <div className="flex justify-center items-center gap-1.5">
                <input type="checkbox" />
                <label>Freelance</label>
              </div>
              <div className="flex justify-center items-center gap-1.5">
                <input type="checkbox" />
                <label>Internship</label>
              </div>
            </div>
          </div>

          <div className="border flex justify-evenly items-center border-gray-300 p-2 h-[50px] w-[448px] bg-gray-100 rounded-md ">
            <div className="w-[80px] h-[31px]  flex items-center  rounded-md">
              <h1 className="text-[#8391A1]">Skills</h1>
            </div>
            <div className="w-[80px] flex justify-center items-center h-[31px] bg-[#6c6d6e] text-white rounded-md">
              <h1>Python</h1>
            </div>
            <div className="w-[80px] h-[31px] flex justify-center items-center bg-[#6c6d6e]  text-white rounded-md">
              <h1>DSA</h1>
            </div>
            <div className="w-[80px] h-[31px] flex justify-center items-center bg-[#6c6d6e]  text-white rounded-md">
              <h1>PHP</h1>
            </div>
          </div>
          
          <select name="" id=""  className="border p-2 border-gray-300 h-[50px] bg-gray-100 rounded-md w-[448px]">
            <option value="">
            Preferred Designation
            </option>
          </select>
          <select name="" id=""  className="border p-2 border-gray-300 h-[50px] bg-gray-100 rounded-md w-[448px]">
            <option value="">
            Preferred Location
            </option>
          </select>
          <select name="" id=""  className="border p-2 border-gray-300 h-[50px] bg-gray-100 rounded-md w-[448px]">
            <option value="">
            Minimum Salary
            </option>
          </select>
           
          <select name="" id=""  className="border p-2 border-gray-300 h-[50px] bg-gray-100 rounded-md w-[448px]">
            <option value="">
            Maximum Salary
            </option>
          </select>
        </div>

        <textarea
          placeholder="Tell us something about that you Skills"
          className="border border-gray-300 p-2 bg-gray-100 rounded-md w-[985px] h-[150px]"
        ></textarea>

        <button className="bg-[#7900BA] text-white w-[490px] h-[60px] block mx-auto rounded-md mt-4">
          Update
        </button>
      </div>
    </div>
  );
}

export default Skill;
