import { catagoryProd } from "../../style/Style";
import { Tab } from "@headlessui/react";
import MaleProds from "../Layout/MaleProds";

const CtagProds = () => {
  const ctagory = ["Semua", "Pria", "Wanita", "Promo", "COD", "Favorites", "TShirt"];

  return (
    <div className="mt-5 px-4">
      <div>
        <Tab.Group>
          <Tab.List className={catagoryProd.content}>
            {ctagory.map((i) => (
              <Tab key={i} className={catagoryProd.linkTitle}>
                {i}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <MaleProds title="Semua" />
            </Tab.Panel>
            <Tab.Panel>
              <MaleProds title="Pria" />
            </Tab.Panel>
            <Tab.Panel>
              <MaleProds title="Wanita" />
            </Tab.Panel>
            <Tab.Panel>
              <MaleProds title="Promo" />
            </Tab.Panel>
            <Tab.Panel>
              <MaleProds title="COD" />
            </Tab.Panel>
            <Tab.Panel>
              <MaleProds title="Favorites" />
            </Tab.Panel>
            <Tab.Panel>
              <MaleProds title="TShirt" />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default CtagProds;
