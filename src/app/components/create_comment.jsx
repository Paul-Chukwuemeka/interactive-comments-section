"use client"
import React, { useRef, useEffect } from "react";
import Image from "next/image";

const Create_Comment = ({ currentUser }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const handleInput = () => {
        textarea.style.height = "auto"
        textarea.style.height = `${textarea.scrollHeight}px`;
        console.log(textarea.scrollHeight)
      };
      textarea.addEventListener("input", handleInput);
      return () => {
        textarea.removeEventListener("input", handleInput);
      };
    }
  }, []);

  return (
    <div className="flex w-full bg-white mt-4 rounded-lg items-start p-4 gap-4">
      {currentUser && (
        <Image
          src={currentUser.image.png}
          width={200}
          height={200}
          alt="current User Image"
          className="w-12"
        />
      )}
      <textarea
        ref={textareaRef}
        type="text"
        placeholder="Add a comment..."
        className="border p-2 flex-1 min-h-28 rounded-md focus:outline-none border-gray-300"
        style={{ overflow: "hidden" }}
        
      />
      <button className="text-lg  font-bold text-white bg-[#5457b6] w-24 h-12 rounded-lg">
        Send
      </button>
    </div>
  );
};

export default Create_Comment;
