import { Link } from "react-router-dom";

function OrderConfirmationPage() {
  return (
    <dive>
      <h1> 😎 Order Placed Successfully!</h1>

      <p> Your order has been received.</p>

      <Link to="/products">
        <button>continue Shopping </button>
      </Link>
    </dive>
  );
}

export default OrderConfirmationPage;
