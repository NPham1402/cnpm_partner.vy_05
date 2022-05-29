import "./list.scss"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"


const List = () => {
     const [data, setData] = useState([]);
     const [one, setone] = useState();
 useEffect(()=>{
     const headers = {
    id: "PN1",
  };
  axios
    .get("http://localhost:3001/home", { headers })
    .then((e) => {
      setData(e.data)
      console.log(data)
    })
    .then(function (error) {
      console.log(error);
    });
  },[one])
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable data={data}/>
      </div>
    </div>
  )
}

export default List