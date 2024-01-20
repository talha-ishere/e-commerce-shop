import "./TotalAmount.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TotalAmount = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <div className="total">
        Total Amount: ${totalAmount}
        <Button className="payment_btn">Proceed to Payment</Button>
      </div>
    </>
  );
};
export default TotalAmount;
