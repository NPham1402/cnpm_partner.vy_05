import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
const New = ({ inputs, title }) => {
  const [infor, setinfor] = useState("");
  const navigate = useNavigate(); 
  const [getCookies, setCookies] = useCookies();
  const handlechange=(e,id)=>{
    console.log(id)
    setinfor((prev)=>({...prev,[id]:e.target.value}))
    console.log(infor)
  }
  const handleclick=(e)=>{
      e.preventDefault();
      
    const headers = {
      adress: infor.adress,
    area: infor.area,
    description:infor.description,
    floor: infor.floor,
    name:infor.name,
    policy:infor.policy,
    link:infor.link,
    id:getCookies.id
    };
    console.log(headers);

   axios.get('http://localhost:3001/home_create',{ headers })
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
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <form>
              
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input onChange={e=>handlechange(e,input.id)} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <div className="formInput">
                  <label>Tag Địa Điểm</label>
                
              <select onChange={e=>handlechange(e,"dia_diem")}>
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
                  <input onChange={e=>handlechange(e,"link")} type="text" placeholder={"Link hình"} />
                  <button onClick={e=>{window.open("https://cloudinary.com/console/c-f91fcdd89730f287bfa741ec9e6ccf/media_library/folders/home")}}>Thêm Hình</button>
                </div>
               <div className="formInput">
                </div>
                         
              <button class="add" onClick={handleclick}>Gửi</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
