import React from "react";
import { Link } from "react-router-dom";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const Pagination = (props) => {
  return (
    <div className={props.class}>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <Link className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ">
              <span className="sr-only">Previous</span>
              <BiChevronLeft className="w-5 h-[1.2rem]" />
            </Link>
          </li>
          <li>
            <Link className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</Link>
          </li>
          <li>
            <Link className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</Link>
          </li>
          <li>
            <Link aria-current="page" className="z-10 px-3 py-2 leading-tight text-gray-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-gray-700">
              3
            </Link>
          </li>
          <li>
            <Link className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">4</Link>
          </li>
          <li>
            <Link className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">5</Link>
          </li>
          <li>
            <Link className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ">
              <span className="sr-only">Next</span>
              <BiChevronRight className="w-5 h-[1.2rem]" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
