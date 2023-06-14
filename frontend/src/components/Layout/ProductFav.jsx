import { useState } from "react";
import { Tshirt } from "../../constants";
import { FaCartPlus, FaCommentDots, FaInfoCircle } from "react-icons/fa";
import { Layout, prodFav, Styles } from "../../style/Style";

const ProductFav = () => {
  const [hovered, setHovered] = useState(-1);
  const [hoverBtnImg, setHoverBtnImg] = useState(-1);

  const showHandler = (i) => {
    setHovered(i);
  };

  const hideHandler = () => {
    setHovered(-1);
  };

  const showBrig = (i) => {
    setHoverBtnImg(i);
  };

  const hideBrig = () => {
    setHoverBtnImg(-1);
  };

  return (
    <div className={`${Styles.flexCenter} gap-2 lg:gap-10`}>
      {Tshirt.map((item) => (
        <div key={item.id} className="text-center">
          <div className="lg:w-64 w-32 relative shadow-md" onMouseLeave={hideHandler} onMouseEnter={() => showHandler(item.id)}>
            <img src={item.image} className={hoverBtnImg === item.id ? "brightness-50" : "hover:brightness-50 transition ease-linear duration-200"} alt="" />
            <div className={hovered === item.id ? prodFav.iconOpen : "hidden"} onMouseLeave={hideBrig} onMouseEnter={() => showBrig(item.id)}>
              <button className={Layout.iconBtnImg}>
                <FaCartPlus />
              </button>
              <button className={Layout.iconBtnImg}>
                <FaCommentDots />
              </button>
              <button className={Layout.iconBtnImg}>
                <FaInfoCircle />
              </button>
            </div>
          </div>
          <h1 className="my-1 text-base font-light capitalize font-Alata">{item.title}</h1>
          <h1 className=" text-lg font-semibold font-Alata text-gray-900">{item.price}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductFav;
