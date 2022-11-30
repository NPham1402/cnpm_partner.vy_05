import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import * as yup from 'yup';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import {  useForm } from "react-hook-form";
const UserForm = ({ inputs, title }) => {
  const navigate = useNavigate(); 
  const location=useLocation()
   const { register,handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit=(e,v)=>{
    console.log(e)
    const headers = {...e };
    console.log(headers)
axios.post('http://localhost:1402/products',{...e })
  .then(function (response) {

  })
  .catch(function (error) {
    console.log(error);
  });
  }
  
const schemaA = yup.object().shape({
  productName: yup.string().required('Vui lòng nhập tên').trim(),
  description: yup.string().required('Vui lòng nhập zipCode').trim(),
  price: yup.number().max(1000000000,'Phải nhỏ hơn 1000000000').min(0,'Phải lớn hơn 0').required('can so luong'),
});
  
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
            <form  onSubmit={handleSubmit(onSubmit)}>
              
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                  <input  name={input.id} type={input.type} {...register(input.id)} placeholder={input.placeholder} />
                </div>
              ))}                          
              <button class="add absolute" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
