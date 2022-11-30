import "./list.scss"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { DataGrid } from "@mui/x-data-grid";
import { billColumns } from "../../datatablesource";
import { Navigate } from "react-router-dom";


const List = () => {
     const [data, setData] = useState([]);
 useEffect(()=>{
  axios
    .get("http://localhost:1402/payments")
    .then((e) => {
      setData(e.data.data)
    })
    .then(function (error) {
      console.log(error);
    });
  },[])
   
    const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
              <div className="viewButton" onClick={ e=>{ Navigate("/users/single", { state: { id:params.row.ID_HOME,ten:params.row.TEN,dien_tich:params.row.DIEN_TICH,sotang:params.row.SO_TANG, } });}} style={{ textDecoration: "none" }}>Chi tiết</div>
            <div
              className="deleteButton">
              Xóa
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <div className="datatable">
      <div className="datatableTitle">
        Bill
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={billColumns.concat(actionColumn)}
        pageSize={9}
        getRowId={row=>row._id}
        rowsPerPageOptions={[9]}
      />
    </div>
      </div>
    </div>
  )
}

export default List