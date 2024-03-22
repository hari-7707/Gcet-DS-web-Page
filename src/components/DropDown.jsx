import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

const menuItems = [
  {
    title: "option 1",
  },
  {
    title: "option 2",
  },
  {
    title: " option 3",
  },
];

export default function DropDown({ setOpenNav, openNav }) {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center text-base font-normal capitalize tracking-normal lg:justify-center"
        >
          options
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>

      <MenuList className="bg-white">
        <ul className="col-span-4 flex flex-col gap-1 ">
          {menuItems.map(({ title, description }) => (
            <a href="https://github.com/" key={title}>
              <MenuItem
                onClick={() => {
                  if (openNav) {
                    setOpenNav(!openNav);
                  }
                }}
              >
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  {title}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {description}
                </Typography>
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}
