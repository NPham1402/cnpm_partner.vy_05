import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const New = ({ inputs, title }) => {
  const [infor, setinfor] = useState("");
  const navigate = useNavigate(); 
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
              <br/>              
              <button onClick={handleclick}>Gửi</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
