import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-awesome-lightbox/build/style.css";
import "./cart.css";
import Navbar from "../navigationBar/Navbar";
import Cartitem from "../cartitem/cartitem";

export default function Cart() {
  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.cart);
  const [index, setIndex] = useState(1);

  return (
    <>
      <Navbar />
      <Cartitem />
      <Cartitem />
      <div className="Purchase-btn-div">
        <button>Purchase</button>
      </div>
    </>
  );
}
