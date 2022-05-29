 import "../datatable/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { productsColumns } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Datatable2 = (props) => {
    const [data, setData] = useState(props.data);
 
  const navigate=useNavigate()
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    useEffect(()=>{
      setData(props.data)
     
    })
       console.log(data)
    const handleclick=()=>{
      
    }
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <div className="viewButton" onClick={ e=>{ navigate("/history", { state: { id:params.row.ID_ROOMTYPE } });}} style={{ textDecoration: "none" }}>Chi tiết</div>
                <div
                  className="deleteButton"
                  onClick={() => handleDelete(params.row.id)}>
                  Xóa
                </div>
              </div>
            );
          },
        },
      ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Phòng
        <buton className="link" onClick={ e=>{ navigate("/users/room", { state: { id:props.id } });}}>
          Thêm mới
        </buton>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={productsColumns.concat(actionColumn)}
        pageSize={9}
        getRowId={row=>row.ID_ROOMTYPE}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable2
