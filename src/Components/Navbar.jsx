import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const products = useSelector((state) => state);

  const cartAdded = products.filter((product) => product.cartAdded);

  return (
    <div>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar ">
          <h1 className="text-white">CART ADD REmove with REDUX</h1>
          <div className="flex gap-4">
            <Link to="/" href="#home" className="navHome" id="lws-home">
              {" "}
              Home{" "}
            </Link>
            <Link to="/cart" href="cart.html" className="navCart" id="lws-cart">
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{cartAdded.length}</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
