import { Button, Popover } from "flowbite-react";
import { ThreeDotIcon } from "../Icons";

export function ThreeDotIconComp() {
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
              Settings
            </h3>
          </div>
          <div className="px-3 py-2 gap-5">
            <div className="flex gap-5 items-center justify-between">
              <p>Dark Theme</p>
              <Button color="dark" size="xs" className="">
                Dark
              </Button>
            </div>
            <div className="flex gap-5 items-center justify-between">
              <p>Blue Theme</p>
              <Button color="blue" size="xs" className="mt-2">
                Blue
              </Button>
            </div>
          </div>
        </div>
      }
    >
      <Button color="header_tridot_icon">
        <ThreeDotIcon />
      </Button>
    </Popover>
  );
}
