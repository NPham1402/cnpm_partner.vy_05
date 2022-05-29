import React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
const Tablehitory = () => {
      const [data, setData] = useState(userRows);
  const location=useLocation()
  console.log(location.state.id)
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
     <div className="datatable">
      <div className="datatableTitle">
      Thêm địa chỉ liên hệ mới
        <Link to="/users/new" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
    );
};

export default Tablehitory;