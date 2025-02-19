import React from "react";
import Cloud from "./../images/profileimg/fi_upload-cloud.png";

function Document() {
  return (
    <div>
      <div className="mt-[-10px] w-[984px] p-5 ">
        <h2 className="text-xl font-semibold ">Upload Documents</h2>
        <div className="w-[984px] flex items-center justify-between h-[30px] mt-1.5 ">
          <h3 className="text-gray-500">Upload Supporting Documents</h3>
        </div>

        <div className="mt-[40px] flex gap-5 justify-between  flex-wrap w-[950px] h-fit">


          <div className="h-fit">
            <h1 className="py-1">Upload your Photo</h1>
            <div className="w-[452px] rounded-md flex justify-center flex-col items-center bg-[#F1F2F466] h-[152px] border-2 border-dashed border-gray-400">
              <img src={Cloud} alt="img" />
              <p>
                <b>Browse File</b> or drop here
              </p>
              <p className="text-[#5E6670]">
                Only PDF format available . Max file size 12 MB.
              </p>
            </div>
          </div>

          <div className="h-fit">
            <h1 className="py-1">Upload your Photo</h1>
            <div className="w-[452px] rounded-md flex justify-center flex-col items-center bg-[#F1F2F466] h-[152px] border-2 border-dashed border-gray-400">
              <img src={Cloud} alt="img" />
              <p>
                <b>Browse File</b> or drop here
              </p>
              <p className="text-[#5E6670]">
                Only PDF format available . Max file size 12 MB.
              </p>
            </div>
          </div>
             
             <div className="w-[452px] text-center  h-[122px] ">
              <h1 className="pb-3 "><b>Add Cv/Resume</b></h1>
              <p className="pb-1.5">Cv/Resume Name</p>
              
              <div className="w-[452px] border-gray-300 rounded-md h-[48px] border-2">
              </div>
             </div>


             <div className="w-[452px]  text-center h-[122px] ">
              <h1 className="pb-3 "><b>Add Cover Letter</b></h1>
              <p className="pb-1.5">Cover Letter Name</p>
              
              <div className="w-[452px] border-gray-300 rounded-md h-[48px] border-2">
              </div>
             </div>


             <div className="h-fit">
            <h1 className="py-1">Upload your Photo</h1>
            <div className="w-[452px] rounded-md flex justify-center flex-col items-center bg-[#F1F2F466] h-[152px] border-2 border-dashed border-gray-400">
              <img src={Cloud} alt="img" />
              <p>
                <b>Browse File</b> or drop here
              </p>
              <p className="text-[#5E6670]">
                Only PDF format available . Max file size 12 MB.
              </p>
            </div>
          </div>


          <div className="h-fit">
            <h1 className="py-1">Upload your Photo</h1>
            <div className="w-[452px] rounded-md flex justify-center flex-col items-center bg-[#F1F2F466] h-[152px] border-2 border-dashed border-gray-400">
              <img src={Cloud} alt="img" />
              <p>
                <b>Browse File</b> or drop here
              </p>
              <p className="text-[#5E6670]">
                Only PDF format available . Max file size 12 MB.
              </p>
            </div>
          </div>


        </div>
        <button className="bg-[#7900BA] text-white w-[490px] h-[60px] block mx-auto rounded-md mt-4">
              Update
        </button>
      </div>
     
    </div>
  );
}

export default Document;
