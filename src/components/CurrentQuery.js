import React, { useState } from "react";
import axios from "axios";
import getTimeElapsed from "./function/getTimeElapsed";
import { MdDelete } from "react-icons/md";

const CurrentQuery = ({ user, post, refreshData, canDelete }) => {
  const [timeElapsed, setTimeElapsed] = useState(
    new Date().getTime() - new Date(post.createdAt)
  );

  const handleDelete = async () => {
    refreshData();
    await axios.delete(`/api/user/post/delete/${post._id}`);
  };

  const handleSolved = async () => {
    refreshData();
    await axios.post(`/api/user/post/${post._id}`, { solved: true });
  };

  return (
    <>
      <section className="w-full flex content-center items-center flex-col bg-lightMode-component text-lightMode-txt dark:bg-darkMode-component dark:text-darkMode-txt shadow-xl p-4 gap-4 rounded-lg min-w-1/2">
        <div className="flex content-center items-center w-full">
          <div className="w-full flex flex-row content-center items-center">
            <img
              className="w-10 h-10 rounded-full"
              src={user.profile}
              alt="img"
            />
            <div className="flex flex-col">
              <span className="ml-4 text-sm font-medium tracking-tight">
                {user.fullname}
              </span>
              <span className="ml-4 text-xs">
                {getTimeElapsed(timeElapsed)} ago
              </span>
            </div>
          </div>
          {canDelete && (
            <span
              className="text-center text-3xl hover:text-red-600 cursor-pointer"
              onClick={handleDelete}
            >
              <MdDelete />
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <p className="text-sm text-justify font-sans">{post.description}</p>
          {post.image !== "" && (
            <img
              className="w-auto h-[300px] object-contain"
              src={post.image}
              alt=""
            />
          )}
        </div>
        <div className="flex items-end w-full justify-end mr-2">
          <button
            className="text-sm bg-cyan-500 text-white  dark:bg-cyan-800 p-1 px-3 rounded-lg hover:bg-cyan-700 "
            onClick={handleSolved}
          >
            Solved
          </button>
        </div>
      </section>
    </>
  );
};

export default CurrentQuery;
