import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import CartItemSHow from "./CartItemSHow";
import BillDetails from "./BillDetails";

const Cart = () => {
  const products = useSelector((state) => state);
  const cartSelectedPro = products.filter((product) => product.cartAdded);
  return (
    <div>
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>

          <div className="cartListContainer">
            <div className="space-y-6">
              {/* Cart Item */}
              {cartSelectedPro.map((product) => (
                <CartItemSHow key={product.id} product={product}></CartItemSHow>
              ))}
            </div>

            {/* Bill Details */}

            <BillDetails></BillDetails>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
