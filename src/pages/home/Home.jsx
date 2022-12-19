import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./home.scss";
const Home = () => {
  const [data, setData] = useState(['d']);
  const [getCookies] = useCookies();
  useEffect(() => {
    axios
      .get("http://localhost:3001/thongke", { headers: { id: getCookies.id } })
      .then((e) => {
        setData(e.data)

      })
      .then(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">

        <Navbar />
        <div className="widgets">
          {data != undefined && <><Widget type="user" number={Math.floor(Math.random() * (50000000 - 5000000)) + 5000000} />
            <Widget type="order" number={Math.floor(Math.random() * (50000000 - 5000000)) + 5000000} />
            {data[0].doanhthu === null ? <>
              <Widget type="earning" number={0} />
              <Widget type="balance" number={0} />
            </> : <><Widget type="earning" number={Math.floor(Math.random() * (50000000 - 5000000)) + 5000000} />
              <Widget type="balance" number={Math.floor(Math.random() * (50000000 - 5000000)) + 5000000} /></>}
          </>
          }
        </div>
        <div className="charts">
          <Featured />
          <Chart title="6 tháng qua (Doanh thu)" aspect={3 / 1} type={false} />
        </div>

      </div>
    </div>
  );
};

export default Home;
