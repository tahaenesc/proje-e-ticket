"use client";
import { useState } from "react";

type Props = {
  setIsTaskDetailOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function TaskComponent({  setIsTaskDetailOpen }: Props) {
  return (
    <>
      <div
        className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 border-l-[#546EFF] border-l-8 cursor-pointer"
        onClick={() => {
          setIsTaskDetailOpen(true);
        }}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Product Detail Page
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 border-b-2 pb-4 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
          minus molestiae vel beatae natus eveniet ratione temporibus aperiam
          harum alias officiis assumenda officia quibusdam deleniti eos
          cupiditate dolore doloribus!
        </p>
        <div className="flex mt-5">
          <p> KFC - WEBSİTE PROJECT </p>
          <svg
            className="ml-16"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" stroke="#9E9E9E" stroke-width="1.5" />
            <path d="M11 5V10L15 14" stroke="#9E9E9E" />
          </svg>
          <p className="ml-2"> 10 d </p>
          <svg
            className="ml-16"
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 9.5L0.249999 18.5933L0.25 0.406733L16 9.5Z"
              fill="#A1A1A1"
            />
          </svg>
          <p className="ml-2"> Taha Enes Cinli </p>
          <svg
            className="ml-16"
            width="32"
            height="23"
            viewBox="0 0 32 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="17.4483" rx="5" fill="#A1A1A1" />
            <path
              d="M26.5366 23L15.6097 17.4483H23.4146L26.5366 23Z"
              fill="#9E9E9E"
            />
          </svg>
          <svg
            className="ml-16"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="12" r="4" fill="#C199C7" />
            <circle cx="12" cy="20" r="4" fill="#C199C7" />
            <circle cx="12" cy="4" r="4" fill="#C199C7" />
            <circle cx="20" cy="12" r="4" fill="#C199C7" />
          </svg>
          <p className="ml-2 font-bold text-[#C199C7]"> FRONT-END </p>
        </div>
      </div>
    </>
  );
}
