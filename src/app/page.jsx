"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Comment from "./components/comment";
import Create_Comment from "./components/create_comment";
import DeleteModal from "./components/Delete_Modal";
import { AppContext } from "./context";

export default function Home() {
  const { data, setData, deleteParent } = useContext(AppContext);
  const { isDelete, setIsDelete } = useContext(AppContext);

  useEffect(() => {
    if (deleteParent) {
      setData({
        ...data,
        comments: data.comments.map((comment) => {
          if (comment.id == deleteParent.id) {
            return deleteParent;
          } else {
            return comment;
          }
        }),
      });
    }
  }, [deleteParent]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/data.json");
        setData(response.data);
        console.log("data", response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center gap-10  justify-center">
      <main className="w-full max-w-[800px] h-fit flex flex-col">
        {data?.comments?.map((comment, index) => {
          return <Comment comment={comment} key={index} data={data} />;
        })}
        <Create_Comment currentUser={data && data.currentUser} />
      </main>
      {isDelete && <DeleteModal />}
    </div>
  );
}
// This is the main page component for the application.
