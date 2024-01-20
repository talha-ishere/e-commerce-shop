import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";
import Login from "./components/user/Login";
import ProductDetails from "./components/product_details/ProductDetails";
import Cart from "./components/cart/Cart";
import MyProfile from "./components/user/MyProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/product_details/:productId"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route
            path="/login"
            element={<Login isActive="true"></Login>}
          ></Route>
          <Route path="/mycart" element={<Cart></Cart>}></Route>
          <Route path="/myProfile" element={<MyProfile></MyProfile>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
