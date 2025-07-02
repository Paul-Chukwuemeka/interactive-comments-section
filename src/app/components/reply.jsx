import React from "react";
import { useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus, FaReply } from "react-icons/fa";

const Reply = ({ reply }) => {
  return (
    <div className="flex bg-white p-4 items-center rounded-md">
      <div className="flex flex-col h-30 px-4  items-center  justify-between rounded-lg bg-[#c3c4ef6f] p-2">
        <button className="text-md text-[#67727e]">
          <FaPlus />
        </button>
        <h1 className="text-xl text-[#5457b6] font-bold">{reply.score}</h1>
        <button className="text-md text-[#67727e]">
          <FaMinus />
        </button>
      </div>
      <div className="flex-1 p-2">
        <div className="flex items-center gap-2 p-2 justify-between">
          <div className="flex items-center gap-2">
            <Image
              className="w-8"
              src={`/${reply?.user?.image?.png.replace(/^\/?/, "")}`}
              width={100}
              height={100}
              alt={reply?.user?.username || "user avatar"}
            />
            <p className="text-[#5457b6] font-bold text-lg">
              {reply.user.username}
            </p>
            <p className="text-[#67727e] font-semibold">{reply.createdAt}</p>
          </div>
          <button className="text-[#5457b6] font-bold flex items-center gap-1 text-xl">
            <FaReply /> Reply
          </button>
        </div>
        <h1 className="text-lg font-semibold text-[#67727e]">
          {reply?.content}
        </h1>
      </div>
    </div>
  );
};

export default Reply;
