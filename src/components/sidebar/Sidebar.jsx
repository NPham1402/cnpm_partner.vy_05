import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HouseIcon from '@mui/icons-material/House';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from "react-router-dom";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useCookies } from "react-cookie";
import ReceiptIcon from '@mui/icons-material/Receipt';
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [getCookies, setCookies] = useCookies();
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Traveloka</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">TRANG CHỦ</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Bảng điều khiển</span>
            </Link>
          </li>
          <p className="title">DANH SÁCH</p>
         <Link to="/users/users" style={{ textDecoration: "none" }}>
            <li>
              <PeopleIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <HouseIcon className="icon" />
              <span>Product</span>
            </li>
          </Link>
          <Link to="/payment" style={{ textDecoration: "none" }}>
           <li> 
              <ReceiptIcon className="icon" />
              <span>Receipt</span>
            </li>
          </Link>
          {/* <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li> */}
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
