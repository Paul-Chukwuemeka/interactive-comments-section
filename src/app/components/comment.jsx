import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaMinus, FaReply } from "react-icons/fa";
import Reply from "./reply";

const Comment = ({ comment }) => {
  const [upvoted, setUpvoted] = useState([]);
  const [downvoted, setDownvoted] = useState([]);


  return (
    <div className=" h-fit w-full flex flex-col items-end">
      <div className="flex items-center gap-3 bg-white p-4 rounded-md">
        <div className="flex flex-col h-30 px-4  items-center  justify-between rounded-lg bg-[#c3c4ef6f] p-2">
          <button
            className="text-md text-[#67727e]"
            onClick={() => {
              if (!downvoted.includes(comment.id)) {
                if (!upvoted.includes(comment.id)) {
                  setUpvoted([...upvoted, comment.id]);
                  comment.score++;
                }
              } else {
                setDownvoted(downvoted.filter((id) => id !== comment.id));
                if (!upvoted.includes(comment.id)) {
                  setUpvoted([...upvoted, comment.id]);
                  comment.score += 2;
                }
              }
            }}
          >
            <FaPlus />
          </button>
          <h1 className="text-xl text-[#5457b6] font-bold">{comment.score}</h1>
          <button
            className="text-md text-[#67727e]"
            onClick={() => {
              if (!upvoted.includes(comment.id)) {
                if (!downvoted.includes(comment.id)) {
                  setDownvoted([...downvoted, comment.id]);
                  comment.score--;
                }
              } else {
                setUpvoted(upvoted.filter((id) => id !== comment.id));
                if (!downvoted.includes(comment.id)) {
                  setDownvoted([...downvoted, comment.id]);
                  comment.score -= 2;
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
                src={`/${comment?.user?.image?.png.replace(/^\/?/, "")}`}
                width={100}
                height={100}
                alt={comment?.user?.username || "user avatar"}
              />
              <p className="text-[#5457b6] font-bold text-lg">
                {comment.user.username}
              </p>
              <p className="text-[#67727e] font-semibold">
                {comment.createdAt}
              </p>
            </div>
            <button className="text-[#5457b6] font-bold flex items-center gap-1 text-xl">
              <FaReply /> Reply
            </button>
          </div>
          <h1 className="text-lg font-semibold text-[#67727e]">
            {comment?.content}
          </h1>
        </div>
      </div>
      {comment.replies.length > 0 && (
        <Reply replies={comment.replies} />
      )}
    </div>
  );
};

export default Comment;
