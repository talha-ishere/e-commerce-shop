// import { useParams } from "react-router-dom";
import HeaderSection from "../HomePage/HeaderSection";
import HeaderTop from "../HomePage/HeaderTop";
import LogoSection from "../HomePage/LogoSection";
import "./ProductDetails.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import TotalAmount from "../HomePage/TotalAmount";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const item = useSelector((state) => state.productDetails.product);

  const [quantityValue, setQuantityValue] = useState(1);

  const [color, setColor] = useState("Default");

  const colorChangeHandler = (e) => {
    setColor(e.target.value);
  };
  // const { productId } = useParams();
  // const fashionItems = [
  //   {
  //     id: 1,
  //     name: "Man T-shirt",
  //     price: 30,
  //     imageSrc: "/images/tshirt-img.png",
  //     description:
  //       "P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
  //     Brand: "Polo",
  //     Rating: 3.3,
  //     category: "Fashion",
  //   },
  //   {
  //     id: 2,
  //     name: "Man -shirt",
  //     price: 40,
  //     imageSrc: "/images/dress-shirt-img.png",
  //     description:
  //       "P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
  //     Brand: "Polo",
  //     Rating: 3.3,
  //     category: "Fashion",
  //   },
  //   {
  //     id: 3,
  //     name: "Woman Scart",
  //     price: 50,
  //     imageSrc: "/images/women-clothes-img.png",
  //     description:
  //       "P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
  //     Brand: "Polo",
  //     Rating: 3.3,
  //     category: "Fashion",
  //   },
  //   // Add more fashion items as needed
  // ];
  // const product = fashionItems.find((p) => p.id === parseInt(productId));
  // console.log(product);
  return (
    <>
      <HeaderTop></HeaderTop>
      <LogoSection></LogoSection>
      <HeaderSection></HeaderSection>
      <TotalAmount></TotalAmount>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {item ? (
        <main className="product_container">
          {/* Left Column / Headphones Image */}
          <div className="left-column">
            <div className="product_img">
              <img src={item.imageSrc} alt="" height={"550px"} />
            </div>
          </div>
          {/* Right Column */}
          <div className="right-column">
            {/* Product Description */}
            <div className="product-description">
              <span>{item.category}</span>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
            {/* Product Configuration */}
            <div className="product-configuration">
              {/* Product Color */}
              <div className="product-color">
                <span>Color: " "{color}</span>
                <div className="color-choose">
                  <div>
                    <input
                      data-image="red"
                      type="radio"
                      id="red"
                      name="color"
                      defaultChecked=""
                      value="Red"
                      onChange={colorChangeHandler}
                    />
                    <label htmlFor="red">
                      <span />
                    </label>
                  </div>
                  <div>
                    <input
                      data-image="blue"
                      type="radio"
                      id="blue"
                      name="color"
                      value="Blue"
                      onChange={colorChangeHandler}
                    />
                    <label htmlFor="blue">
                      <span />
                    </label>
                  </div>
                  <div>
                    <input
                      data-image="black"
                      type="radio"
                      id="black"
                      name="color"
                      value="Black"
                      onChange={colorChangeHandler}
                    />
                    <label htmlFor="black">
                      <span />
                    </label>
                  </div>
                </div>
              </div>
              {/* Cable Configuration */}
              <div className="cable-config">
                <span>Quantity</span>
                <div className="cart_quantity">
                  <ul>
                    <li>
                      <Button
                        className="cart_quantity_button"
                        onClick={() => {
                          setQuantityValue(
                            quantityValue > 1 ? quantityValue - 1 : 1
                          );
                        }}
                      >
                        -
                      </Button>
                    </li>
                    <li>
                      <input
                        className="cart_quantity_input"
                        type="number"
                        value={quantityValue}
                        disabled
                      ></input>
                    </li>
                    <li>
                      <Button
                        className="cart_quantity_button"
                        onClick={() => {
                          setQuantityValue(quantityValue + 1);
                        }}
                      >
                        +
                      </Button>
                    </li>
                  </ul>
                </div>
                {/* <a href="#">How to configurate your headphones</a> */}
              </div>
            </div>
            <div className="cable-config">
              <h6>
                Unit Price : {""}${item.price}
              </h6>
            </div>
            {/* Product Pricing */}
            <div className="product-price">
              <span>Total Price : {item.price * quantityValue} $</span>

              <Button
                className="cart-btn"
                onClick={() => {
                  const newItem = {
                    ...item,
                    color,
                    quantityValue,
                  };
                  // console.log(newItem);
                  dispatch(addToCart(newItem));
                }}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </main>
      ) : (
        <h1 className="cart_heading">Sorry... No Product Found</h1>
      )}
    </>
  );
};
export default ProductDetails;
