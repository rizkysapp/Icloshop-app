import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { Transitions } from "../../style/Style";

const contCtry = (props) => {
  const link = [
    { id: 1, title: "hubaha" },
    { id: 2, title: "hubahad" },
    { id: 3, title: "hubaa" },
  ];

  return (
    <div className="mt-10 px-8">
      <div className="flex justify-start gap-2 py-3 items-end">
        <h1 className=" text-2xl font-Rampart font-medium text-gray-900 uppercase">{props.title}</h1>
        <p className=" text-xs text-gray-300 pb-1">[{props.range}]</p>
      </div>
      <div className="border border-gray-600 flex justify-start px-5 py-3 items-center gap-5">
        <div>
          <Menu as={"div"} className="relative">
            <Menu.Button className="flex justify-center items-center gap-1">
              <h2 className=" uppercase text-sm font-light font-Cinzel">ukuran</h2>
              <BsChevronDown />
            </Menu.Button>
            <Transition
              enter={Transitions.enter}
              enterFrom={Transitions.enterFrom}
              enterTo={Transitions.enterTo}
              leave={Transitions.leave}
              leaveFrom={Transitions.leaveFrom}
              leaveTo={Transitions.leaveTo}
            >
              <Menu.Items className="absolute top-3 left-0 bg-white border border-gray-600 px-2 py-2 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {link.map((items) => (
                  <Menu.Item key={items.id} className="flex justify-center items-center">
                    <a href={items.title}>{items.title}</a>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div>
          <h1>huuhu</h1>
        </div>
        <div>
          <h1>huuhu</h1>
        </div>
        <div>
          <h1>huuhu</h1>
        </div>
        <div>
          <h1>huuhu</h1>
        </div>
      </div>
      <div className="mt-10"></div>
    </div>
  );
};

export default contCtry;
