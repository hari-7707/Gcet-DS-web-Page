import React from "react";
import Logo from "./Logo";
import gcetLogo from "/gcetLogo.png";
import AICTELogo from "/AICTELogo.png";
import JNTUHLogo from "/JNTUH.png";
import NAACLogo from "/NAAC_LOGO.png";
import nirfLogo from "/nirfLogo.png";
import NBALogo from "/NBALogo.png";
import Navbar from "./NavBar";

import DropDown from "./DropDown";
import { Button } from "@material-tailwind/react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <header className=" bg-blue-gray-200 py-5 container  text-center h-full">
        <div className=" flex items-center sm:gap-2 lg:gap-0  justify-center">
          <div className=" w-1/12 flex items-center justify-center">
            <Logo className=" w-full h-full" src={gcetLogo}></Logo>
          </div>
          <div className=" w-11/12 text-black tracking-wide">
            <h1 className="text-[.6rem] sm:text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-serif ">
              GEETHANJALI COLLEGE OF ENGINEERING AND TECHNOLOGY
            </h1>
            <h2 className="text-[.4rem]  sm:text-[.4]  md:text-[.5rem] lg:text-xs xl:text-sm 2xl:text-md font-bold ">
              (UGC Autonomous, Permanently Affiliated to JNTUH, Accredited by
              NAAC with 'A+' grade)
            </h2>
          </div>
        </div>
        <div className=" text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl text-black flex justify-end  font-bold mb-1">
          <p>EAMCET CODE - GCTC</p>
        </div>
        <div className=" font-bold  text-black tracking-wide">
          <h1 className="text-xs sm:text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            DEPARTMENT OF EA-DATA SCIENCE
          </h1>
          <p className="text-[.4rem]  sm:text-[.4]  md:text-[.5rem] lg:text-xs xl:text-sm 2xl:text-md font-bold">
            (Accredited by NBA in 2012, 2015, 2018 and 2022)
          </p>
        </div>
        <div className="grid grid-cols-12 gap-3 md:gap-5 lg:gap-10 mt-3">
          <div className="flex items-center justify-center">
            <Logo className=" w-full h-full " src={AICTELogo}></Logo>
          </div>
          <div className="flex items-center justify-center">
            <Logo className=" w-full h-full  " src={JNTUHLogo}></Logo>
          </div>

          <div className=" flex items-center justify-center">
            <Logo className=" w-full h-full " src={NAACLogo}></Logo>
          </div>
          <div className="flex items-center justify-center">
            {" "}
            <Logo className=" w-full h-full  " src={nirfLogo}></Logo>
          </div>
          <div className="flex items-center justify-center">
            <Logo className=" w-full h-full bg-white" src={NBALogo}></Logo>
          </div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
        <NavBar></NavBar>
      </header>
    </>
  );
}
