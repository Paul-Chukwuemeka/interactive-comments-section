import React from "react";

const DeleteModal = ({setIsDelete}) => {
  return (
    <div className="absolute z-[10000] flex items-center justify-center bg-[#1a191920] top-0 left-0 h-screen w-screen">
      <div className="bg-white shadow-lg w-full max-w-[440px] p-6 flex flex-col gap-4 ">
        <h1 className="text-[#1e2731] text-2xl font-bold">Delete Comment?</h1>
        <p className="text-lg font-medium text-gray-500">
          Are you sure you want to delete this comment?. This will remove the
          comment and can't be undone.
        </p>
        <div className="flex justify-between gap-4 *:cursor-pointer *:w-1/2 *:text-lg *:font-medium *:text-white *:h-13 *:rounded-lg">
          <button className="bg-gray-500" onClick={()=>{setIsDelete(false)}}>No,Cancel</button>
          <button className="bg-[#ed6468]">Yes,Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
