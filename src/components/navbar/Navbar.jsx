import "./navbar.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [getCookies, setCookies,remove] = useCookies();
  const navigate=useNavigate();
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <button className="item" onClick={e=>{remove("Partner");remove("id"); window.location.reload()}}>Đăng xuất</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
