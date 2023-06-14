import { Styles, onSale, secProd } from "../style/Style";
import { onSaleProd } from "../constants";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { imgRightProd } from "../constants";

const SecProd = () => {
  const [open, setOpen] = useState(-1);

  const showHandler = (i) => {
    setOpen(i);
  };

  const hideHandler = () => {
    setOpen(-1);
  };

  const Prod = onSaleProd.filter((prods) => {
    return prods.id <= 5;
  });

  return (
    <section className="px-5 lg:px-10 py-5 my-20">
      <div>
        <div className={secProd.ctgProduct}>
          <button className={Styles.linkProd}>all</button>
          <button className={Styles.linkProd}>Tshirt</button>
          <button className={Styles.linkProd}>cargo</button>
          <button className={Styles.linkProd}>watch</button>
          <button className={Styles.linkProd}>sport</button>
        </div>
      </div>
      <div className="grid gap-8 grid-cols-3 py-5">
        <div className="col-span-2">
          <div id="content" className="grid grid-cols-3">
            {Prod.map((item) => (
              <div key={item.id} className="lg:w-56 my-3 w-40 bg-white relative">
                <div onMouseEnter={() => showHandler(item.id)} onMouseLeave={() => hideHandler()} className="pb-3 shadow-xl cursor-pointer">
                  <div className="w-full bg-gray-100">
                    <img className={`${onSale.img} ${open === item.id ? "scale-[1.1]" : ""}`} src={item.urlImg} alt="" />
                  </div>
                  <div className="px-2">
                    <div className="py-2">
                      <h1 className="capitalize">{item.name}</h1>
                      <p className="font-Cinzel font-normal text-xs">{item.warna}</p>
                    </div>
                    <h2 className="text-base">{item.price}</h2>
                  </div>
                </div>
                <button className={open === item.id ? secProd.btnShop : "hidden"} onMouseEnter={() => showHandler(item.id)} onMouseLeave={() => hideHandler()}>
                  <FaCartPlus />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className=" relative col-span-1 flex justify-center items-center">
          <img className=" shadow-lg" src={imgRightProd} alt="" />
          <div className=" absolute bottom-40 left-auto">
            <button className={secProd.btnImg}>show now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecProd;
