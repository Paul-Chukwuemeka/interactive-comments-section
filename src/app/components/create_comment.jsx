"use client";
import React, { useRef, useEffect, useContext, useState } from "react";
import Image from "next/image";
import { v1 as uuidv1 } from "uuid";
import { AppContext } from "../context";

const Create_Comment = () => {
  const textareaRef = useRef(null);
  const [comment, setComment] = useState("");
  const [commentToAdd, setCommentToAdd] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const { setAddReplyParent, addReplyParent, data, setData } =
    useContext(AppContext);

  useEffect(() => {
    if (addReplyParent == null) {
      setAddReplyParent(data.comments);
    }
    setCurrentUser(data.currentUser);
  }, [data]);

  useEffect(() => {
    console.log(addReplyParent);
  }, [addReplyParent]);

  useEffect(() => {
    setData({
      ...data,
      comments: [...comment, commentToAdd],
    });
  }, [commentToAdd]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const handleInput = () => {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      };
      textarea.addEventListener("input", handleInput);
      return () => {
        textarea.removeEventListener("input", handleInput);
      };
    }
  }, []);

  return (
    <div className="flex w-full bg-white mt-4 rounded-lg items-start p-4 gap-4">
      {currentUser?.image && (
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
        value={comment}
        type="text"
        placeholder="Add a comment..."
        className="border p-2 flex-1 min-h-28 rounded-md focus:outline-none border-gray-300"
        style={{ overflow: "hidden" }}
        onInput={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        className="text-lg  font-bold text-white bg-[#5457b6] w-24 h-12 rounded-lg"
        onClick={() => {
          setCommentToAdd({
            id: uuidv1(),
            content: comment,
            score: 1,
            replies: [],
            user: currentUser,
            createdAt: new Date().toLocaleString(),
          });
        }}
      >
        Send
      </button>
    </div>
  );
};

export default Create_Comment;
