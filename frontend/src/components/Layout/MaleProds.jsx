import React from "react";
import DetailProd from "../catagoryProd/layout/DetailProd";
import DafProd from "../catagoryProd/layout/DafProd";

const MaleProds = (props) => {
  return (
    <div className="mt-10 px-8">
      <div className="flex justify-start gap-2 py-3 items-end">
        <h1 className=" text-2xl font-Rampart font-medium text-gray-900 uppercase">{props.title}</h1>
        <p className=" text-xs text-gray-300 pb-1">[250]</p>
      </div>
      <DetailProd />
      <div className="mt-10">
        <DafProd />
      </div>
    </div>
  );
};

export default MaleProds;
