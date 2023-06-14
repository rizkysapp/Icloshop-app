import { Link } from "react-router-dom";
import { Layout, Nav, Styles } from "../../style/Style";
import { useNavigate } from "react-router-dom";
import NavLink from "./layout/NavLink";
import LinkMob from "./layout/LinkMob";

const Header = () => {
  const navigate = useNavigate();

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
          <button type="button" className={`${Layout.BtnActi} py-2`} onClick={() => navigate("/login")}>
            Login
          </button>
          <LinkMob />
        </div>
      </div>
    </nav>
  );
};
export default Header;
