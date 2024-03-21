import React from "react";
import Logo from "./Logo";
import gcetLogo from "/gcetLogo.png";
import AICTELogo from "/AICTELogo.png";
import JNTUHLogo from "/JNTUH.png";
import NAACLogo from "/NAAC_LOGO.png";
import nirfLogo from "/nirfLogo.png";
import NBALogo from "/NBALogo.png";
import Random from "./NavBar";

import DropDown from "./DropDown";
import { Button } from "@material-tailwind/react";

export default function Header() {
  return (
    <>
      <header className=" bg-green-700 container py-5  text-center">
        <div className=" grid grid-cols-12  items-center gap-1">
          <div className="col-span-1">
            <Logo className=" w-full h-full" src={gcetLogo}></Logo>
          </div>
          <div className="col-span-11 text-white tracking-wide">
            <h1 className="text-xs sm:text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-serif ">
              GEETHANJALI COLLEGE OF ENGINEERING AND TECHNOLOGY
            </h1>
            <h2 className="text-[.4rem]  sm:text-[.4]  md:text-[.5rem] lg:text-xs xl:text-sm 2xl:text-md font-bold ">
              (UGC Autonomous, Permanently Affiliated to JNTUH, Accredited by
              NAAC with 'A+' grade)
            </h2>
          </div>
        </div>
        <div className=" text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white flex justify-end  font-bold ">
          <p>EAMCET CODE - GCTC</p>
        </div>
        <div className=" font-bold  text-white tracking-wide">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl">
            DEPARTMENT OF EA-DATA SCIENCE{" "}
          </h1>
          <p className="text-[.4rem]  sm:text-[.4]  md:text-[.5rem] lg:text-xs xl:text-sm 2xl:text-md font-bold">
            (Accredited by NBA in 2012, 2015, 2018 and 2022)
          </p>
        </div>
        <div className="grid grid-cols-12 gap-3 md:gap-5 lg:gap-10 my-5">
          <div className="">
            <Logo className=" w-full h-full " src={AICTELogo}></Logo>
          </div>
          <div className="">
            <Logo className=" w-full h-full " src={JNTUHLogo}></Logo>
          </div>

          <div className="">
            <Logo className=" w-full h-full " src={NAACLogo}></Logo>
          </div>
          <div className="">
            {" "}
            <Logo className=" w-full h-full " src={nirfLogo}></Logo>
          </div>
          <div className="">
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
        {/* <div className="options grid grid-cols-12"> */}
        {/* <DropDown options={["a", "b", "c", "d"]}></DropDown> */}
        {/* <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown> */}
        {/* </div> */}
        <Random></Random>
      </header>
    </>
  );
}
