import axios from "axios";
import { useEffect, useState } from "react";
import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { headers } from "../../enum";
import "./list.scss";


const List = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1402/products/all", { headers })
      .then((e) => {
        console.log(e)
        setData(e.data.data)
      })
      .then(function (error) {
        console.log(error);
      });
  }, [])
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable data={data} />
      </div>
    </div>
  )
}

export default List