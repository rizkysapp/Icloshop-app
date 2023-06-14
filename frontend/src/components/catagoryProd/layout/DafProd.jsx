import { onSaleProd } from "../../../constants";
// import { useState } from "react";
// import { onSale } from "../../../style/Style";

const DafProd = () => {
  // const [open, setOpen] = useState(-1);

  // const showHandler = (i) => {
  //   setOpen(i);
  // };

  // const hideHandler = () => {
  //   setOpen(-1);
  // };

  return (
    <div>
      <div className="grid grid-cols-4 gap-x-5 gap-y-14">
        {onSaleProd.map((item) => (
          <div key={item.id} className="bg-white">
            <div className="pb-3 lg:w-64 w-40 border border-gray-500 cursor-pointer shadow-sm">
              <div className="border-b border-gray-500 flex justify-center items-center">
                <img className=" h-56 w-56" src={item.urlImg} alt="" />
              </div>
              <div className="flex justify-right items-center border-b border-gray-500">
                <div className="w-16 h-10  border-r border-gray-500">
                  <h1>hu</h1>
                </div>
                <div className="w-16 h-10  border-r border-gray-500">
                  <h1>hu</h1>
                </div>
                <div className="w-16 h-10 border-r border-gray-500">
                  <h1>hu</h1>
                </div>
                <div className="w-16 h-10 border-gray-500">
                  <h1>hu</h1>
                </div>
              </div>
              <div className="px-2">
                <div className="flex justify-between items-center">
                  <h1 className="capitalize font-Cinzel">{item.name}</h1>
                  <h2 className="text-base font-Cinzel">{item.price}</h2>
                </div>
                <p className="font-Cinzel font-normal text-xs">{item.warna}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DafProd;
