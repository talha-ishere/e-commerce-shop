import "./FashionSection.css";
import "../responsive.css";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../cart/cartSlice";
import { addToDetails } from "../../product_details/productDetailsSlice";

// import "bootstrap/dist/css/bootstrap.min.css";

const FashionSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detailBtnHandler = (item) => {
    navigate(`/product_details/${item.name}`);
    dispatch(addToDetails(item));
  };

  const cartHandler = (item) => {
    let quantityValue = 1;
    let color = "Default";
    let newItem = {
      ...item,
      color,
      quantityValue,
    };
    dispatch(addToCart(newItem));
  };

  const fashionItems = [
    {
      id: 4,
      name: "Man T-shirt",
      price: 30,
      imageSrc: "/images/tshirt-img.png",
      description:
        "P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      Brand: "Polo",
      Rating: 3.3,
      category: "Fashion",
    },
    {
      id: 5,
      name: "Man -shirt",
      price: 30,
      imageSrc: "/images/dress-shirt-img.png",
      description:
        "P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      Brand: "Polo",
      Rating: 3.3,
      category: "Fashion",
    },
    {
      id: 6,
      name: "Woman Scart",
      price: 30,
      imageSrc: "/images/women-clothes-img.png",
      description:
        "P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      Brand: "Polo",
      Rating: 3.3,
      category: "Fashion",
    },
    // Add more fashion items as needed
  ];

  return (
    <div className="fashion_section">
      <h1 className="fashion_taital">Man &amp; Woman Fashion</h1>
      <Carousel id="main_slider" className="slide" interval={null}>
        {fashionItems.map(
          (item, index) =>
            // Wrap every third item in a new Carousel.Item
            index % 3 === 0 && (
              <Carousel.Item
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <Container>
                  <div className="fashion_section_2">
                    <Row>
                      {fashionItems
                        .slice(index, index + 3) // Get the next three items
                        .map((item, subIndex) => (
                          <Col lg={4} sm={4} key={subIndex}>
                            <div className="box_main_fashion">
                              <h4 className="fashion_text">{item.name}</h4>
                              <p className="fashion_price_text">
                                Price{" "}
                                <span style={{ color: "#262626" }}>
                                  ${item.price}
                                </span>
                              </p>
                              <div className="fashion_img">
                                <img
                                  height={"300px"}
                                  width={"250px"}
                                  src={item.imageSrc}
                                  alt={item.name}
                                />
                              </div>
                              <div className="btn_main">
                                <div className="buy_bt">
                                  <Button
                                    className="details_btn"
                                    onClick={() => {
                                      detailBtnHandler(item);
                                    }}
                                  >
                                    Details
                                  </Button>
                                </div>
                                <div className="seemore_bt">
                                  <Button
                                    className="cart_btn"
                                    onClick={() => cartHandler(item)}
                                  >
                                    Add To Cart
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </Col>
                        ))}
                    </Row>
                  </div>
                </Container>
              </Carousel.Item>
            )
        )}
      </Carousel>
    </div>
  );
};

export default FashionSection;
