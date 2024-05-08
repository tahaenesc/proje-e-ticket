"use client";
import React, { useState } from "react";
import Filters from "../Header/Filters";
import SideBar from "../SideBar";
import TaskList from "../TaskList";
import { IoMdClose } from "react-icons/io";
import { FaEye } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import TabComponent from "../TabComponent/TabComponent";
import MiniTaskList from "../MiniTaskList";
import TableTaskList from "../TableTaskList";

type Props = {};

const Sort3Page = (props: Props) => {
  const [IsTaskDetailOpen, setIsTaskDetailOpen] = useState<boolean>(false);
  return (
    <>
      <div className="w-full">
        <Filters />
        <div className="flex">
          <SideBar />
          <TableTaskList setIsTaskDetailOpen={setIsTaskDetailOpen} />
        </div>
      </div>
      {IsTaskDetailOpen && (
        <div className="border w-2/3 ">
          <div
            className="h-[230px] bg-[#536DFE] text-white p-5 flex
          flex-col justify-center gap-10"
          >
            <div className="flex justify-between ">
              <p className="text-white ">KFC - WEBSİTE PROJECT</p>
              <IoMdClose
                onClick={() => setIsTaskDetailOpen(false)}
                size={25}
                className=" cursor-pointer"
              />
            </div>
            <p className="text-white text-3xl ">Product Detail Page</p>
            <div className="flex justify-between pt-3">
              <div className=" bg-[#4FC2F7] rounded-lg text-white text-center w-20 h-6 ">
                DESİGN
              </div>
              <div className="flex justify-end gap-8">
                <FaEye className=" cursor-pointer " size={25} color="black" />
                <MdDone className=" cursor-pointer" size={30} color="white" />
                <BsThreeDotsVertical
                  className=" cursor-pointer"
                  size={30}
                  color="white"
                />
              </div>
            </div>
          </div>

          <TabComponent />
        </div>
      )}
    </>
  );
};

export default Sort3Page;
