import "./FashionSection.css";
import "../responsive.css";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../cart/cartSlice";
import { addToDetails } from "../../product_details/productDetailsSlice";

const JewellerySection = () => {
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

  const jewelleryItems = [
    { id: 7, name: "jumkas", price: 100, imageSrc: "/images/jhumka-img.png" },
    {
      id: 8,
      name: "Necklaces",
      price: 100,
      imageSrc: "/images/Neklesh-img.png",
    },
    { id: 9, name: "kangans", price: 100, imageSrc: "/images/kangan-img.png" },
    // Add more fashion items as needed
  ];
  return (
    <div className="fashion_section">
      <h1 className="fashion_taital">Jewellery</h1>
      <Carousel id="main_slider" className="slide" interval={null}>
        {jewelleryItems.map(
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
                      {jewelleryItems
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
export default JewellerySection;
