import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import {useState,useEffect} from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
const Home = () => {
  const [data,setData]=useState();
  const [getCookies] = useCookies();
  useEffect(() => {
     axios
    .get("http://localhost:3001/thongke",{headers:{id:getCookies.id}})
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
             {data!=undefined &&<><Widget type="user" number={data[0].soluonguser} />
          <Widget type="order" number={data[0].soluonghoadon}/>
            {data[0].doanhthu===null?<>
                <Widget type="earning" number={0}/>
          <Widget type="balance" number={0}/>
            </>:<><Widget type="earning" number={data[0].doanhthu}/>
          <Widget type="balance" number={data[0].doanhthu}/></>}
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
