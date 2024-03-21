// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { useId } from "react";
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function DropDown({ options = [] }) {
//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <Menu.Button
//           className={`inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 `}
//         >
//           hari
//           {/* <ChevronDownIcon
//             className="-mr-1 h-5 w-5 text-gray-400"
//             aria-hidden="true"
//           /> */}
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             {console.log(typeof options)}
//             {options.map((option) => {
//               return (
//                 <Menu.Item key={useId()}>
//                   {({ active }) => (
//                     <a
//                       href="#"
//                       className={classNames(
//                         active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                         "block px-4 py-2 text-sm"
//                       )}
//                     >
//                       {option}
//                     </a>
//                   )}
//                 </Menu.Item>
//               );
//             })}
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                     "block px-4 py-2 text-sm"
//                   )}
//                 ></a>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                     "block px-4 py-2 text-sm"
//                   )}
//                 >
//                   Support
//                 </a>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <a
//                   href="#"
//                   className={classNames(
//                     active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                     "block px-4 py-2 text-sm"
//                   )}
//                 >
//                   License
//                 </a>
//               )}
//             </Menu.Item>
//             <form method="POST" action="#">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     type="submit"
//                     className={classNames(
//                       active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                       "block w-full px-4 py-2 text-left text-sm"
//                     )}
//                   >
//                     Sign out
//                   </button>
//                 )}
//               </Menu.Item>
//             </form>
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   );
// }

import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

const menuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

export default function DropDown({ setOpenNav, openNav }) {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center text-base font-normal capitalize tracking-normal lg:justify-center"
        >
          options
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>

      <MenuList className="grid-cols-7 gap-3 overflow-visible lg:grid bg-white">
        <ul className="col-span-4 flex w-full flex-col gap-1 ">
          {menuItems.map(({ title, description }) => (
            <a href="#" key={title}>
              <MenuItem onClick={() => setOpenNav(!openNav)}>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  {title}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {description}
                </Typography>
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}
