"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import {
  GAllIcon,
  GProjectIcon,
  GBagIcon,
  GHourIcon,
  GTriIcon,
  GFourDotIcon,
  GFlagIcon,
  UserIcon,
  GUserIcon,
  RFlagIcon,
} from "../Icons";

type Props = {
  setIsTaskDetailOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TableTaskList = ({ setIsTaskDetailOpen }: Props) => {
  return (
    <>
      <div className="w-full m-6">
        <div className="">
          <div className="">
            <h2 className="text-[#C5C5C5]">TODAY</h2>
          </div>
          <div className="mt-4">
            <Table>
              <TableHead>
                <TableHeadCell>
                  <GAllIcon />
                </TableHeadCell>
                <TableHeadCell>
                  <GProjectIcon />
                </TableHeadCell>
                <TableHeadCell>
                  <GBagIcon />
                </TableHeadCell>
                <TableHeadCell>
                  <GHourIcon />
                </TableHeadCell>
                <TableHeadCell>
                  <GUserIcon />
                </TableHeadCell>
                <TableHeadCell>
                  <GTriIcon />
                </TableHeadCell>
                <TableHeadCell>
                  <GFourDotIcon />
                </TableHeadCell>
                <TableHeadCell>
                  <GFlagIcon />
                </TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-l-8 border-[#556EFE]">
                    {"Product Detail Page"}
                  </TableCell>
                  <TableCell>Website Project</TableCell>
                  <TableCell>KFC</TableCell>
                  <TableCell>10 d</TableCell>
                  <TableCell>Arzan</TableCell>
                  <TableCell>Çağrı</TableCell>
                  <TableCell className="text-[#ba95be]">FRONT-END</TableCell>
                  <TableCell>
                    <RFlagIcon />
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-l-8 border-[#556EFE]">
                    {"Product Detail Page"}
                  </TableCell>
                  <TableCell>Website Project</TableCell>
                  <TableCell>KFC</TableCell>
                  <TableCell>10 d</TableCell>
                  <TableCell>Arzan</TableCell>
                  <TableCell>Çağrı</TableCell>
                  <TableCell className="text-[#ba95be]">FRONT-END</TableCell>
                  <TableCell>
                    <RFlagIcon />
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-l-8 border-[#df3f75]">
                    {"Product Detail Page"}
                  </TableCell>
                  <TableCell>Website Project</TableCell>
                  <TableCell>KFC</TableCell>
                  <TableCell>10 d</TableCell>
                  <TableCell>Arzan</TableCell>
                  <TableCell>Çağrı</TableCell>
                  <TableCell className="text-[#ba95be]">FRONT-END</TableCell>
                  <TableCell>
                    <RFlagIcon />
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-l-8 border-[#df3f75]">
                    {"Product Detail Page"}
                  </TableCell>
                  <TableCell>Website Project</TableCell>
                  <TableCell>KFC</TableCell>
                  <TableCell>10 d</TableCell>
                  <TableCell>Arzan</TableCell>
                  <TableCell>Çağrı</TableCell>
                  <TableCell className="text-[#ba95be]">FRONT-END</TableCell>
                  <TableCell>
                    <RFlagIcon />
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-l-8 border-[#556EFE]">
                    {"Product Detail Page"}
                  </TableCell>
                  <TableCell>Website Project</TableCell>
                  <TableCell>KFC</TableCell>
                  <TableCell>10 d</TableCell>
                  <TableCell>Arzan</TableCell>
                  <TableCell>Çağrı</TableCell>
                  <TableCell className="text-[#ba95be]">FRONT-END</TableCell>
                  <TableCell>
                    <RFlagIcon />
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-l-8 border-[#df3f75]">
                    {"Product Detail Page"}
                  </TableCell>
                  <TableCell>Website Project</TableCell>
                  <TableCell>KFC</TableCell>
                  <TableCell>10 d</TableCell>
                  <TableCell>Arzan</TableCell>
                  <TableCell>Çağrı</TableCell>
                  <TableCell className="text-[#ba95be]">FRONT-END</TableCell>
                  <TableCell>
                    <RFlagIcon />
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-l-8 border-[#556EFE]">
                    {"Product Detail Page"}
                  </TableCell>
                  <TableCell>Website Project</TableCell>
                  <TableCell>KFC</TableCell>
                  <TableCell>10 d</TableCell>
                  <TableCell>Arzan</TableCell>
                  <TableCell>Çağrı</TableCell>
                  <TableCell className="text-[#ba95be]">FRONT-END</TableCell>
                  <TableCell>
                    <RFlagIcon />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="mt-4 gap-1">
          <div className="">
            <h2 className="text-[#C5C5C5]">TOMORROW</h2>
          </div>
          <div className="mt-4">
            <Table>
              <TableHead>
                <TableHeadCell>
                  <GAllIcon />
                </TableHeadCell>
                <TableHeadCell>
                  <GProjectIcon />
                </TableHeadCell>
                <TableHeadCell>
                  <GBagIcon />
                </TableHeadCell>
                <TableHeadCell>
                  <GHourIcon />
                </TableHeadCell>
                <TableHeadCell>
                  <GUserIcon />
                </TableHeadCell>
                <TableHeadCell>
                  <GTriIcon />
                </TableHeadCell>
                <TableHeadCell>
                  <GFourDotIcon />
                </TableHeadCell>
                <TableHeadCell>
                  <GFlagIcon />
                </TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-l-8 border-[#df3f75]">
                    {"Product Detail Page"}
                  </TableCell>
                  <TableCell>Website Project</TableCell>
                  <TableCell>KFC</TableCell>
                  <TableCell>10 d</TableCell>
                  <TableCell>Arzan</TableCell>
                  <TableCell>Çağrı</TableCell>
                  <TableCell className="text-[#ba95be]">FRONT-END</TableCell>
                  <TableCell>
                    <RFlagIcon />
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-l-8 border-[#556EFE]">
                    {"Product Detail Page"}
                  </TableCell>
                  <TableCell>Website Project</TableCell>
                  <TableCell>KFC</TableCell>
                  <TableCell>10 d</TableCell>
                  <TableCell>Arzan</TableCell>
                  <TableCell>Çağrı</TableCell>
                  <TableCell className="text-[#ba95be]">FRONT-END</TableCell>
                  <TableCell>
                    <RFlagIcon />
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-l-8 border-[#556EFE]">
                    {"Product Detail Page"}
                  </TableCell>
                  <TableCell>Website Project</TableCell>
                  <TableCell>KFC</TableCell>
                  <TableCell>10 d</TableCell>
                  <TableCell>Arzan</TableCell>
                  <TableCell>Çağrı</TableCell>
                  <TableCell className="text-[#ba95be]">FRONT-END</TableCell>
                  <TableCell>
                    <RFlagIcon />
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-l-8 border-[#df3f75]">
                    {"Product Detail Page"}
                  </TableCell>
                  <TableCell>Website Project</TableCell>
                  <TableCell>KFC</TableCell>
                  <TableCell>10 d</TableCell>
                  <TableCell>Arzan</TableCell>
                  <TableCell>Çağrı</TableCell>
                  <TableCell className="text-[#ba95be]">FRONT-END</TableCell>
                  <TableCell>
                    <RFlagIcon />
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-l-8 border-[#556EFE]">
                    {"Product Detail Page"}
                  </TableCell>
                  <TableCell>Website Project</TableCell>
                  <TableCell>KFC</TableCell>
                  <TableCell>10 d</TableCell>
                  <TableCell>Arzan</TableCell>
                  <TableCell>Çağrı</TableCell>
                  <TableCell className="text-[#ba95be]">FRONT-END</TableCell>
                  <TableCell>
                    <RFlagIcon />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableTaskList;
