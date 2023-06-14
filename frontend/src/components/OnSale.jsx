import { useState } from "react";
import { onSale, Styles } from "../style/Style";
import { onSaleProd } from "../constants";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const OnSale = () => {
  const [open, setOpen] = useState(-1);
  const [slideLeft, setSlideLeft] = useState(0);
  // const sliderWidth = 1900;

  const contents = document.getElementById("contents");
  // let heightToHideFrom = 10;

  const showHandler = (i) => {
    setOpen(i);
  };

  const hideHandler = () => {
    setOpen(-1);
  };

  const scrolLeft = () => {
    setSlideLeft((contents.scrollLeft -= 1000));
  };

  const scrolRight = () => {
    setSlideLeft((contents.scrollLeft += 1000));
  };

  return (
    <section className="px-10 py-2">
      <div className={`${Styles.Heading2}`}>now on sale</div>
      <div className="mt-5 relative">
        <button onClick={scrolLeft} className={`${onSale.slidBtn} left-1 ${slideLeft > 0 ? "block" : "hidden"}`}>
          <FiChevronLeft />
        </button>

        <button onClick={scrolRight} className={`${onSale.slidBtn} right-1`}>
          <FiChevronRight />
        </button>
        <div id="contents" className={onSale.conOnsale}>
          {onSaleProd.map((item) => (
            <div key={item.id} className="mb-10 bg-white">
              <div onMouseEnter={() => showHandler(item.id)} onMouseLeave={() => hideHandler()} className="pb-3 lg:w-64 w-40 shadow-xl cursor-pointer">
                <div className="w-full bg-gray-100">
                  <img className={`${onSale.img} ${open === item.id ? "scale-[1.1]" : ""}`} src={item.urlImg} alt="" />
                </div>
                <div className="px-2">
                  <div className={onSale.des}>
                    <h1 className="capitalize">{item.name}</h1>
                    <h2 className="text-base">{item.price}</h2>
                  </div>
                  <p className="font-Cinzel font-normal text-xs">{item.warna}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnSale;
