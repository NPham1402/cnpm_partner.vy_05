import "./list.scss"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useCookies } from "react-cookie";
import { Link, Navigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { usersColumns } from "../../datatablesource";
import Notification from "../../components/notification/Notification";


const UsersList = () => {
  const [data, setData] = useState([]);
 
  const [getCookies, setCookies] = useCookies();
 
  useEffect(()=>{
  axios
    .get("http://localhost:1402/users")
    .then((e) => {
      setData(e.data.data)
    })
    .then(function (error) {
      Notification({title:'err',type:'error'})
    });
  },[])
  
  const handleDelete= (idUser)=>{
    console.log(idUser)
  axios
    .delete("http://localhost:1402/users",{headers:{idUser}})
    .then((e) => {
      console.log(e.data)
    })
    .then(function (error) {
      Notification({title:'err',type:'error'})
    });
    
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
              {/* <div className="viewButton" onClick={ e=>{ Navigate("/users/", { state: { params } });}} style={{ textDecoration: "none" }}>Chi tiết</div> */}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.id)}>
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
        User
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={usersColumns.concat(actionColumn)}
        pageSize={9}
        getRowId={row=>row._id}
        rowsPerPageOptions={[9]}
      />
    </div>
      </div>
    </div>
  )
}

export default UsersList