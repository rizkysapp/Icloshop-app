import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { Transitions } from "../../../style/Style";

const CatRang = (props) => {
  return (
    <div>
      <Menu as={"div"} className="relative">
        <Menu.Button className="flex justify-center items-center gap-1">
          <h2 className=" uppercase text-sm font-light font-Cinzel">{props.title}</h2>
          <BsChevronDown />
        </Menu.Button>
        <Transition enter={Transitions.enter} enterFrom={Transitions.enterFrom} enterTo={Transitions.enterTo} leave={Transitions.leave} leaveFrom={Transitions.leaveFrom} leaveTo={Transitions.leaveTo}>
          <Menu.Items className="absolute top-2 left-0 z-30 bg-white border border-gray-600 px-2 py-2 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item className="flex justify-center items-center">{props.pov}</Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default CatRang;
