import "./Footer.css";
import "./responsive.css";

// import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
  return (
    <>
      {/* footer section start */}
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="footer_logo">
            <br /> <br />
            <br />
            <a href="index.html">
              <img src="images/footer-logo.png" />
            </a>
          </div>
          <br />

          <div className="input_bt">
            <input type="text" className="mail_bt" placeholder="Your Email" name="Your Email" />
            <span className="subscribe_bt" id="basic-addon2">
              <button className="subscribe-button">Subscribe</button>
            </span>
          </div>
          <div className="footer_menu">
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
          <div className="location_main">
            Help Line Number : <button className="list-button">+1 1800 1200 1200</button>
          </div>
        </div>
      </div>
      {/* footer section end */}
    </>
  );
};
export default Footer;
