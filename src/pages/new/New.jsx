import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";
const New = ({ inputs, title }) => {
  const [infor, setinfor] = useState("");
  const navigate = useNavigate();
  const [getCookies, setCookies] = useCookies();
  const handlechange = (e, id) => {
    setinfor((prev) => ({ ...prev, [id]: e.target.value }))
  }


  const { register, watch, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (e, v) => {
    console.log(e)
    const headers = { ...e };
    console.log(headers)
    axios.post('http://localhost:1402/products', { ...e })
      .then(function (response) {

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const schemaA = yup.object().shape({
    productName: yup.string().required('Vui lòng nhập tên').trim(),
    description: yup.string().required('Vui lòng nhập zipCode').trim(),
    price: yup.number().max(1000000000, 'Phải nhỏ hơn 1000000000').min(0, 'Phải lớn hơn 0').required('can so luong'),
  });
  const handleclick = (e) => {
    e.preventDefault();

    const headers = {
      adress: infor.adress,
      area: infor.area,
      description: infor.description,
      floor: infor.floor,
      name: infor.name,
      policy: infor.policy,
      link: infor.link,
      id: getCookies.id
    };
    console.log(headers);

    axios.get('http://localhost:3001/home_create', { headers })
      .then(function (response) {
        navigate('/users');
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer ">
        <Navbar />
        <div className="top bg-white">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <form onSubmit={handleSubmit(onSubmit)}>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input name={input.id} type={input.type} {...register(input.id)} placeholder={input.placeholder} />
                </div>
              ))}
              <div className="formInput">
                <label>Tag Địa Điểm</label>

                <select name="category" {...register("category")}>
                  <option value={"DD21"}>Đà lạt</option>
                  <option value={"DD22"}>Đà nẵng</option>
                  <option value={"DD23"}>Huế</option>
                  <option value={"DD24"}>Hồ Chí Minh</option>
                  <option value={"DD25"}>Hà nội</option>
                </select>
              </div>
              <div className="formInput">
                <label>
                  Link hình
                </label>
                <input type="text" name="image" {...register("image")} placeholder={"Link hình"} />
                <button onClick={e => { window.open("https://cloudinary.com/console/c-f91fcdd89730f287bfa741ec9e6ccf/media_library/folders/home") }}>Thêm Hình</button>
              </div>
              <div className="formInput">
              </div>

              <button class="add absolute" type="submit">Gửi</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
