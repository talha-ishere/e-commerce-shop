import { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderSection from "../HomePage/HeaderSection";
import HeaderTop from "../HomePage/HeaderTop";
import LogoSection from "../HomePage/LogoSection";
// import {  } from "@fortawesome/free-regular-svg-icons";
const Login = (props) => {
  const [haveAcc, setHaveAcc] = useState(true);
  const [email, setEmail] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [password, setPassword] = useState("");
  const [emptyErr, setEmptyErr] = useState(false);
  const [invalidErr, setInvalidErr] = useState(false);

  //  SignUp Form Data
  const [signupUserName, setSignupUserName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const getSignupData = () => {
    if (signupUserName === "" || signupEmail === "" || signupPassword === "") {
      setEmptyErr(true);
    } else {
      console.log(signupUserName, signupEmail, signupPassword);
      setEmptyErr(false);
      setSignupUserName("");
      setSignupEmail("");
      setSignupPassword("");
      setCheckBox(false);
    }
  };

  const getLoginData = () => {
    if (email === "" || password === "") {
      setEmptyErr(true);
    } else {
      console.log(email, password, checkBox);
      setEmptyErr(false);
      setEmail("");
      setPassword("");
      setCheckBox(false);
    }
  };
  return (
    <>
      <HeaderTop></HeaderTop>
      <LogoSection></LogoSection>
      <HeaderSection isActive={props.isActive}></HeaderSection>

      {haveAcc ? (
        <section className="register-account">
          <div className="signform">
            <div className="left">
              <button
                style={{ float: "right", marginRight: 35, fontSize: "0.9em" }}
                className="bts-a"
                onClick={() => {
                  setHaveAcc(!haveAcc);
                }}
              >
                Don't have an account? Sign up!
              </button>
              <div className="bts">
                <button className="fblogin social">
                  {/* <FontAwesomeIcon icon={} /> */}
                  <span>Sign in with Facebook</span>
                </button>
                <button className="twlogin social">
                  <i className="fa fa-twitter" />
                  <span>Sign in with Twitter</span>
                </button>

                <button className="gplogin social">
                  <i className="fa fa-google-plus" />
                  <span>Sign in with Google</span>
                </button>
              </div>
            </div>
            <div className="right">
              <div className="headit">
                <h4>Login To Your Account</h4>
              </div>
              <div className="form">
                <form className="login-form" id="login-form">
                  <span className="span">Enter Email :</span>
                  <input
                    autoComplete="on"
                    value={email}
                    type="text"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Email"
                  />
                  <span className="span">Enter Password :</span>
                  <input
                    placeholder="Password"
                    value={password}
                    autoComplete="off"
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </form>
                {emptyErr ? (
                  <h6 className="empty_err">
                    Please Provide Email and Password
                  </h6>
                ) : (
                  ""
                )}
                {invalidErr ? (
                  <h6 className="empty_err">Invalid Email or Password</h6>
                ) : (
                  ""
                )}

                <input
                  className="chk_remember"
                  type="checkbox"
                  id="remember"
                  name="remember"
                  onChange={(val) => {
                    setCheckBox(val.target.checked);
                  }}
                />
                <span style={{ color: "#b6b6b6", fontSize: "0.9em" }}>
                  {" "}
                  Remember Me
                </span>
                <button className="subbt" type="submit" onClick={getLoginData}>
                  Submit
                </button>
                <br></br>

                <button className="btn_forgot_ps" href="#">
                  Forgot your password?
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="register-account">
          <div className="signform">
            <div className="left">
              <button
                style={{ float: "right", marginRight: 35, fontSize: "0.9em" }}
                className="bts-a"
                onClick={() => {
                  setHaveAcc(!haveAcc);
                }}
              >
                Already have Account click here to Sign in
              </button>
              <div className="bts">
                <button className="fblogin social">
                  {/* <FontAwesomeIcon icon={} /> */}
                  <span>Sign Up with Facebook</span>
                </button>
                <button className="twlogin social">
                  {/* <i className="fa fa-twitter" /> */}
                  <span>Sign Up with Twitter</span>
                </button>

                <button className="gplogin social">
                  {/* <i className="fa fa-google-plus" /> */}
                  <span>Sign Up with Google</span>
                </button>
              </div>
            </div>
            <div className="right">
              <div className="headit">
                <h4>Enter Details To SignUp</h4>
              </div>
              <div className="form">
                <form className="login-form" id="login-form" autoComplete="on">
                  <input
                    type="text"
                    value={signupUserName}
                    placeholder="User Name"
                    onChange={(e) => {
                      setSignupUserName(e.target.value);
                    }}
                  />
                  <input
                    type="email"
                    value={signupEmail}
                    placeholder="Email"
                    onChange={(e) => {
                      setSignupEmail(e.target.value);
                    }}
                  />
                  <input
                    type="password"
                    value={signupPassword}
                    placeholder="Password"
                    onChange={(e) => {
                      setSignupPassword(e.target.value);
                    }}
                  />
                </form>
                {emptyErr ? (
                  <h6 className="empty_err">Please Enter Details</h6>
                ) : (
                  ""
                )}
                {invalidErr ? (
                  <h6 className="empty_err">Invalid Email or Password</h6>
                ) : (
                  ""
                )}
                <button className="subbt" type="submit" onClick={getSignupData}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
