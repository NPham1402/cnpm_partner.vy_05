import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
import { loadStripe } from "@stripe/stripe-js";
import 'antd/dist/antd.css';
import { useContext } from "react";
import { useCookies } from "react-cookie";
import { Route, Routes, useNavigate } from "react-router-dom";
import Tablehitory from "./components/datatable_home/Tablehitory";
import { DarkModeContext } from "./context/darkModeContext";
import { productInputs, userInputs } from "./formSource";
import List2 from "./pages/list-2/List2";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import NewRoom from "./pages/new/New_room/NewRoom";
import Payment from "./pages/payment";
import Register from "./pages/Register/GroupRegister";
import Single from "./pages/single/Single";
import UsersList from "./pages/user/UserList";
import "./style/dark.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const [getCookies] = useCookies();
  const stripePromise = loadStripe(
    "pk_test_51KysBGC4c4me30BTdO6jARHtsFThCnAVcsxOeu9tumGlrOHf1XstZNJaV4UWPLNxIIx4fB4W3Pb6d1kgsszy8FBw0001H8C0ok"
  );
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{CLIENT_SECRET}}",
  };
  function LoginState({ children }) {
    if (!localStorage.getItem("adminId")) {
      navigate("/login");
    }
    return children;
  }
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <LoginState>
                <Home />
              </LoginState>
            }
          />
          <Route
            path="history"
            element={
              <LoginState>
                <Tablehitory />
              </LoginState>
            }
          />
          <Route path="users">
            <Route
              index
              element={
                <LoginState>
                  <List />
                </LoginState>
              }
            />
            <Route
              path="single"
              element={
                <LoginState>
                  <Single />
                </LoginState>
              }
            />
            <Route
              path="new"
              element={
                <LoginState>
                  <New inputs={userInputs} title="Thêm nhà mới" />
                </LoginState>
              }
            />
            <Route
              path="users"
              element={
                <LoginState>
                  <UsersList inputs={userInputs} title="Add new user" />
                </LoginState>
              }
            />
            <Route
              path="room"
              element={
                <LoginState>
                  <NewRoom inputs={productInputs} title="Thêm phòng mới" />
                </LoginState>
              }
            />
          </Route>

          <Route path="products">
            <Route
              index
              element={
                <LoginState>
                  <List2 />
                </LoginState>
              }
            />
            {/* <Route path=":productId" element={<Single />} /> */}
            <Route
              path="new"
              element={
                <LoginState>
                  <New inputs={productInputs} title="Thêm nhà mới" />
                </LoginState>
              }
            />
          </Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
