import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./hero/hero";
import Signup from "./signUp/Signup";
import Signin from "./signIn/signIn";
import Profile from "./profile/Profile";
import AboutUs from "./aboutus/aboutUs";
import Cart from "./cart/cart";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/homepage" element={<Hero />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
