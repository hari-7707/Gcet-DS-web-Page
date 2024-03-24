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
import { Link, Navigate } from "react-router-dom";

export default function DropDown({
  setOpenNav,
  openNav,
  name = "Default Name",
  options = [
    {
      title: "Default 1",
      url: "",
    },
    {
      title: "Default 2",
      url: "",
    },
    {
      title: " Default 3",
      url: "",
    },
  ],
}) {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        {options.length == 0 ? (
          <Button
            variant="text"
            className="text-left font-bold flex items-center text-base capitalize tracking-normal lg:justify-center px-3 "
            //  onClick={} write  the code to handle click event here
          >
            {name}
          </Button>
        ) : (
          <Button
            variant="text"
            className="text-left font-bold flex items-center text-base capitalize tracking-normal lg:justify-center px-3 "
          >
            {name}

            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3.5 w-3.5 transition-transform ${
                openMenu ? "rotate-180" : ""
              }`}
            />
          </Button>
        )}
      </MenuHandler>

      {options.length > 0 ? (
        <MenuList className="bg-white">
          <ul className="">
            {options.map(({ title }) => (
              <a href="" key={title}>
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
      ) : null}
    </Menu>
  );
}
