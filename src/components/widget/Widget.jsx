import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./widget.scss";

const Widget = ({ type, number }) => {
  let data;

  //temporary
  const diff = (1 + Math.random() * (100 - 1)).toFixed();

  switch (type) {
    case "user":
      data = {
        title: "NGƯỜI DÙNG",
        isMoney: false,
        value: (Math.floor(Math.random() * (500 - 140)) + 140).toLocaleString(),
        link: "Xem tất cả người dùng",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ĐƠN HÀNG",
        isMoney: false,
        link: "Xem tất cả các đơn đặt hàng",
        value: Math.floor(Math.random() * (500 - 100)) + 100,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Doanh Thu",
        isMoney: true,
        value: (Math.floor(Math.random() * (50000000 - 5000000)) + 5000000).toLocaleString() + " VND",
        link: "Xem thu nhập ròng",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Lợi Nhuận",
        isMoney: true,
        value: (Math.floor(Math.random() * (20000000 - 2000000)) + 2000000).toLocaleString() + " VND",
        link: "Xem chi tiết",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.value}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
