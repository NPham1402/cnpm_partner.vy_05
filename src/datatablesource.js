import dayjs from "dayjs";
import generateThousand from "./ultis/generateThousand";

export const userColumns = [
  { field: "_id", headerName: "ID", hiden: true },
  {
    field: "productName",
    headerName: "Product Name",
  flex: 1
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.username}
    //     </div>
    //   );
    // },
  },
  {
    field: "quanity",
    headerName: "Quanity",
    
  },

  {
    field: "description",
    headerName: "Description",
  },
   {
    field: "quanity",
    headerName: "Quality",
  },
  {
    field: "category",
    headerName: "Category",
  },
  
];

export const productsColumns = [
  { field: "ID_ROOMTYPE", headerName: "ID", width: 100 },
  {
    field: "TEN_PHONG",
    headerName: "Tên",
    width: 230,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.username}
    //     </div>
    //   );
    // },
  },
  {
    field: "LOAI_GIUONG",
    headerName: "Loại giường",
    width: 90,
  },

  {
    field: "SO_NGUOI",
    headerName: "Số người",
    width: 90,
  },
  {
    field: "SO_PHONG_TRONG",
    headerName: "Số phòng trống",
    width: 150,
  },
  {
    field: "TIEN_NGHI",
    headerName: "Tiện lợi",
    width: 300,
  },
  {
    field: "status",
    headerName: "Trạng thái",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>Active</div>
      );
    },
  },
];


export const billColumns = [
  { field: "_id", headerName: "ID", hiden: true ,flex:1 },
  {
    field: "datePaid",
    headerName: "Date",
    renderCell: (params) => {
      console.log(params)
      return (
        <div className="cellWithImg">
          {dayjs(params.datePaid).format("DD-MM-YYYY")}
        </div>
      );
    },   
    flex:1
  },
  {
    field: "totalPrice",
    headerName: "Total Price",
      renderCell: (params) => {
      return (
        <div className="cellWithImg font-bold text-[16px]">
          {generateThousand(params.value)} VND
        </div>
      );
    },
    flex:1
  },
    {
    field: "products",
    headerName: "product",
    renderCell: (params) => {
      return (
        <div className="cellWithImg" >
          <ul>
          {params.value.map(item=>{
            return <li key={item._id}>Name: {item.productName} - {item.quantity} Unit</li>
          })}
          </ul>
        </div>
      );
    }, 
    flex:1
  },
  // {
  //   field: "address",
  //   headerName: "Address", 
  // },
  // {
  //   field: "status",
  //   headerName: "Trạng thái",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>Active</div>
  //     );
  //   },
  // },
];

export const usersColumns = [
  { field: "_id", headerName: "ID", hiden: true , },
  {
    field: "userName",
    headerName: "User Name",
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.username}
    //     </div>
    //   );
    // },
  },
  {
    field: "email",
    headerName: "Email",
  },

  {
    field: "phoneNumber",
    headerName: "Phone Number", 
  },
  
  // {
  //   field: "address",
  //   headerName: "Address", 
  // },
  // {
  //   field: "status",
  //   headerName: "Trạng thái",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>Active</div>
  //     );
  //   },
  // },
];



export const historyColumns = [
  { field: "ID_ROOMTYPE", headerName: "ID", width: 100 },
  {
    field: "SO_LUONG_PHONG",
    headerName: "Số lượng phòng:",
    width: 230,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.username}
    //     </div>
    //   );
    // },
  },
  {
    field: "PAY_TIME",
    headerName: "Thời gian thanh toán:",
    width: 150,
  },

  {
    field: "NGAY_NHAN_PHONG",
    headerName: "Ngày nhận phòng:",
    width: 100,
  },
  {
    field: "NGAY_TRA_PHONG",
    headerName: "Ngày trả phòng:",
    width: 150,
  },
  {
    field: "FINAL_PRICE",
    headerName: "Tổng tiền",
    width: 230,
  },
  {
    field: "status",
    headerName: "Trạng thái",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>Active</div>
      );
    },
  },
];
export const userRows = () => {};
//temporary data
//   {
//     id: 1,
//     username: "Snow",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status: "active",
//     email: "1snow@gmail.com",
//     age: 35,
//   },
//   // {
//   //   id: 2,
//   //   username: "Jamie Lannister",
//   //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   //   email: "2snow@gmail.com",
//   //   status: "passive",
//   //   age: 42,
//   // },
//   // {
//   //   id: 3,
//   //   username: "Lannister",
//   //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   //   email: "3snow@gmail.com",
//   //   status: "pending",
//   //   age: 45,
//   // },
//   // {
//   //   id: 4,
//   //   username: "Stark",
//   //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   //   email: "4snow@gmail.com",
//   //   status: "active",
//   //   age: 16,
//   // },
//   // {
//   //   id: 5,
//   //   username: "Targaryen",
//   //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   //   email: "5snow@gmail.com",
//   //   status: "passive",
//   //   age: 22,
//   // },
//   // {
//   //   id: 6,
//   //   username: "Melisandre",
//   //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   //   email: "6snow@gmail.com",
//   //   status: "active",
//   //   age: 15,
//   // },
//   // {
//   //   id: 7,
//   //   username: "Clifford",
//   //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   //   email: "7snow@gmail.com",
//   //   status: "passive",
//   //   age: 44,
//   // },
//   // {
//   //   id: 8,
//   //   username: "Frances",
//   //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   //   email: "8snow@gmail.com",
//   //   status: "active",
//   //   age: 36,
//   // },
//   // {
//   //   id: 9,
//   //   username: "Roxie",
//   //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   //   email: "snow@gmail.com",
//   //   status: "pending",
//   //   age: 65,
//   // },
//   // {
//   //   id: 10,
//   //   username: "Roxie",
//   //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   //   email: "snow@gmail.com",
//   //   status: "active",
//   //   age: 65,
//   // },
// ];
