import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";

import users from "../users.json";

export function ClientsProfilePicture() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-wrap ">
          {users.map((user, index) => (
            <div key={index} className="p-10 ">
              <Dropdown
                label={
                  <Avatar
                    alt="User image"
                    img={user.img}
                    size="xl"
                    className="object-contain"
                  />
                }
                arrowIcon={false}
                inline
                className="object-cover"
              >
                <DropdownHeader>
                  <span className="block text-sm">{user.name}</span>
                  <span className="block truncate text-sm font-medium">
                    {" "}
                    {user.email}
                  </span>
                </DropdownHeader>
                <DropdownItem>Send a message [eid mubarak] (50 $)</DropdownItem>
                <DropdownItem>
                  Send a message [your project has been updated] (50 $)
                </DropdownItem>
                <DropdownItem>Information</DropdownItem>
              </Dropdown>
              <h2 className="m-3">{user.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
