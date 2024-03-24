import React from "react";
import DropDown from "./DropDown";
import { Navbar, IconButton } from "@material-tailwind/react";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="my-4 flex flex-wrap">
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Home"}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Staff Desk"}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Student Desk"}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Research"}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Academics"}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"TLP"}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Labs"}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Centers of Excellence"}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Reports"}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Alumni"}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Central Facilities"}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"CO-PO Attainments"}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Formats"}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"IQAC"}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"More"}
      ></DropDown>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none p-0 border-none bg-blue-50 shadow-none backdrop-saturate-1 mt-2">
      <div className="flex items-center">
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-4 w-4 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
    </Navbar>
  );
}
