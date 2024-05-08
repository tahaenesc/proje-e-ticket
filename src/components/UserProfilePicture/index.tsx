import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";

import users from "../users.json";

export function UserProfilePicture() {
  const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      img: "/img/proje1.jpeg",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      img: "/img/proje2.jpeg",
    },
    {
      "name": "Alice Smith",
      "email": "alice.smith@example.com",
      "img": "/img/proje3.jpeg"
    },
    {
      "name": "Bob Johnson",
      "email": "bob.johnson@example.com",
      "img": "/img/proje4.jpeg"
    },
    {
      "name": "Emily Brown",
      "email": "emily.brown@example.com",
      "img": "/img/proje5.jpeg"
    },
    {
      "name": "Michael Wilson",
      "email": "michael.wilson@example.com",
      "img": "/img/proje6.jpeg"
    },
    {
      "name": "Jessica Lee",
      "email": "jessica.lee@example.com",
      "img": "/img/proje7.jpeg"
    },
    {
      "name": "David Martinez",
      "email": "david.martinez@example.com",
      "img": "/img/proje8.jpeg"
    },
  ];

  return (
    <>
      <div className="flex">
        <div className="p-10">
          <Dropdown
            label={
              <Avatar alt="User settings" img="/img/proje.jpeg" size="xl" />
            }
            arrowIcon={false}
            inline
            className=""
          >
            <DropdownHeader>
              <span className="block text-sm">Taha Enes Cinli</span>
              <span className="block truncate text-sm font-medium">
                tahaenes.cinli@proj-e.com
              </span>
            </DropdownHeader>
            <DropdownItem>Send a message</DropdownItem>
            <DropdownItem>Information</DropdownItem>
          </Dropdown>
          <h2 className="m-3">Taha Enes Cinli</h2>
        </div>

        <div className="p-10">
          <Dropdown
            label={
              <Avatar alt="User settings" img="/img/proje.jpeg" size="xl" />
            }
            arrowIcon={false}
            inline
            className=""
          >
            <DropdownHeader>
              <span className="block text-sm">Taha Enes Cinli</span>
              <span className="block truncate text-sm font-medium">
                tahaenes.cinli@proj-e.com
              </span>
            </DropdownHeader>
            <DropdownItem>Send a message</DropdownItem>
            <DropdownItem>Information</DropdownItem>
          </Dropdown>
          <h2 className="m-3">Taha Enes Cinli</h2>
        </div>

        <div className="p-10">
          <Dropdown
            label={
              <Avatar alt="User settings" img="/img/proje.jpeg" size="xl" />
            }
            arrowIcon={false}
            inline
            className=""
          >
            <DropdownHeader>
              <span className="block text-sm">Taha Enes Cinli</span>
              <span className="block truncate text-sm font-medium">
                tahaenes.cinli@proj-e.com
              </span>
            </DropdownHeader>
            <DropdownItem>Send a message</DropdownItem>
            <DropdownItem>Information</DropdownItem>
          </Dropdown>
          <h2 className="m-3">Taha Enes Cinli</h2>
        </div>

        <div className="p-10">
          <Dropdown
            label={
              <Avatar alt="User settings" img="/img/proje.jpeg" size="xl" />
            }
            arrowIcon={false}
            inline
            className=""
          >
            <DropdownHeader>
              <span className="block text-sm">Taha Enes Cinli</span>
              <span className="block truncate text-sm font-medium">
                tahaenes.cinli@proj-e.com
              </span>
            </DropdownHeader>
            <DropdownItem>Send a message</DropdownItem>
            <DropdownItem>Information</DropdownItem>
          </Dropdown>
          <h2 className="m-3">Taha Enes Cinli</h2>
        </div>

        <div className="p-10">
          <Dropdown
            label={
              <Avatar alt="User settings" img="/img/proje.jpeg" size="xl" />
            }
            arrowIcon={false}
            inline
            className=""
          >
            <DropdownHeader>
              <span className="block text-sm">Taha Enes Cinli</span>
              <span className="block truncate text-sm font-medium">
                tahaenes.cinli@proj-e.com
              </span>
            </DropdownHeader>
            <DropdownItem>Send a message</DropdownItem>
            <DropdownItem>Information</DropdownItem>
          </Dropdown>
          <h2 className="m-3">Taha Enes Cinli</h2>
        </div>

        <div className="p-10">
          <Dropdown
            label={
              <Avatar alt="User settings" img="/img/proje.jpeg" size="xl" />
            }
            arrowIcon={false}
            inline
            className=""
          >
            <DropdownHeader>
              <span className="block text-sm">Taha Enes Cinli</span>
              <span className="block truncate text-sm font-medium">
                tahaenes.cinli@proj-e.com
              </span>
            </DropdownHeader>
            <DropdownItem>Send a message</DropdownItem>
            <DropdownItem>Information</DropdownItem>
          </Dropdown>
          <h2 className="m-3">Taha Enes Cinli</h2>
        </div>

        <div className="p-10">
          <Dropdown
            label={
              <Avatar alt="User settings" img="/img/proje.jpeg" size="xl" />
            }
            arrowIcon={false}
            inline
            className=""
          >
            <DropdownHeader>
              <span className="block text-sm">Taha Enes Cinli</span>
              <span className="block truncate text-sm font-medium">
                tahaenes.cinli@proj-e.com
              </span>
            </DropdownHeader>
            <DropdownItem>Send a message</DropdownItem>
            <DropdownItem>Information</DropdownItem>
          </Dropdown>
          <h2 className="m-3">Taha Enes Cinli</h2>
        </div>

        <div className="p-10">
          <Dropdown
            label={
              <Avatar alt="User settings" img="/img/proje.jpeg" size="xl" />
            }
            arrowIcon={false}
            inline
            className=""
          >
            <DropdownHeader>
              <span className="block text-sm">Taha Enes Cinli</span>
              <span className="block truncate text-sm font-medium">
                tahaenes.cinli@proj-e.com
              </span>
            </DropdownHeader>
            <DropdownItem>Send a message</DropdownItem>
            <DropdownItem>Information</DropdownItem>
          </Dropdown>
          <h2 className="m-3">Taha Enes Cinli</h2>
        </div>

        
      </div>
      <div className="flex">
        {Array.from({
          length: 9,
        }).map((user, index) => (
          <div key={index} className="p-10">
            <Dropdown
              label={
                <Avatar alt="User settings" img="/img/proje.jpeg" size="xl" />
              }
              arrowIcon={false}
              inline
              className=""
            >
              <DropdownHeader>
                <span className="block text-sm">{}</span>
                <span className="block truncate text-sm font-medium">{}</span>
              </DropdownHeader>
              <DropdownItem>Send a message</DropdownItem>
              <DropdownItem>Information</DropdownItem>
            </Dropdown>
            <h2 className="m-3">{}</h2>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap">
        {users.map((user, index) => (
          <div key={index} className="p-10">
            <Dropdown
              label={
                <Avatar alt="User settings" img="/img/proje.jpeg" size="xl" />
              }
              arrowIcon={false}
              inline
              className=""
            >
              <DropdownHeader>
                <span className="block text-sm">{user.name}</span>
                <span className="block truncate text-sm font-medium">
                  {" "}
                  {user.email}
                </span>
              </DropdownHeader>
              <DropdownItem>Send a message</DropdownItem>
              <DropdownItem>Information</DropdownItem>
            </Dropdown>
            <h2 className="m-3">{user.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
