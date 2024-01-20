import React from "react";
import "./HeaderTop.css";
import "./responsive.css";

const HeaderTop = () => {
  return (
    <>
      <>
        {/* header top section start */}
        <div className="container">
          <div className="header_section_top">
            <div className="row">
              <div className="col-sm-12">
                <div className="custom_menu">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <button className="list-button">Best Seller</button>
                    </li>
                    <li>
                      <button className="list-button">Gift Ideas</button>
                    </li>
                    <li>
                      <button className="list-button">New Releases</button>
                    </li>
                    <li>
                      <button className="list-button">Today's Deals </button>
                    </li>
                    <li>
                      <button className="list-button">Customer Service</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header top section start */}
      </>
    </>
  );
};

export default HeaderTop;
