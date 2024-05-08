import { Avatar, Button, Popover } from "flowbite-react";
import React from "react";
import Link from "next/link";

export const UserPlace = () => {
  return (
    <Popover
      aria-labelledby="default-popover"
      content={
        <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
          <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
            <h3
              id="default-popover"
              className="font-semibold text-gray-900 dark:text-white"
            >
              User Settings
            </h3>
          </div>
          <div className="px-3 py-2 gap-5">
            <Link href="/home">
              <div className="flex gap-5 items-center justify-between">
                <p>For Developer</p>
                <Button color="dark" size="xs" className="flex">
                  Tap Here
                </Button>
              </div>
            </Link>
            <div className="mt-3">
              <Link href="/customer">
                <div className="flex gap-5 items-center justify-between">
                  <p>For Customer</p>
                  <Button color="dark" size="xs" className="flex">
                    Tap Here
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      }
    >
      <Button color="header_tridot_icon">
        <div className="flex items-center justify-center gap-5 text-white ">
          <Avatar rounded />
          <div className=" font-medium text-lg">Taha Enes</div>
        </div>
      </Button>
    </Popover>
  );
};
