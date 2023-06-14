export const Nav = {
  nav: "bg-white bg-opacity-100 text-slate-900 px-2 py-2.5 fixed w-full z-50 top-0 left-0",
  ConNav: "flex flex-wrap sm:px-7 px- py-1 items-center justify-between mx-auto",
  Logo: "self-center text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-bold whitespace-nowrap font-mono",
  NavLink: "capitalize text-sm text-gray-700 hover:text-blue-500 focus:text-blue-600",
  DropLink:
    "flex items-center gap-3 rounded-lg py-2 px-4 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",
  DropLinkMob: "transition shadow-sm px-2 py-2 duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50",
  PopoverButton:
    "capitalize text-sm text-gray-700 hover:text-blue-500 focus:text-blue-600 group inline-flex justify center items-center rounded-md text-base hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 gap-1",
  PopoverBtnMob:
    "text-3xl px-2 py-2 items-center rounded-full hover:bg-slate-100 focus:bg-slate-200 group inline-flex hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
  PopoverPanel: "absolute z-20 left-1/2 bg-white mt-3 w-64 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl",
  Panel: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",
  PopoverPanelMob: "absolute z-20 -right-4 bg-white mt-1 w-40 max-w-sm transform px-4 sm:px-0 lg:max-w-3xl",
};

export const HeroSec = {
  conHero: "grid max-w-screen-xl mb-20 px-10 mt-20 py-20 mx-auto bg-gradient-to-b from-white to-slate-100 lg:gap-8 xl:gap-0 lg:py-28 lg:grid-cols-12",
  titleHero: "max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl",
  desTitle: "max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400",
};

export const Layout = {
  BtnLigth: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-2 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2",
  BtnPrimary: "bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6",
  BtnActi:
    "inline-flex items-center justify-center duration-200 px-5 text-base font-medium text-center transition ease-in-out text-gray-900 border border-gray-400 rounded-lg hover:bg-blue-500 hover:text-slate-50 focus:ring-4 focus:bg-blue-400 hover:border-indigo-400",
  BtnGray:
    "inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium transition ease-in-out text-center gap-2 text-gray-900 rounded-lg bg-primary-700 hover:bg-slate-300 focus:ring-4 focus:ring-slate-200",
  BtnDrak:
    "inline-flex items-center justify-center bg-gray-800 text-xs w-24 lg:w-32 py-2 text-slate-50 transition ease-in-out duration-300 font-sm lg:font-semibold shadow-md border-2 text-center border-transparent hover:text-gray-900 focus:outline-none hover:border-gray-900 text-center focus:ring-slate-200 hover:bg-transparent uppercase lg:text-sm font-Cinzel",
  titleInput: "block text-gray-700",
  input: "w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none",
  TapBtn: "w-full rounded-lg transition ease-in-out px-10 py-2.5 text-sm font-medium leading-5 text-gray-50",
  iconBtnImg: "text-slate-100 px-2 py-2 lg:px-3 lg:py-3 text-sm  rounded-full transition ease-in-out bg-slate-800 text-center hover:bg-slate-900",
};

export const Styles = {
  flexCenter: "flex justify-center items-center",
  boxShadow: "border rounded-xl shadow-md",
  Heading1: "text-xl md:text-2xl font-bold leading-tight",
  linkPrimary: "text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700",
  content: "px-10 py-2 mt-16",
  ringBlue: "ring-slate-200 ring-opacity-60 ring-offset-2 ring-offset-blue-500 focus:outline-none focus:ring-2",
  Heading2: "text-3xl font-extrabold font-serif",
  HeadingCont: "font-Cinzel font-bold text-4xl text-gray-800",
  Heading5: " font-Alata text-gray-600 font-thin text-sm",
  Heading3: "lg:text-3xl text-2xl font-Rampart font-bold text-gray-800",
  checkbox: "w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300",
  linkProd: "border-b-2 border-transparent text-base px-2 py-1 font-Cinzel font-semibold text-gray-700 transition ease-in-out hover:text-gray-900 hover:border-gray-700 focus:border-gray-700",
};

export const Transitions = {
  enter: "transition ease-out duration-200",
  enterFrom: "opacity-0 translate-y-1",
  enterTo: "opacity-100 translate-y-0",
  leave: "transition ease-in duration-150",
  leaveFrom: "opacity-100 translate-y-0",
  leaveTo: "opacity-0 translate-y-1",
};

export const prodFav = {
  iconOpen: "absolute transition-opacity left-3 lg:left-14 bottom-5 flex justify-center items-center gap-2 lg:gap-4",
  tapList: "flex space-x-1 rounded-xl bg-gray-700 p-1",
  SectionProd: "flex mt-5 px-2 py-10 flex-col justify-center items-center",
};

export const onSale = {
  img: " px-2 transform transition duration-500 ease-in-out",
  des: "lg:flex justify-between items-center py-1  text-lg font-Alata font-semibold",
  slidBtn: "absolute text-center top-28 text-xl shadow bg-slate-50 p-3 rounded-full z-10 hover:bg-slate-400 transition ease-in-out",
  conOnsale: "flex justify-start gap-10 items-center overflow-x-scroll scroll-smooth scrollbar-hide",
};

export const newArrivals = {
  container: "h-52 lg:flex justify-between  items-center bg-gradient-to-r from-green-100 to-blue-200 shadow-md rounded-md px-16",
  conImg: "hidden lg:flex justify-center items-center gap-5",
  img: " h-48 rounded-xl shadow-xl",
};

export const secProd = {
  btnImg: "text-white font-Rampart font-medium px-4 py-1 border border-gray-50 shadow-md shadow-slate-500 transition ease-in-out duration-300 hover:bg-slate-50 hover:text-gray-900",
  btnShop: "absolute z-10 top-1 transition-opacity  ease-in-out duration-300 right-1 text-xl text-gray-600 px-2 py-2 hover:text-gray-900",
  ctgProduct: "flex gap-14 justify-start items-center",
};

export const footer = {
  fooContent: "max-w-screen-xl mt-48 px-4 py-8 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8",
  navFoo: "flex flex-wrap justify-center -mx-5 -my-2",
  headingFoo: "text-base capitalize leading-6 text-gray-500 hover:text-gray-900",
  titleFoo: "mt-8 text-base leading-6 text-center text-gray-400",
};

export const catagoryProd = {
  content: "w-full flex justify-center items-center px-20 py-2 border-b-2 border-gray-500 gap-20",
  linkTitle: "uppercase text-sm font-Cinzel font-semibold text-gray-600 transition ease-in-out duration-300 hover:text-gray-900",
};
