"use client";

import { Button, Tabs, TabsRef } from "flowbite-react";
import { useRef, useState } from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const TabComponent = () => {
  const tabsRef = useRef<TabsRef>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className=" justify-start p-5 bg-white h-full w-full ">
      <Tabs aria-label="Full width tabs" style="fullWidth">
        <Tabs.Item active title="INFO">
          <div className="pl-2 pr-2 pt-2 ">
            <h1 className="mb-4 ">DESCRİPTİON</h1>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Profile tabs associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </div>
        </Tabs.Item>
        <Tabs.Item title="FEED">
          <div className="pl-2 pr-2 pt-2 ">
            <h1 className="mb-4 ">DESCRİPTİON</h1>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Dashboard tabs associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </div>
        </Tabs.Item>
        <Tabs.Item title="COMMENTS">
          <div className="pl-2 pr-2 pt-2 ">
            <h1 className="mb-4 ">DESCRİPTİON</h1>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Settings tabs associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </div>
        </Tabs.Item>
        <Tabs.Item title="CONTACTS">
          <div className="pl-2 pr-2 pt-2 ">
            <h1 className="mb-4 ">DESCRİPTİON</h1>
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Contacts tabs associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default TabComponent;
