import { Button } from "react-bootstrap";
import HeaderSection from "../HomePage/HeaderSection";
import HeaderTop from "../HomePage/HeaderTop";
import LogoSection from "../HomePage/LogoSection";
import "./MyProfile.css";

const MyProfile = () => {
  return (
    <>
      <HeaderTop></HeaderTop>
      <LogoSection></LogoSection>
      <HeaderSection></HeaderSection>
      <div className="page-content page-container">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-10 col-md-5">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-15">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3"
                          className="user_img"
                          alt="User-Profile"
                        />
                      </div>
                      <br />
                      <h4 className="f-w-600">Hembo Tingor</h4>

                      <br />
                      <label className="input_btn">
                        <input
                          type="file"
                          className="input_img"
                          display="none"
                        ></input>{" "}
                        CLick to Chose Image
                      </label>
                      <br />
                      <br />
                      <Button className="input_btn">Change Image</Button>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h4 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Personel Information
                      </h4>
                      <div className="row">
                        <div className="col-sm-6">
                          <h6 className="m-b-10 f-w-600">User Name :</h6>
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="input_name"
                            placeholder="Ali99"
                            disabled
                          ></input>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-sm-6">
                          <h6 className="m-b-10 f-w-600">Email :</h6>
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="input_email"
                            placeholder=" rntng@gmail.com"
                          ></input>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-sm-6">
                          <h6 className="">Phone :</h6>
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="input_phone"
                            placeholder="00000009999"
                          ></input>
                        </div>
                      </div>
                      <h4 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        Password
                      </h4>
                      <div className="row">
                        <div className="col-sm-6">
                          <h6 className="">Old Password :</h6>
                        </div>
                        <div className="col-sm-6">
                          <input className="input_address"></input>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <h6 className="">New Password :</h6>
                        </div>
                        <div className="col-sm-6">
                          <input className="input_address"></input>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <h6 className="">Confirm Password :</h6>
                        </div>
                        <div className="col-sm-6">
                          <input className="input_address"></input>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6"></div>
                        <div className="col-sm-6">
                          <Button className="confirm_btn">
                            Confirm and Submit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
