import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
import List from "./pages/list/List";
import List2 from "./pages/list-2/List2";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import NewRoom from "./pages/new/New_room/NewRoom";
import Login from "./pages/login/Login";
import Register from "./pages/Register/GroupRegister";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Tablehitory from "./components/datatable_home/Tablehitory";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const stripePromise = loadStripe(
    "pk_test_51KysBGC4c4me30BTdO6jARHtsFThCnAVcsxOeu9tumGlrOHf1XstZNJaV4UWPLNxIIx4fB4W3Pb6d1kgsszy8FBw0001H8C0ok"
  );
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{CLIENT_SECRET}}",
  };
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="history" element={<Tablehitory />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path="single" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Thêm nhà mới" />}
              />
              <Route
                path="room"
                element={
                  <NewRoom inputs={productInputs} title="Thêm phòng mới" />
                }
              />
            </Route>
            <Route path="products">
              <Route index element={<List2 />} />
              {/* <Route path=":productId" element={<Single />} /> */}
              <Route
                path="new"
                element={<New inputs={productInputs} title="Thêm nhà mới" />}
              />
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
