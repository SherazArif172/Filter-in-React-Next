"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import blog from "../data/blog.json";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [menue, setMenue] = useState("All");
  return (
    <div>
      <div className="my-10 px-5">
        <ul className="m-auto max-w-2xl flex gap-4  justify-center flex-wrap">
          <Button
            className={`" px-3 py-2 w-24 text-center  duration-500" ${
              menue === "All"
                ? "bg-white text-blue-700 border-black border"
                : "bg-blue-700 text-white"
            }`}
            onClick={() => {
              setMenue("All");
            }}
          >
            All
          </Button>
          <Button
            onClick={() => {
              setMenue("Javascript");
            }}
            className={`" px-3 py-2 w-24 text-center  " ${
              menue === "Javascript"
                ? "bg-white text-blue-700 border-black border"
                : "bg-blue-700 text-white"
            }`}
          >
            JavaScript
          </Button>
          <Button
            onClick={() => {
              setMenue("PHP");
            }}
            className={`" px-3 py-2 w-24 text-center  duration-500" ${
              menue === "PHP"
                ? "bg-white text-blue-700 border-black border"
                : "bg-blue-700 text-white"
            }`}
          >
            PHP
          </Button>
          <Button
            onClick={() => {
              setMenue("Html");
            }}
            className={`" px-3 py-2 w-24 text-center  duration-500" ${
              menue === "Html"
                ? "bg-white text-blue-700 border-black border"
                : "bg-blue-700 text-white"
            }`}
          >
            Html
          </Button>
          <Button
            onClick={() => {
              setMenue("React");
            }}
            className={`" px-3 py-2 w-24 text-center  duration-500" ${
              menue === "React"
                ? "bg-white text-blue-700 border-black border"
                : "bg-blue-700 text-white"
            }`}
          >
            React
          </Button>
          <Button
            onClick={() => {
              setMenue("CSS");
            }}
            className={`" px-3 py-2 w-24 text-center  duration-500" ${
              menue === "CSS"
                ? "bg-white text-blue-700 border-black border"
                : "bg-blue-700 text-white"
            }`}
          >
            CSS
          </Button>
        </ul>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-5 px-4">
        {blog
          .filter((item) => (menue === "All" ? true : item.category === menue))
          .map((item, index) => (
            <div
              key={index}
              class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto"
            >
              {/* <Link href="#"> */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={item.image}
                  fill
                  alt="image"
                  className="object-cover w-full h-full hover:scale-110 duration-500"
                />
              </div>
              {/* </Link> */}
              <div class="p-5">
                <Link href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </Link>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                  <p className="bg-blue-700 px-3 py-2 rounded-lg text-white ">
                    {item.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
