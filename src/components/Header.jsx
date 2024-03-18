import React from "react";
import Logo from "./Logo";
import logo from "/gcetLogo.png";
import DropDown from "./DropDown";
export default function Header() {
  return (
    <>
      <header className=" bg-green-700 container py-5  text-center">
        <div className=" grid grid-cols-12 items-center gap-1">
          <div className="col-span-1">
            <Logo className="h-full w-full" src={logo}></Logo>
          </div>
          <div className="col-span-10 text-white tracking-wide">
            <h1 className="sm:text-2xl text-sm font-bold font-serif ">
              GEETHANJALI COLLEGE OF ENGINEERING AND TECHNOLOGY
            </h1>
            <h2 className=" sm:text-sm text-xs font-bold ">
              (UGC Autonomous, Permanently Affiliated to JNTUH, Accredited by
              NAAC with 'A+' grade)
            </h2>
          </div>
        </div>
        <div className="text-white flex justify-end  font-bold">
          <p>EAMCET CODE - GCTC</p>
        </div>
        <div className="   font-bold  text-white tracking-wide">
          <h1 className="text-4xl">DEPARTMENT OF EA-DATA SCIENCE </h1>
          <p className="text-sm">
            (Accredited by NBA in 2012, 2015, 2018 and 2022)
          </p>
        </div>
        <div className="logos grid grid-cols-12 gap-1">
          <div className="bg-yellow-700">
            {/* <Logo className=" h-full w-full" src={logo}></Logo> */}
          </div>
          <div className="bg-yellow-700">2</div>
          <div className="bg-yellow-700">3</div>
          <div className="bg-yellow-700">4</div>
          <div className="bg-yellow-700">5</div>
          <div className="bg-yellow-700">6</div>
          <div className="bg-yellow-700">7</div>
          <div className="bg-yellow-700">8</div>
          <div className="bg-yellow-700">9</div>
          <div className="bg-yellow-700">10</div>
          <div className="bg-yellow-700">11</div>
          <div className="bg-yellow-700">12</div>
        </div>
        <div className="options grid grid-cols-12">
          <DropDown options={["a", "b", "c", "d"]}></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
          <DropDown></DropDown>
        </div>
      </header>
    </>
  );
}
