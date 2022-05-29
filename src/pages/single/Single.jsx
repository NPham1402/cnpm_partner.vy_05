import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../pages/list-2/List2";
import { useLocation } from "react-router-dom";

const Single = () => {
  const location =useLocation();
  
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Chỉnh sửa</div>
            <h1 className="title">Thông tin</h1>
            <div className="item">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAAJCQnMzMza2trw8PCJiYk9PT1MTEze3t6+vr7Hx8eQkJD8/PyVlZX19fVzc3N6enqfn5+np6ewsLDp6eldXV0vLy8oKChkZGSlpaUgICDl5eUYGBg3NzdpaWlVVVWAgIBEREQjIyNQUFARERHAwMArKytISEi2trbtVZgHAAAGKElEQVR4nO3da1fiMBAG4AYBdRXxiqILiqKy//8Prly0qZ1pMm0mk/TM+2n3nNLmMYBtMolFodFoNBqNRqPRaDQ5ZjKRbgF3NjPpFjBnbcxcug2seTGm38S12eVZuh1smRnTb+KL+cmldFtYMjOm38QKsI/EuTH9JtaAxlxJtyloAGC/iM8QsE9EBGjMSrplgXKJAftCbAD2g9gINGYs3b7OcQDzJ165gLkTPYB5E1c+QGPOpdvZOp7AfInewFyJY9Ayhj+aF9KtbREYuMLu4fIjwsDdvTZMvJZuMTENQORZKjPiOWj4eazPn+gA1gZtDnmUazExTmDuxAs3sDJ4auVGpsXEwMDaMDfcizkQr/2AWC/exm8xMZ49uM06SyLcg8h8Wo5EErAoTsDD/8VsMTGPYIsb5rXhXkyXSAYWxSYrYgtgXsQbsK0vrpe9gi/7w99ecloC8yHetgUWxTH40g/e9pIDA9d+L86B+K8LsJikT4SBJ/4nWIInOONrMTEwcEM4A9KLqRC7A7+I9wkT/4BteyWeZZLuGxUGHpPPM/kET3TE0GRaQgHRN6o08QMGtioEnqbYizBw2fJs04fkiGcwsHUpd3LE0MAv4hN4ymG4NpMCA+87FeNP3xIiHjEAv4iLZIgw8LPzcopRKkQY+DDtfubRIAkiAgyyIGb0Dp78NMS5vTME2/AWoAe3QXoxJhHuwVDALyJ4/ohEuAefggGL4k6WyA8U7kUYuAgKRHvxb9irgEGAo9DXESPCwPfAPbiNEPEUvOogeA9ugxDvOK71k5hAESICZLvk39jEuD24TWRi9J9ogf1Qma4pAUSvyvG+kQGivRieiAAj3GPAxPfQRMGbqDi9iAAjPXdHuFFEgNHGMWGiCXeriAAjloQwP7AhwKiFkqyPbMjDaOTlA/DASZBeREa+oq/hZXujIuNeAvuTMA1/ISPQhDKLcGEZhEbeom0nCDuGYRgamexaSO31FHwyCJkHEqyqC9yLSA+KVn8GnZRFgaL1rXDddCviBAWKVtPDxe9tqj+QooFdJBe2IEI6cdIAFF2AhQmpRUpIfdIhkgsFUSGtkg6pMUtbSCE296DsquQGodn4fhZdQNHV801C3+lFpNLTup1IVeg7Lgbvt/JRlP+W3KqjQeg/8AfdNnwUyQl/fxtSxqbrqzu399rl/yS3PipX2FxVi3dpg++/ibuHidSEz5VlLNTZhSpxf6ddPgxL7rNmCy0iffrEXml9eBwsHxYltzx8rbTisJys1RxtSfx+VnpKUHggthvfn/8CFp9JCI9/teKmwzTUvhfLZ8FlksLiusMk1LwCtM4tuQ1wTVh0GRabV57mXxMTBvlGr6wA3PRRWEl5Mye55fiSUVjeBfhsjT+6PKFm7TPCxSksf0O+uA+emjbxeCzjFJabO3nMyzyaAT3GuL8XS2H4u+NyEzKPAZFxG+HA41cbp7B8MvYYuGMT3kcRekyu7YWUz2BSwnv3wTuhuZ2OPDNdGnlhuaXjm/vgvZCwZ8AxWRh+LKUULtwH74WEica0hAP3wWzCB0bhqvxWcB+swlpSEI5VWD2YXRh+biEN4ROj8Lz3wgsV2slSeN174WMSwgWj8Kb3Qmsuyz3YoMJaUhBaW3q5y3KzFFqTyu6GsAkHKuwQS+ieclVhLSkIrX293LU5KqzFV2gYhVYRubtCToW1qPA7ZSPCV7la5Zfu1bEqrMVTOFFhlwxVaCdLobXw371MXYW1pCC0dsZw79CcpfCu90JrXb579jqCMPzaJEvobnmWQquQy72IVIW1JCZ0FxGqsJbEhO6FwLkL3QuBVVhLYkL3ybMUkk6uwlrowvC7ApBuevMUDvoutJZY9lW4IAvD1wjzCimlLHvh88W5Zy7eyEKGHVYohY9ctfq8wnIRqbtMnmu9Ba+QshAgTyFlUdVZq3VP7oUcvML6AtWGrCifwe+4Z+0sIcNuVSRhcXdGjc+Gr7GEs9OhM6f0uE86HLIK4T9rKxYVtgj8B6bFwiBs3KIpfhiE8JaFYmEQ1rceEg2DcOa+asww7MDZf+HcfdWY6X8fMnwOh0dJhf1vh2g0Go1Go9FoNBqNRqPRaDQajSar/AfM+GvhZXHsIAAAAABJRU5ErkJggg=="
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{location.state.ten}</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{location.state.id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Khu vực:</span>
                  <span className="itemValue">{location.state.dien_tich}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Tầng:</span>
                  <span className="itemValue">
                    {location.state.sotang}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Doanh thu trong 6 tháng" type={true}/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Giao dịch cuối cùng</h1>
          <List id={location.state.id}/>
        </div>
      </div>
    </div>
  );
};

export default Single;
