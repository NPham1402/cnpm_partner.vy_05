import { useContext } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [getCookies, setCookies, remove] = useCookies();
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <button className="item" onClick={e => { localStorage.removeItem("adminId"); navigate("/login") }}>Đăng xuất</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
