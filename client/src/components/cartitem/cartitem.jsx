import React, { Component } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../../features/cart/cartSlice";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import "./cartitem.css";
import pc from "../../assets/pc/pc1.jpg";


export default function Cartitem() {
  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.cart);
  const [index, setIndex] = useState(1);

  return (
    <>
      <div className="item">
        <div className="item-computer">
          {/* <p>Tech Havens</p> */}
          <div className="item-pt">
            <img className="img-pc" src={pc} alt="pc"/>
            <h1 className="item-title">
              Sistem PC Gaming RGB cu procesor Intel® Core™ i5 3470 pana la
              3.60GHz, 8GB Ram, SSD 240 Gb, placa video GT 1030 2Gb Gddr5
            </h1> 
          </div>
          

          <div className="cart-item">
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
          </div>
          
      </div>
    </>
  );
}