import { Button, Form, notification } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ecommerceBg from "./assets/img/ecommerce_background.jpg";
import "./login.scss";
const Login = () => {
  const navigate = useNavigate();
  const [apiNotification, contextHooker] = notification.useNotification();
  function CheckEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      return true;
    return false
  }
  const submit = async (values) => {
    if (CheckEmail(values.email) && values.password) {
      const response = await axios({
        url: "http://localhost:1402/users/login_admin", headers: {
          token: process.env.REACT_APP_TOKEN_CONFIRM
        },
        method: "post",
        body: {
          email: values.email,
          password: values.password
        }
      })
      if (await response.data.status) {
        localStorage.setItem("adminId", response.data.status._id);
        apiNotification.open({
          message: "Chuyển hướng đến trang admin",
          description: "Đăng nhập thành công",
          duration: 3000,
        })
        setTimeout(() => { navigate("/") }, 3000)
      }
      else (
        apiNotification.open({
          message: "Sai email hoặc mật khẩu",
          description: "Vui lòng nhập lại thông tin",
          duration: 3000,
        })
      )
    }
    else {
      apiNotification.open({
        message: "Sai định dạng email hoặc mật khẩu",
        description: "Vui lòng nhập lại thông tin",
        duration: 3000,
      })
    }
  }
  console.log(ecommerceBg);
  return (
    <div style={{ backgroundImage: `url(${ecommerceBg})`, backgroundPosition: "center", backgroundSize: "cover", minWidth: "100%", height: "100vh", display: "flex", justifyContent: "center" }}>
      <div className="mx-auto" style={{ minWidth: "40%", background: "#ebf2ee", minHeight: "100px", padding: "10px", height: "30vh", marginTop: "15%" }}>
        {contextHooker}
        <legend style={{ fontWeight: "700" }}>Đăng nhập</legend>
        <Form className="login-form w-full m-auto" name="normal_login" initialValues={{ remember: true }} onFinish={submit}>
          <label style={{ fontWeight: "600", text: "18px" }}>Email</label>
          <Form.Item name="email" rules={[{ required: true, message: "Nhập email admin" }]} style={{ width: "100%", minHeight: "40px" }}>
            <input name="email" placeholder="email" style={{ width: "100%", border: "none", minHeight: "40px", padding: "5px", font: "500", text: "20px" }} />
          </Form.Item>
          <label style={{ fontWeight: "600", text: "18px" }}>Password</label>
          <Form.Item name="password" rules={[{ required: true, message: "Vui lòng điền mật khẩu!" }]} style={{ width: "100%", minHeight: "40px" }}>
            <input name="password" type="password" placeholder="mật khẩu" style={{ width: "100%", minHeight: "40px", border: "none", padding: "5px", font: "500", text: "20px" }} />
          </Form.Item>
          <Form.Item style={{ width: "100%", display: "flex", justifyContent: "right", height: "15px" }}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>


  )
}

export default Login