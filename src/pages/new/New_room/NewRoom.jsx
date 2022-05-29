import "../new.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const New = ({ inputs, title }) => {
  const location=useLocation();
  const navigate = useNavigate(); 

  console.log(location.state)
  const [infor, setinfor] = useState("");
  const handlechange=(e,id)=>{
    console.log(id)
    setinfor((prev)=>({...prev,[id]:e.target.value}))
    console.log(infor)
  }
  const handleclick=(e)=>{
      e.preventDefault();
      
    const headers = {
      ID_HOME:location.state.id,
      SO_PHONG_TRONG:infor.Number_Room,
      TEN_PHONG:infor.Name,
      SO_NGUOI:infor.Number_people,
      MAXIMUM_EXTRA_BEDS:infor.MAXMIUM_EXTRA_BEDS,
      PRICE_OF_EXTRA_BED:infor.PRICE_OF_EXTRA_BED,
      TIEN_NGHI:infor.TIEN_NGHI,
      PRICE_PHONG:infor.price,
    };
    console.log(headers);

   axios.get('http://localhost:3001/room_create/',{ headers })
  .then(function (response) {
    navigate('/users/room', { state:response.data });
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
