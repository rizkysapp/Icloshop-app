import { Link } from "react-router-dom";
import { Nav, Styles } from "../../style/Style";
// import { useNavigate } from "react-router-dom";
import NavLink from "./layout/NavLink";
import LinkMob from "./layout/LinkMob";
import BtnNav from "./layout/BtnNav";
import ProfNav from "./layout/ProfNav";

const Header = () => {
  // const navigate = useNavigate();

  return (
    <nav className={Nav.nav}>
      <div className={Nav.ConNav}>
        <span>
          <Link to={"/"} className={Nav.Logo}>
            Icloshop
          </Link>
        </span>
        <NavLink />
        <div className={`${Styles.flexCenter} gap-1`}>
          {/* <BtnNav /> */}
          <ProfNav />
          <LinkMob />
        </div>
      </div>
    </nav>
  );
};
export default Header;
