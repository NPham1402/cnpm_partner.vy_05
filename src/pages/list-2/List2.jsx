import "../list/list.scss"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";
import Datatable from "../../components/datatable-2/Datatable2"


const List2 = (props) => {
     const [data, setData] = useState([]);
     const [one, setone] = useState();
 useEffect(()=>{
     const headers = {
    id: props.id,
  };
  axios
    .get("http://localhost:3001/roomtypes", { headers })
    .then((e) => {
      setData(e.data)
  
    })
    .then(function (error) {
      console.log(error);
    });
  },[one])
    console.log(data)
  return (
    <div className="list">
      <div className="listContainer">
        <Datatable data={data} id={props.id} />
      </div>
    </div>
  )
}

export default List2