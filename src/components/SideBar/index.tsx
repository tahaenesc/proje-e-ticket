import {
  ProjectIcon,
  ClientIcon,
  AllIcon,
  DoneIcon,
  ArchivedIcon,
  RecentIcon,
  TaskIcon,
  TicketIcon,
  FlagIcon,
  AdminIcon,
  DepartmantIcon,
} from "@/components/Icons";
import React from "react";
import { ClientDropdown } from "../ClientDropDown/Client";

const SideBar = () => {
  return (
    <>
      <div className="w-60 ml-2 hidden lg:block">
        <div className="border-r-2 border-gray-200 p-2">
          <div className="flex ml-6 mt-4">
            <RecentIcon />
            <p className="ml-6">Recent</p>
          </div>
          <div className="flex ml-6 mt-8">
            <DoneIcon />
            <p className="ml-6">Done</p>
          </div>
          <div className="flex ml-6 mt-8 mb-6">
            <ArchivedIcon />
            <p className="ml-6">Archived</p>
          </div>
        </div>
        <div className="border-r-2 border-t-2 border-gray-200 p-2">
          <div className="flex ml-6 mt-6">
            <AllIcon />
            <p className="ml-6">All</p>
          </div>
          <div className="flex ml-6 mt-8">
            <TaskIcon />
            <p className="ml-6">Task</p>
          </div>
          <div className="flex ml-6 mt-8 mb-6">
            <TicketIcon />
            <p className="ml-6">Ticket</p>
          </div>
        </div>
        <div className="border-r-2 border-t-2 border-gray-200 p-2">
          <div className="flex ml-6 mt-4 mb-4">
            <FlagIcon />
            <p className="ml-6">Flagged Only</p>
          </div>
        </div>
        <div className="border-r-2 border-t-2 border-gray-200 p-2">
          <div className="flex ml-1 mt-1">
            <ClientDropdown />
          </div>
          <div className="flex ml-6 mt-8">
            <ProjectIcon />
            <p className="ml-6">Projects</p>
          </div>
          <div className="flex ml-6 mt-8">
            <AdminIcon />
            <p className="ml-6">Admin</p>
          </div>
          <div className="flex ml-6 mt-8 mb-6">
            <DepartmantIcon />
            <p className="ml-6">Departmant</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
