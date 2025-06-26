import React from "react";
import { useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus, FaReply } from "react-icons/fa";

const Reply = ({ replies }) => {
  const [upvoted, setUpvoted] = useState([]);
  const [downvoted, setDownvoted] = useState([]);
  
  return (
    <div className="w-11/12 border-l-2 mt-4 border-[#b7b8ba] h-fit  flex flex-col items-end p-4 ">
      {replies.map((reply, replyIndex) => {
        return (
          <div
            key={replyIndex}
            className="flex items-center gap-3 bg-white p-4 rounded-md"
          >
            <div className="flex flex-col h-30 px-4  items-center  justify-between rounded-lg bg-[#c3c4ef6f] p-2">
              <button
                className="text-md text-[#67727e]"
                onClick={() => {
                  if (!downvoted.includes(reply.id)) {
                    if (!upvoted.includes(reply.id)) {
                      setUpvoted([...upvoted, reply.id]);
                      reply.score++;
                    }
                  } else {
                    setDownvoted(downvoted.filter((id) => id !== reply.id));
                    if (!upvoted.includes(reply.id)) {
                      setUpvoted([...upvoted, reply.id]);
                      reply.score += 2;
                    }
                  }
                }}
              >
                <FaPlus />
              </button>
              <h1 className="text-xl text-[#5457b6] font-bold">
                {reply.score}
              </h1>
              <button
                className="text-md text-[#67727e]"
                onClick={() => {
                  if (!upvoted.includes(reply.id)) {
                    if (!downvoted.includes(reply.id)) {
                      setDownvoted([...downvoted, reply.id]);
                      reply.score--;
                    }
                  } else {
                    setUpvoted(upvoted.filter((id) => id !== reply.id));
                    if (!downvoted.includes(reply.id)) {
                      setDownvoted([...downvoted, reply.id]);
                      reply.score -= 2;
                    }
                  }
                }}
              >
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
                  <p className="text-[#67727e] font-semibold">
                    {reply.createdAt}
                  </p>
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
      })}
    </div>
  );
};

export default Reply;
