import React from "react";
import DropDown from "./DropDown";
import { Navbar, IconButton, Collapse } from "@material-tailwind/react";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="lg:my-4 lg:flex lg:flex-wrap grid grid-cols-2 text-center justify-center items-center ">
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Home"}
        options={[
          { title: "Vision and Mission", url: "" },
          { title: "PEOs PSOs and POs", url: "" },
          { title: "Salient Features of the Department", url: "" },
          { title: "Messages", url: "" },
          { title: "Board of Studies", url: "" },
          { title: "Approvals", url: "" },
        ]}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Staff Desk"}
        options={[
          { title: "Faculty and Staff List", url: "" },
          { title: "Roles and Responsibilities", url: "" },
          { title: "Enrichment of Skills", url: "" },
          { title: "Faculty as Resource Persons", url: "" },
        ]}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Student Desk"}
        options={[
          { title: "Instructions Grievances", url: "" },
          { title: "Student Nominal Rolls", url: "" },
          { title: "Student Achievements", url: "" },
          { title: "Academic Toppers", url: "" },
          { title: "Higher Education and BEC", url: "" },
          { title: "Training and Placement", url: "" },
          { title: "Placements", url: "" },
          { title: "Student Clubs", url: "" },
          { title: "CACHE", url: "" },
          { title: "Learning Resources", url: "" },
          { title: "Department Library", url: "" },
        ]}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Research"}
        options={[
          { title: "Research and Consultancy Policy", url: "" },
          { title: "Research Activities", url: "" },
          { title: "Research Initiatives", url: "" },
        ]}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Academics"}
        options={[
          { title: "Regulations and Syllabus", url: "" },
          { title: "Academic Calendars", url: "" },
          { title: "Academic Activities Carried Out", url: "" },
          { title: "Industry-institute interaction", url: "" },
          { title: "Major Projects", url: "" },
          { title: "Mini Projects", url: "" },
          { title: "Internships", url: "" },
          { title: "Industrial Visits", url: "" },
          { title: "Professional Bodies", url: "" },
          { title: "TechExpo", url: "" },
        ]}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"TLP"}
        options={[
          { title: "Work Load and Additional duties", url: "" },
          { title: "Time Tables", url: "" },
          { title: "Result Analysis", url: "" },
          { title: "Innovations In Teaching", url: "" },
          { title: "Project Based Learning", url: "" },
          { title: "Value Added Courses", url: "" },
          { title: "Specialized Groups", url: "" },
        ]}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Labs"}
        options={[
          { title: "List of Laboratories", url: "" },
          { title: "Software", url: "" },
          { title: "Equipment Purchased", url: "" },
        ]}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Centers of Excellence"}
        options={[]}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Reports"}
        options={[
          { title: "Techno Digest - News Letter", url: "" },
          { title: "Department Reports", url: "" },
          { title: "Strategic Plan", url: "" },
          { title: "MoUs and MoMs", url: "" },
        ]}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Alumni"}
        options={[]}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Central Facilities"}
        options={[{ title: "NSS", url: "" }]}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"CO-PO Attainments"}
        options={[]}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"Formats"}
        options={[{ title: "Principal's Zone", url: "" }]}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"IQAC"}
        options={[]}
      ></DropDown>
      <DropDown
        openNav={openNav}
        setOpenNav={setOpenNav}
        name={"More"}
        options={[
          { title: "Curriculum Design", url: "" },
          { title: "Contact us", url: "" },
          { title: "NBA Documents - 2022", url: "" },
          { title: "Events of the Dept", url: "" },
          { title: "Gallery", url: "" },
        ]}
      ></DropDown>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none p-0 border-none bg-blue-50 shadow-none backdrop-saturate-1 mt-2">
      <div className="text-left">
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-4 w-4 text-left text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 text-black"
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
              className="h-6 w-6 p-0  text-black"
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
        <Collapse open={openNav}>{navList}</Collapse>
      </div>
    </Navbar>
  );
}
