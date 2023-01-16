import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../../features/cart/cartSlice";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import "./hero.css";

import Navbar from "../navigationBar/Navbar";

export default function Hero() {
  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.cart);
  const [index, setIndex] = useState(1);

  return (
    <>
      <Navbar />
      <div className="item">
        <div className="item-computer">
          {/* <p>Tech Havens</p> */}

          <h1 className="item-title">
            Sistem PC Gaming RGB cu procesor Intel® Core™ i5 3470 pana la
            3.60GHz, 8GB Ram, SSD 240 Gb, placa video GT 1030 2Gb Gddr5
          </h1>

          <p className="description">
            Your ideas deserve the best: It packs in all of the tools you need
            to realize your most creative ideas. With the 15.6 inch display you
            get beautiful, brilliant colors. It has the latest Intel processor
            and graphics so it can handle what you throw at it. Create
            seamlessly: Quickly transfer any file almost any device to your PC
            without cables, clouds, thumb drives, or hassle with HP QuickDrop.
            While Duet for HP opens up your workspace and workflow by connecting
            your tablet, phone, or another PC as a second display. Show your
            best self: When you go live, you want to look your best. So turn it
            on for the 5MP camera with Auto Frame, and AI noise reduction. It
            also features a physical camera shutter for privacy, because when
            you’re on, you’re on, and when you’re not, you’re not. Because
            little things make a big difference: Containing ocean-bound plastic,
            recycled aluminum and EPEAT Gold and ENERGY STAR ratings, make a
            difference, along with a great choice.
          </p>

          <div className="price">1.595,00 Lei</div>

          <div className="button-div">
            <button
              onClick={() => {
                dispatch(decrease());
              }}
            >
              {" "}
              -
            </button>
            {amount}
            <button
              onClick={() => {
                dispatch(increase());
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="item-photo">
          <div className="image-holder"></div>
        </div>
      </div>
    </>
  );
}
