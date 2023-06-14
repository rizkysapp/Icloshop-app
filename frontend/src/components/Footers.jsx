import { Link } from "react-router-dom";
import { link, iconsLink } from "../constants";
import { footer } from "../style/Style";

const Footers = () => {
  return (
    <section className="bg-gray-100 shadow">
      <div className={footer.fooContent}>
        <nav className={footer.navFoo}>
          {link.map((item) => (
            <div key={item.id} className="px-5 py-2">
              <Link to={`/${item.title}`} className={footer.headingFoo}>
                {item.title}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          {iconsLink.map((icon) => (
            <Link key={icon.id} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{icon.title}</span>
              {icon.icon}
            </Link>
          ))}
        </div>
        <p className={footer.titleFoo}>© 2021 IcloShop, Inc. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footers;
