import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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

export default function DropDown({ setOpenNav, openNav, name }) {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center text-base font-normal capitalize tracking-normal lg:justify-center"
        >
          {name}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>

      <MenuList className="bg-white">
        <ul className="">
          {menuItems.map(({ title }) => (
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
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}
