import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import HeaderTop from "../HomePage/HeaderTop";
import LogoSection from "../HomePage/LogoSection";
import HeaderSection from "../HomePage/HeaderSection";
import { Button, Col, Row, Container } from "react-bootstrap";
import { deleteToCart } from "./cartSlice";
import TotalAmount from "../HomePage/TotalAmount";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemLength = useSelector((state) => state.cart.cartItems.length);

  // const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <HeaderTop></HeaderTop>
      <LogoSection></LogoSection>
      <HeaderSection></HeaderSection>
      <TotalAmount></TotalAmount>
      <h1 className="cart_heading">My Cart Items </h1>
      {/* <div className="total">Total Amount: ${totalAmount}</div> */}
      {cartItemLength === 0 ? (
        <h1 className="cart_heading">Sorry... No item in Cart</h1>
      ) : (
        <Container>
          <div>
            <Row>
              {cartItems.map((item, index) => (
                <Col key={index} lg={4} sm={2}>
                  <div className="cart_box_main">
                    <h4 className="cart_shirt_text">{item.name}</h4>
                    <p className="cart_price_text">
                      Unit Price
                      <span style={{ color: "#262626" }}>${item.price}</span>
                    </p>
                    <div className="cart_tshirt_img">
                      <img
                        src={item.imageSrc}
                        alt={item.name}
                        height={"145px"}
                      />
                    </div>
                    <p className="cart_price_text">
                      Quantity : {""}
                      <span style={{ color: "#262626" }}>
                        {item.quantityValue}
                      </span>
                    </p>
                    <p className="cart_price_text">
                      Color : {""}
                      <span style={{ color: "#262626" }}>{item.color}</span>
                    </p>
                    <p className="cart_price_text">
                      Total Price : {""}
                      <span style={{ color: "#262626" }}>
                        ${item.totalPrice}
                      </span>
                    </p>
                    <Button
                      className="cart_delete_button"
                      onClick={() => dispatch(deleteToCart(item))}
                    >
                      Delete From Cart
                    </Button>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      )}
    </>
  );
};

export default Cart;
