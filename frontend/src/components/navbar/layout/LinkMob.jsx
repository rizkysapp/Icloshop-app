import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Nav, Transitions } from "../../../style/Style";
import { HiBars4 } from "react-icons/hi2";

const LinkMob = () => {
  const Navlink = [
    { id: 0, title: "home", to: "/" },
    { id: 1, title: "product", to: "/product" },
    { id: 2, title: "detail", to: "/detail" },
    { id: 3, title: "category", to: "/category" },
  ];

  return (
    <div>
      <Link>
        <Popover className="relative sm:hidden">
          <Popover.Button className={Nav.PopoverBtnMob}>
            <HiBars4 />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter={Transitions.enter}
            enterFrom={Transitions.enterFrom}
            enterTo={Transitions.enterTo}
            leave={Transitions.leave}
            leaveFrom={Transitions.leaveFrom}
            leaveTo={Transitions.leaveTo}
          >
            <Popover.Panel className={Nav.PopoverPanelMob}>
              <div className={Nav.Panel}>
                {Navlink.map((item) => (
                  <li key={item.id} className="flex flex-col">
                    <Link className={Nav.DropLinkMob} to={`${item.to}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </Link>
    </div>
  );
};

export default LinkMob;
