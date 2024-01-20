import "./HeaderSection.css";
import "./responsive.css";
import "bootstrap/dist/js/bootstrap.bundle"; // Import Bootstrap's JavaScript bundle

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
// import { useEffect } from "react";

// useEffect(()=>{

// })

const HeaderSection = (props) => {
  // console.log(props.isActive);

  // const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItemLength = useSelector((state) => state.cart.cartItems.length);

  const [loginPath, setLoginPath] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the current path is "/login" and set loginPath to true
    if (location.pathname === "/login") {
      setLoginPath(true);
    }
  }, [location.pathname]); // Only re-run when location.pathname changes

  const navigate = useNavigate();
  return (
    <>
      {/* header section start */}
      <div className="header_section">
        <div className="container">
          <div className="containt_main">
            {/* <div id="mySidenav" className="sidenav">
              <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">
                ×
              </a>
              <a href="index.html">Home</a>
              <a href="fashion.html">Fashion</a>
              <a href="electronic.html">Electronic</a>
              <a href="jewellery.html">Jewellery</a>
            </div> */}
            <span
              className="toggle_icon"
              //  onClick="openNav()"
            >
              <img src="/images/toggle-icon.png" alt="toggle_img" />
            </span>
            <DropdownButton
              id="dropdown-basic-button"
              variant="secondary"
              title="All Category"
            >
              <Dropdown.Item>Fashion</Dropdown.Item>
              <Dropdown.Item>Electronic</Dropdown.Item>
              <Dropdown.Item>Jewellery</Dropdown.Item>
            </DropdownButton>
            <div className="main">
              {/* Another variation with a button */}
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search this blog"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    style={{
                      backgroundColor: "#f26522",
                      borderColor: "#f26522",
                    }}
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>
            </div>

            <div className="header_box">
              {/* <div className="lang_box ">
                  <a
                    href="#"
                    title="Language"
                    className="nav-link"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <img
                      src="../../../public/images/flag-uk.png"
                      alt="flag"
                      className="mr-2 "
                      title="United Kingdom"
                    />{" "}
                    English <i className="fa fa-angle-down ml-2" aria-hidden="true" />
                  </a>
                  <div className="dropdown-menu ">
                    <a href="#" className="dropdown-item">
                      <img
                        src="../../../public/images/flag-france.png"
                        className="mr-2"
                        alt="flag"
                      />
                      French
                    </a>
                  </div>
                </div> */}

              {loginPath ? (
                ""
              ) : (
                <div className="login_menu">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <Button
                        className="menu_button"
                        variant="secondary"
                        onClick={() => {
                          navigate("/mycart");
                        }}
                      >
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className="padding_10">Cart</span>
                        <div className="cart-num">{cartItemLength}</div>
                      </Button>
                    </li>
                    <li>
                      <Button
                        className="menu_button"
                        variant="secondary"
                        onClick={() => {
                          navigate("/login");
                        }}
                      >
                        <FontAwesomeIcon icon={faUser} />
                        <span className="padding_10">Login</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* header section end */}
      {/* {loginPath ? (
        ""
      ) : (
        <div className="total">
          Total Amount: ${totalAmount}
          <Button className="payment_btn">Proceed to Payment</Button>
        </div>
      )} */}
    </>
  );
};
export default HeaderSection;
