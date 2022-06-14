import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
import List from "./pages/list/List";
import List2 from "./pages/list-2/List2";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import NewRoom from "./pages/new/New_room/NewRoom";
import Login from "./pages/login/Login";
import Register from "./pages/Register/GroupRegister";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Tablehitory from "./components/datatable_home/Tablehitory";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCookies } from "react-cookie";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [getCookies] = useCookies();
  const stripePromise = loadStripe(
    "pk_test_51KysBGC4c4me30BTdO6jARHtsFThCnAVcsxOeu9tumGlrOHf1XstZNJaV4UWPLNxIIx4fB4W3Pb6d1kgsszy8FBw0001H8C0ok"
  );
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{CLIENT_SECRET}}",
  };
  function LoginState({ children }) {
    if (!getCookies.Partner) {
      return <Navigate to="/Login" />;
    }
    return children;
  }
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
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
            <Route path="/Register" element={<Register />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
