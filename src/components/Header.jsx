import Logo from "./Logo";
import gcetLogo from "/gcetLogo.png";
import AICTELogo from "/AICTELogo.png";
import JNTUHLogo from "/JNTUH.png";
import NAACLogo from "/NAAC_LOGO.png";
import nirfLogo from "/nirfLogo.png";
import NBALogo from "/NBALogo.png";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <header className="w-full bg-blue-50 py-4 px-10 text-center">
        <div className="">
          <div className="flex items-center justify-evenly text-black">
            <Logo classname="size-24" src={gcetLogo}></Logo>
            <div>
              <h1 className=" tracking-wide text-xs sm:text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold font-serif ">
                GEETHANJALI COLLEGE OF ENGINEERING AND TECHNOLOGY
              </h1>
              <h2 className="text-[.4rem]  sm:text-[.4]  md:text-[.5rem] lg:text-xs xl:text-sm 2xl:text-md font-bold ">
                (UGC Autonomous, Permanently Affiliated to JNTUH, Accredited by
                NAAC with 'A+' grade)
              </h2>
            </div>
          </div>
        </div>
        <div className=" text-sm sm:text-xsm md:text-xsm lg:text-xsm xl:text-sm 2xl:text-sm text-black flex justify-end  font-bold ">
          <p>EAMCET CODE - GCTC</p>
        </div>
        <div className="font-bold text-black tracking-wide">
          <h1 className="text-md sm:text-md md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl">
            Department of EA-Data Science
          </h1>
          <p className="text-[.4rem]  sm:text-[.4]  md:text-[.5rem] lg:text-xs xl:text-sm 2xl:text-md font-bold">
            (Accredited by NBA in 2012, 2015, 2018 and 2022)
          </p>
        </div>
        <div className="flex justify-evenly mt-6">
          <div className="">
            <Logo classname="size-12" src={AICTELogo}></Logo>
          </div>
          <div className="">
            <Logo classname="size-12" src={JNTUHLogo}></Logo>
          </div>

          <div className="">
            <Logo classname="size-12" src={NAACLogo}></Logo>
          </div>
          <div className="">
            {" "}
            <Logo classname="size-12" src={nirfLogo}></Logo>
          </div>
          <div className="">
            <Logo classname="size-12 bg-white" src={NBALogo}></Logo>
          </div>
        </div>

        <NavBar></NavBar>
      </header>
    </>
  );
}
