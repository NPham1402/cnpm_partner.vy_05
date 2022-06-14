import React, { useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { historyColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import Chart from '../chart/chartroom';
const Tablehitory = () => {
      const [data, setData] = useState(userRows);
  const location=useLocation()
  console.log(location.state.id)
      useEffect(e=>{
     axios
    .get("http://localhost:3001/history", { headers:{id:location.state.id} })
    .then((e) => {
      setData(e.data)
  
    })
    .then(function (error) {
      console.log(error);
    });
      },[])
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
    const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Chi tiết</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}>
            </div>
          </div>
        );
      },
    },
  ];
    return (
     <>
     <div className="datatable">
      <div className="datatableTitle">
        lịch sử
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={historyColumns.concat(actionColumn)}
        pageSize={9}
           getRowId={row=>row}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      
      
    </div>
         <Chart aspect={3 / 1} title="Doanh thu theo từng tháng của phòng" type={true} id={location.state.id}/>

     </>
     
    );
};

export default Tablehitory;