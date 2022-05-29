import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link ,useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

const Datatable = (props) => {
  const [data, setData] = useState([]);
    const navigate = useNavigate();
  useEffect(()=>{
    setData(props.data)
  },[props])
  const handleDelete = (id) => {
    setData(data.filter((item) => item.ID_HOME !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
              <div className="viewButton" onClick={ e=>{ navigate("/users/single", { state: { id:params.row.ID_HOME,ten:params.row.TEN,dien_tich:params.row.DIEN_TICH,sotang:params.row.SO_TANG, } });}} style={{ textDecoration: "none" }}>Chi tiết</div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.ID_HOME)}>
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
        Căn hộ
        <Link to="/users/new" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        getRowId={row=>row.ID_HOME}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
