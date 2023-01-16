import { useState } from "react";
import { Link } from "react-router-dom";
import "./signUp.css";
import { useSelector, useDispatch } from "react-redux";

export default function Signup() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const userId = sessionStorage.getItem("userId");

  const dispatch = useDispatch();

  const handleVisibility = () => {
    setShowPass(!showPass);
  };

  const handleLogin = () => {
    setRegister(!register);
    setLogin(!login);
  };

  const handleRegisterForm = () => {
    setRegister(!register);
  };

  const getUserDetails = () => {
    const URL = "http://localhost:5555/api/authenticate";

    const body = {
      firstName: firstName,
      lastName: lastName,
    };

    const params = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(URL, params).then(received).then(receivedData).catch(raisedError);

    const received = (response) => {
      if (!response.ok) {
        alert("Something went wrong!");
      }
    };

    const receivedData = (data) => {
      localStorage.setItem("userId", data.id);
      localStorage.setItem("userEmail", data.email);

      sessionStorage.setItem("userId", data.id);
      sessionStorage.setItem("userEmail", data.email);
      setFirstName(data.firstName);
      setLastName(data.lastName);
    };

    const raisedError = (e) => {
      alert(e.message);
    };
  };

  const createAccount = () => {
    if (!firstName || !lastName || !email || !password || !secondPassword) {
      alert("You must fill all the required fields!");
    }

    const URL = "http://localhost:5555/api/register";
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      secondPassword: secondPassword,
    };

    const params = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(URL, params).then(requestFinished).catch(raisedError);
    console.log("1245125125");
  };

  const requestFinished = (response) => {
    if (!response.ok) {
      ("Something went wrong!");
      return response.json();
    } else {
      alert("Your account has been successfully created!");
    }
  };

  const raisedError = (error) => {
    alert(error.message);
  };

  return (
    <>
      {/* <div className={register ? "name" : null}></div> */}

      <div className="signUp">
        <div className="spacer"></div>
        <div>
          <input
            className="input-table"
            id="firstName"
            placeholder="First Name"
            type="text"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </div>

        <div>
          <input
            className="input-table"
            id="lastName"
            placeholder="Last Name"
            type="text"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            className="input-table"
            id="email"
            placeholder="Email"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            className="input-table"
            id="password"
            placeholder="Password"
            type={showPass ? `password` : `text`}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            className="input-table"
            id="secondPassword"
            placeholder="Confirm Password"
            type={showPass ? `password` : `text`}
            onChange={(event) => {
              setSecondPassword(event.target.value);
            }}
          />
        </div>

        <div className="show-pass">
          <input type="checkbox" onClick={handleVisibility} />
          Show password
        </div>

        <div className="register">
          <button onClick={createAccount}>REGISTER</button>

          <p className=" text-[#ffffff] font-bold inline-block ">
            To login in your account, click&nbsp;
            <Link to="/sign-in">here!</Link>
          </p>
        </div>
      </div>
    </>
  );
}
