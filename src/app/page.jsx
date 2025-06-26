"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";

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
      <main className="w-full max-w-[600px] h-fit flex flex-col gap-5 ">
        {data?.comments?.map((comment, index) => {
          console.log(comment?.user?.image?.png);
          return (
            <div
              key={index}
              className="flex h-36 items-center gap-3 bg-white p-4"
            >
              <div className="flex flex-col h-18 items-center  justify-between">
                <button>
                  <FaPlus />
                </button>
                <h1>{comment.score}</h1>
                <button>
                  <FaMinus />
                </button>
              </div>
              <div className="flex-1">
                <div>
                  <Image
                    className="w-8"
                    src={`/${comment?.user?.image?.png.replace(/^\/?/, "")}`}
                    width={100}
                    height={100}
                    alt={comment?.user?.username || "user avatar"}
                  />
                  <p>{comment.user.username}</p>
                  <p>{comment.createdAt}</p>
                </div>
                <h1>{comment?.content}</h1>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
// This is the main page component for the application.
