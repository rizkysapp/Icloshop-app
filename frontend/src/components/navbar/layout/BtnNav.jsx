import { Layout } from "../../../style/Style";
import { useNavigate } from "react-router-dom";

const BtnNav = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" className={`${Layout.BtnActi} py-2`} onClick={() => navigate("/login")}>
        Login
      </button>
    </div>
  );
};

export default BtnNav;
