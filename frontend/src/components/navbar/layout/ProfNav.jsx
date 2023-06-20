import React from "react";
import { FaRegBell } from "react-icons/fa";
import { Menu } from "@headlessui/react";

const ProfNav = () => {
  const links = [
    { label: "your profile", href: "/profile" },
    { label: "setting", href: "/setting" },
    { label: "sign out", href: "/sign" },
  ];

  return (
    <div className="flex justify-center items-center gap-5">
      <div className="relative px-2">
        <FaRegBell size={20} />
        {/* <div className="absolute top-[2px] right-[9px] rounded-full bg-red-500 w-2 h-2"></div> */}
      </div>
      <Menu as="div" className="relative inline-block">
        <Menu.Button className="bg-slate-600 h-8 w-8 rounded-full">
          <img src="" alt="" />
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1 flex flex-col justify-start items-start w-full">
            {links.map((link) => (
              <Menu.Item as="a" key={link.href} href={link.href} className="hover:bg-blue-500 hover:rounded-md hover:text-white bg-white text-black px-3 py-2 w-full">
                {link.label}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default ProfNav;
