import React from "react";
import Header from "../components/navbar/Header";
// import Pagination from "../components/Layout/Pagination";
import CtagProds from "../components/catagoryProd/CtagProds";
import TitleProd from "../components/Layout/TitleProd";

const Products = () => {
  return (
    <div>
      <Header />
      <TitleProd />
      <CtagProds />
      {/* <Pagination class="mt-20 w-full flex justify-center items-center" /> */}
    </div>
  );
};

export default Products;
