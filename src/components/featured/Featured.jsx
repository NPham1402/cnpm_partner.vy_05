import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  var phantram=(1+ Math.random() * (70 - 1)).toFixed(2);
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Tổng doanh thu</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={phantram} text={phantram+"%"} strokeWidth={5} />
        </div>
        <p className="title">Tổng doanh số hôm nay</p>
        <p className="amount">$420</p>
        <p className="desc">
        Xử lý các giao dịch trước đó. Các khoản thanh toán cuối cùng có thể không được bao gồm.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Mục tiêu</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">{(5+ Math.random() * (60 - 5)).toFixed(2)}k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Tuần trước</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">{(5+ Math.random() * (60 - 5)).toFixed(2)}k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Tháng trước</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">{(5+ Math.random() * (60 - 5)).toFixed(2)}k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
