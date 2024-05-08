import React from "react";
import {
  AnalyticsIcon,
  EarthIcon,
  FileIcon,
  HomePageIcon,
  MessageBoxIcon,
  SearchInputIcon,
  UserIcon,
} from "@/components/Icons";
import { Avatar, Button, TextInput } from "flowbite-react";
import Link from "next/link";
import { UserPlace } from "../UserPlace";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="bg-grey2 px-4 lg:px-10 flex justify-between">
      <div className="flex ">
        <Link href="/home" className="flex items-center">
          <HomePageIcon />
          <div className="text-white flex font-medium text-md lg:text-lg">
            <div>Task</div>
            <div className="font-thin">&</div>
            <div>Tickets</div>
          </div>
        </Link>

        <div className="flex items-center lg:w-[450px] mx-4 lg:mx-10">
          <div className="flex items-center w-full relative">
            {/* <input
              className="bg-gray-900 text-white w-full p-2 rounded-md"
              placeholder="Search for people, tasks, tickets and projects..."
            /> */}
            <TextInput
              color="header_search_input"
              sizing="header_search_input"
              placeholder="Search for people, tasks, tickets and projects..."
              type="text"
              className="w-full"
            />
            <SearchInputIcon className="absolute right-0 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        <div className="border-x-2 px-10 border-gray-900 items-center justify-center hidden lg:flex">
          <AnalyticsIcon />
        </div>

        <div className="hidden lg:flex items-center gap-10 ml-20">
          <UserIcon />
          <FileIcon />
          <MessageBoxIcon />
          <EarthIcon />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex gap-5 lg:gap-10">
          <UserPlace/>
          <div>
            <Link
              className="bg-darkBlue rounded-md text-white font-medium w-full h-full px-4 lg:px-8 flex items-center"
              href="/add"
            >
              +Add
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
