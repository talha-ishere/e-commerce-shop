import { useNavigate } from "react-router-dom";
import "./LogoSection.css";
import "./responsive.css";

const LogoSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <>
        {/* logo section start */}
        <div className="logo_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="logo">
                  <img
                    src="/images/logo.png"
                    className="logog"
                    alt="img"
                    onClick={() => {
                      navigate("/");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* logo section end */}
      </>
    </>
  );
};

export default LogoSection;
