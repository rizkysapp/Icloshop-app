import { Link } from "react-router-dom";
import CatRang from "./CatRang";

const DetailProd = () => {
  return (
    <div>
      <div className="border border-gray-600 flex justify-start px-5 py-3 items-center gap-5">
        <div>
          <CatRang
            title="Ukuran"
            pov={() => (
              <div className="flex flex-col justify-center items-center space-y-2">
                <Link className="rounded hover:bg-gray-200 w-32 px-1 py-2 text-center">28 - 29</Link>
                <Link className="rounded hover:bg-gray-200 w-32 px-1 py-2 text-center">30 - 31</Link>
                <Link className="rounded hover:bg-gray-200 w-32 px-1 py-2 text-center">32 - 33</Link>
                <Link className="rounded hover:bg-gray-200 w-32 px-1 py-2 text-center">34 - 35</Link>
              </div>
            )}
          />
        </div>
        <div>
          <CatRang
            title="Harga"
            pov={() => (
              <div className="flex flex-col justify-center items-center">
                <Link>200k</Link>
                <Link>400k</Link>
                <Link>500k</Link>
                <Link>900k</Link>
              </div>
            )}
          />
        </div>
        <div>
          <CatRang
            title="Diskon"
            pov={() => (
              <div className="flex flex-col justify-center items-center">
                <Link>Promo Ramadhan</Link>
                <Link>Penguna Baru</Link>
                <Link>Diskon Voucer</Link>
              </div>
            )}
          />
        </div>
        <div>
          <CatRang
            title="Tipe Product"
            pov={() => (
              <div className="flex flex-col justify-start items-center">
                <Link>Sepatu</Link>
                <Link>Baju</Link>
                <Link>Kemeja</Link>
                <Link>Jam</Link>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailProd;
