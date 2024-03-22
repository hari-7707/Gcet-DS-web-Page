import React from "react";
import DropDown from "./DropDown";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
} from "@material-tailwind/react";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:grid lg:grid-cols-12 lg:items-center lg:gap-2 flex-wrap ">
      <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
      <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
      <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
      <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
      <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
      <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
      <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
      <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
      <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
      <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
      <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
      <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
    </ul>
  );

  return (
    <div className="">
      {/* overflow-scroll  for side sliders */}
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none p-0 border-none bg-green-700 shadow-none backdrop-saturate-1">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 p-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav} className=" grid grid-cols-3">
          <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
          <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
          <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
          <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
          <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
          <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
          <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
          <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
          <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
          <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
          <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
          <DropDown openNav={openNav} setOpenNav={setOpenNav}></DropDown>
          {/* {navList} */}
        </Collapse>
      </Navbar>
    </div>
  );
}
