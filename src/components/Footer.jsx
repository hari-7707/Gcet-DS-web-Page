import React from "react";
import gcetLogo from "/gcetLogo.png";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";

export default function Footer() {
  return (
    <>
      <footer className="overflow-hidden p-10 bg-blue-50 border border-t-2 ">
        <div className="relative z-10 mx-auto max-w-[85rem] ">
          <div className="-m-6 flex flex-wrap justify-center">
            <div className="w-full p-6 lg:w-1/2">
              <div className="mb-4 flex items-center md:justify-left justify-center gap-5   ">
                <div className="w-2/12">
                  <Logo className="size-full" src={gcetLogo} />
                </div>
                <div className="w-10/12 text-left ">
                  <h1 className=" tracking-wide text-md sm:text-md md:text-xl lg:text-xl xl:text-2xl font-bold font-serif ">
                    GEETHANJALI COLLEGE OF ENGINEERING AND TECHNOLOGY
                  </h1>
                  <h2 className="text-[.6rem]  sm:text-[.4]  md:text-[.5rem] lg:text-xs xl:text-[.6rem]  font-bold ">
                    (UGC Autonomous, Permanently Affiliated to JNTUH, Accredited
                    by NAAC with 'A+' grade)
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-1/3 p-6 sm:w-1/4 lg:w-1/6 flex justify-center ">
              <div className="h-full ">
                <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-black">
                  Company
                </h3>
                <ul style={{ listStyleType: "disc" }}>
                  <li className="pb-2">
                    <a
                      className=" text-xs md:text-base font-medium text-gray-600
                    hover:text-gray-900 hover:underline "
                      to="/"
                    >
                      Features
                    </a>
                  </li>
                  <li className="pb-2">
                    <a
                      className="text-xs md:text-base  font-medium text-gray-600
                    hover:text-gray-900 hover:underline"
                      to="/"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="pb-2">
                    <a
                      className="text-xs md:text-base font-medium text-gray-600
                    hover:text-gray-900 hover:underline"
                      to="/"
                    >
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-xs md:text-base font-medium text-gray-600
                    hover:text-gray-900 hover:underline"
                      to="/"
                    >
                      Press Kit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/3 p-6 sm:w-1/4 lg:w-1/6 flex justify-center">
              <div className="h-full">
                <h3 className="tracking-px mb-4  text-xs font-semibold uppercase text-black">
                  Support
                </h3>
                <ul style={{ listStyleType: "disc" }}>
                  <li className="pb-2">
                    <a
                      className=" text-xs md:text-base  font-medium  text-gray-600
                    hover:text-gray-900 hover:underline"
                      to="/"
                    >
                      Account
                    </a>
                  </li>
                  <li className="pb-2">
                    <a
                      className=" text-xs md:text-base  font-medium text-gray-600
                    hover:text-gray-900 hover:underline"
                      to="/"
                    >
                      Help
                    </a>
                  </li>
                  <li className="pb-2">
                    <a
                      className=" text-xs md:text-base  font-medium text-gray-600
                    hover:text-gray-900 hover:underline"
                      to="/"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-xs md:text-base  font-medium text-gray-600
                    hover:text-gray-900 hover:underline"
                      to="/"
                    >
                      Customer Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/3 p-6 sm:w-1/4 lg:w-1/6 flex justify-center">
              <div className="h-full">
                <h3 className="tracking-px mb-4  text-xs font-semibold uppercase text-black">
                  Legals
                </h3>
                <ul style={{ listStyleType: "disc" }}>
                  <li className="pb-2">
                    <a
                      className=" text-xs md:text-base font-medium text-gray-600
                    hover:text-gray-900 hover:underline"
                      to="/"
                    >
                      {" "}
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="pb-2">
                    <a
                      className=" text-xs md:text-base font-medium  text-gray-600
                    hover:text-gray-900 hover:underline"
                      to="/"
                    >
                      {" "}
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className=" text-xs md:text-base font-medium  text-gray-600
                    hover:text-gray-900 hover:underline"
                      to="/"
                    >
                      {" "}
                      Licensing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex -m-6 flex-wrap justify-between ">
            <div className="text-sm text-gray-600 text-left p-6">
              <p className="m-1">
                &copy; Copyright 2024. All Rights Reserved by GCET-EA-DS.
              </p>
              <p className="m-1">DEVELOPED BY HariKrishna and Gopi </p>
              <p className="m-1"> MAINTAINED BY HariKrishna and Gopi</p>
            </div>
            <div>
              <div className="text-sm text-gray-600 text-left p-6">
                <a href="#buttons-with-link">
                  <IconButton variant="outlined"></IconButton>
                </a>
                <a href="#buttons-with-link">
                  <IconButton variant="outlined"></IconButton>
                </a>
                <a href="#buttons-with-link">
                  <IconButton
                    variant="outlined"
                    className=" outline-none "
                  ></IconButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
