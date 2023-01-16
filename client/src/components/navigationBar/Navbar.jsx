import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar(props) {
  return (
    <nav className="navigation-bar-main">
      <div class="logo">Tech Havens</div>

      <ul>
        <li>
          <a href="/homepage">Home</a>
        </li>
        <li>
          <a href="/about-us">About us</a>
        </li>
        <li>
          <a href="/sign-in">Log In</a>
        </li>
        <li>
          <a href="/sign-up">Register</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
      </ul>
    </nav>
  );
}
