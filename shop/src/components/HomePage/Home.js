import FashionSection from "./ProductSections/FashionSecion";
import HeaderSection from "./HeaderSection";
import HeaderTop from "./HeaderTop";
import LogoSection from "./LogoSection";
import ElectronicSection from "./ProductSections/ElectronicSection";
import JewellerySection from "./ProductSections/JewellerySection";
import Footer from "./Footer";
import Copyright from "./Copyright";
import "./responsive.css";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import ItemErr from "./ItemErr";
import { itemExistFalse } from "../cart/cartSlice";
import TotalAmount from "./TotalAmount";

const Home = () => {
  const itemExist = useSelector((state) => state.cart.itemExist);

  // const [itemErr, setItemErr] = useState(itemExist);
  const dispatch = useDispatch();

  useEffect(() => {
    if (itemExist) {
      setTimeout(() => {
        dispatch(itemExistFalse());
      }, 3000); // 3 seconds
    }
  }, [itemExist, dispatch]);

  return (
    <div>
      {itemExist ? <ItemErr data={"Item Already Exist"}></ItemErr> : ""}
      <HeaderTop></HeaderTop>
      <br />
      <LogoSection></LogoSection>
      <br />
      <HeaderSection></HeaderSection>
      <TotalAmount></TotalAmount>
      <br />
      <br />
      <FashionSection></FashionSection>
      <br />
      <ElectronicSection></ElectronicSection>
      <br />
      <JewellerySection></JewellerySection>
      <br />
      <Footer />
      <br />
      <Copyright />
    </div>
  );
};

export default Home;
