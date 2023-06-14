import React from "react";
import { Layout, prodFav, Styles } from "../style/Style";
import { Tab } from "@headlessui/react";
import ProductFav from "./Layout/ProductFav";

const Favorites = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const itemFav = ["TShirt", "Watch", "Jeans"];

  return (
    <section className={`${Styles.content}`}>
      <div className={`text-center ${Styles.Heading2}`}>
        <h1>Our Favorites</h1>
      </div>
      <div className={prodFav.SectionProd}>
        <Tab.Group>
          <Tab.List className={prodFav.tapList}>
            {itemFav.map((item) => (
              <Tab key={item} className={({ selected }) => classNames(Layout.TapBtn, Styles.ringBlue, selected ? "bg-white text-slate-900 shadow" : "text-gray-50 hover:text-white hover:bg-gray-600")}>
                {item}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-10">
            <Tab.Panel>
              <ProductFav />
            </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Favorites;
