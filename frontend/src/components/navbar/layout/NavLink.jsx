import { Link } from "react-router-dom";
import { Nav, Transitions } from "../../../style/Style";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiChevronDown } from "react-icons/fi";
import { BsFillBoxFill, BsTicketPerforatedFill, BsFire, BsBagCheckFill } from "react-icons/bs";
import { RiShirtFill } from "react-icons/ri";

const NavLink = () => {
  const Navlink = [
    { title: "home", to: "/" },
    { title: "product", to: "/product" },
    { title: "detail", to: "/detail" },
  ];

  return (
    <div className="sm:flex items-center gap-6 hidden">
      {Navlink.map((link, index) => {
        return (
          <span key={index}>
            <Link to={link.to} className={Nav.NavLink}>
              {link.title}
            </Link>
          </span>
        );
      })}
      <Link>
        <Popover className="relative">
          <Popover.Button className={Nav.PopoverButton}>
            <span>Category</span>
            <FiChevronDown />
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
            <Popover.Panel className={Nav.PopoverPanel}>
              <div className={Nav.Panel}>
                <div className="grid pt-5 pb-1 px-1 gap-1">
                  <Link to={"products/promo"} className={Nav.DropLink}>
                    <BsTicketPerforatedFill className="text-xl text-blue-500" />
                    <span>Promo</span>
                  </Link>
                  <Link to={"products/cod"} className={Nav.DropLink}>
                    <BsFillBoxFill className="text-xl text-blue-500" />
                    <span>COD</span>
                  </Link>
                  <Link to={"products/tranding"} className={Nav.DropLink}>
                    <BsFire className="text-xl text-blue-500" />
                    <span>Favorites</span>
                  </Link>
                  <Link to={"products/tshirt"} className={Nav.DropLink}>
                    <RiShirtFill className="text-xl text-blue-500" />
                    <span>TShirt</span>
                  </Link>
                </div>

                <div className="w-full border-t px-1 py-1">
                  <Link className={Nav.DropLink}>
                    <BsBagCheckFill className="text-xl text-blue-500" />
                    <span>Category</span>
                  </Link>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </Link>
    </div>
  );
};

export default NavLink;
