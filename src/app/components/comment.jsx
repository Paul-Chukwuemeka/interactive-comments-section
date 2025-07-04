import Image from "next/image";
import { use, useState } from "react";
import { FaPlus, FaMinus, FaReply } from "react-icons/fa";
import Reply from "./reply";

const Comment = ({ comment, data }) => {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);

  return (
    <div className=" h-fit w-full flex flex-col items-end gap-3">
      <div className="flex items-center gap-3 bg-white p-4 rounded-md">
        <div className="flex flex-col h-30 px-4  items-center  justify-between rounded-lg bg-[#c3c4ef6f] p-2">
          <button
            className="text-md text-[#67727e]"
            // disabled ={isUpvoted} alternative for checking if is upvoted is true on button click
            onClick={() => {
              if (isUpvoted) return;
              else {
                if (isDownvoted) {
                  setIsDownvoted(false);
                  setIsUpvoted(true);
                  data.comments.map((item) => {
                    if (comment.id === item.id) {
                      item.score += 2;
                    }
                    console.log(comment.score);
                  });
                } else {
                  setIsUpvoted(true);
                  data.comments.map((item) => {
                    if (comment.id == item.id) {
                      item.score += 1;
                    }
                  });
                }
              }
            }}
          >
            <FaPlus />
          </button>
          <h1 className="text-xl text-[#5457b6] font-bold">{comment.score}</h1>
          <button className="text-md text-[#67727e]"
          onClick={()=>{
             if (isDownvoted) return;
              else {
                if (isUpvoted) {
                  setIsDownvoted(true);
                  setIsUpvoted(false);
                  data.comments.map((item) => {
                    if (comment.id === item.id) {
                      item.score -= 2;
                    }
                  });
                } else {
                  setIsDownvoted(true);
                  data.comments.map((item) => {
                    if (comment.id == item.id) {
                      item.score -= 1;
                    }
                  });
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
      <div className="w-11/12 flex flex-col gap-3 border-l-2 border-gray-400 pl-4">
        {comment.replies.length > 0 &&
          comment.replies.map((reply,index) => {
            return <Reply reply={reply} key={index} comment={comment} />;
          })}
      </div>
    </div>
  );
};

export default Comment;
