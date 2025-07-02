"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "./components/comment";

export default function Home() {
  const [data, setData] = useState(null);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/data.json");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <main className="w-full max-w-[800px] h-fit flex flex-col">
        {data?.comments?.map((comment, index) => {
          return (
            <Comment comment={comment} key={index} data={data}/>
          );
        })}
      </main>
    </div>
  );
}
// This is the main page component for the application.
