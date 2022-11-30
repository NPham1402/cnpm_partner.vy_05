import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userColumns } from "../../datatablesource";
import InputModal from "../form-modal/InputModal";
import FormNhapHang from "../form-modal/type-form/FormNhapHang";
import "./datatable.scss";

const Datatable = (props) => {
  const [data, setData] = useState([]);
  const [showHide, setShowHide] = useState(false)

  const navigate = useNavigate();
  useEffect(() => {
    setData(props.data)
  }, [props])
  const handleDelete = (id) => {
    setData(data.filter((item) => item.ID_HOME !== id));
  };
  const handleNhapHang = (id) => {
    console.log(id)
    setShowHide(true)
  }
  console.log(FormNhapHang);
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton" onClick={e => { navigate("/users/single", { state: { id: params.row.ID_HOME, ten: params.row.TEN, dien_tich: params.row.DIEN_TICH, sotang: params.row.SO_TANG, } }); }} style={{ textDecoration: "none" }}>Chi tiết</div>
            <div
              className="deleteButton"
              onClick={() => handleNhapHang(params.row._id)}>
              Nhập
            </div>
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
        Product
        <Link to="/users/new" className="link">
          Thêm mới
        </Link>
      </div>
      <InputModal open={showHide} setOpen={setShowHide} title={'Nhập hàng'} typeForm={<FormNhapHang />} />
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        getRowId={row => row._id}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable;
