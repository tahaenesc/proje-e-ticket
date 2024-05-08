"use client";
import React, { useState } from "react";
import { Drawer } from "flowbite-react";
import { TaskComponent } from "@/components/TaskComponent/TaskComp";
import TabComponent from "../TabComponent/TabComponent";
import { MiniTaskComponent } from "../MiniTaskComp/MiniTaskComp";
import { FaEye } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

type Props = {
  setIsTaskDetailOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TaskList = ({ setIsTaskDetailOpen }: Props) => {
  return (
    <>
      <div>
        <div className="ml-6 mr-6">
          <div className="m-4">
            <h2 className="text-[#C5C5C5]">TODAY</h2>
            <div className="mt-4">
              <TaskComponent setIsTaskDetailOpen={setIsTaskDetailOpen} />
            </div>
            <div className="mt-4">
              <TaskComponent setIsTaskDetailOpen={setIsTaskDetailOpen} />
            </div>
            <div className="mt-4">
              <TaskComponent setIsTaskDetailOpen={setIsTaskDetailOpen} />
            </div>
            {/* <div className="mt-4">
              <MiniTaskComponent />
            </div> */}
          </div>

          <div className=" m-4">
            <h2 className="text-[#C5C5C5]">TOMORROW</h2>

            <div className="mt-4">
              <TaskComponent setIsTaskDetailOpen={setIsTaskDetailOpen} />
            </div>
            <div className="mt-4">
              <TaskComponent setIsTaskDetailOpen={setIsTaskDetailOpen} />
            </div>
            <div className="mt-4">
              <TaskComponent setIsTaskDetailOpen={setIsTaskDetailOpen} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
