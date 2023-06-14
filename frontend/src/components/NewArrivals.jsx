import React from "react";
import { Layout, Styles, newArrivals } from "../style/Style";
import { imgNewArr } from "../constants";

const NewArrivals = () => {
  return (
    <section className="mt-16 px-5 lg:px-10 mb-20">
      <div className={newArrivals.container}>
        <div className="lg:w-1/3 py-5 space-y-2">
          <h1 className={Styles.HeadingCont}>New Arrivals</h1>
          <p className={Styles.Heading5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, laudantium eos eligendi amet reprehenderit nemo alias sit inventore? Doloribus, sed.</p>
        </div>
        <div className={newArrivals.conImg}>
          {imgNewArr.map((img) => (
            <img key={img.id} className={newArrivals.img} src={img.img} alt="" />
          ))}
        </div>
      </div>
      <div className="lg:mt-10 mt-5 text-center">
        <h1 className={Styles.Heading3}>Shop Now New Arrivals</h1>
        <div className="flex justify-center items-center gap-3 mt-5">
          <button className={Layout.BtnDrak}>shop men</button>
          <button className={Layout.BtnDrak}>shop women</button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
