import React from "react";
import { HeroSec, Layout } from "../style/Style";
// import imgLogo from "../../public/assets/img/heroImg.jpg";
import { BsArrowRightShort } from "react-icons/bs";

const Hero = () => {
  return (
    <section className={HeroSec.conHero}>
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className={HeroSec.titleHero}>fashion shopping with the best quality</h1>
        <p className={HeroSec.desTitle}>with fast, safe delivery, and providing the best quality at affordable prices, and access to shipping throughout Indonesia, let us fulfill all your needs.</p>
        <button className={Layout.BtnGray}>
          Get started
          <BsArrowRightShort className="text-2xl" />
        </button>
        <button className={`${Layout.BtnActi} py-3`}>Speak to Sales</button>
      </div>
      <div className="hidden pl-10 h-72 lg:mt-0 lg:col-span-5 lg:flex">
        <img className=" shadow-xl" src="assets/img/heroImg.jpg" alt="mockup" />
      </div>
    </section>
  );
};

export default Hero;
