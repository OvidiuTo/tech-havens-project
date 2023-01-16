import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import "./signIn.css";

import { useSelector, useDispatch } from "react-redux";

export default function Signin() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/homepage`;
    navigate(path);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pass, setPass] = useState(false);

  const dispatch = useDispatch();

  const handlePass = () => {
    setPass(!pass);
  };

  const Login = () => {
    const URL = "http://localhost:5555/api/authenticate";

    const body = {
      email: email,
      password: password,
    };

    if (email === "" || password === "") {
      alert("Plase fill all the required fields!");
    }

    const params = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(URL, params)
      .then(responseReceived)
      .then(processData)
      .catch(errorMessage);
  };

  const responseReceived = (response) => {
    if (response.ok) {
      alert("Successfully loged in!");
      console.log("wow");
      routeChange;
    } else {
      alert("Failed to log in!");
    }

    return response.json();
  };

  const processData = (data) => {
    localStorage.setItem("userId", data.id);
    localStorage.setItem("userEmail", data.email);
    localStorage.setItem("userPassword", data.password);
    sessionStorage.setItem("userId", data.id);
    sessionStorage.setItem("userEmail", data.email);
    sessionStorage.setItem("userPassword", data.password);
    console.log(data.id);
    console.log(data.email);
    console.log(data.password);

    setEmail(data.email);
    setPassword(data.password);

    routeChange();
  };

  const errorMessage = (error) => {
    alert(error.message);
  };

  return (
    <div className="signIn-image">
      <div className="signIn-div">
        <h1 className="title">Tech Haven</h1>
        <div className="signIn-content">
          <div className="input-div">
            <input
              className="input-table"
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="input-div">
            <input
              className="input-table"
              type={pass ? `text` : `password`}
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="show-password">
            <input type="checkbox" onClick={handlePass} />
            Show password
          </div>
          <br />
          <button className="signIn-button" onClick={Login}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}
