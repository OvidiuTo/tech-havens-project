import Navbar from "../navigationBar/Navbar";
import "./profile.css";
const userId = sessionStorage.getItem("userId");
const userEmaik = sessionStorage.getItem("userEmail");
const userPassword = sessionStorage.getItem("userPassword");

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile-image">
        <div className="data-card">
          <div className="data">
            <p>Email : {userEmaik}</p>
          </div>
          <div className="data">
            <p>Password : {userPassword}</p>
          </div>
          <div className="data">
            <p>User ID</p>
            <p>{userId}</p>
          </div>
          <div className="data">
            <p>Status : ADMIN</p>
          </div>

          <div className="data">
            <p>Membership</p>
            <p>Standard</p>
          </div>

          <div className="data">
            <p>Coupon code</p>
            <p>J87v00dX</p>
          </div>

          <div className="data">
            <p>Last month orders</p>
            <p>4</p>
          </div>
        </div>

        {/* <Link onClick={handleRegisterForm}>Click to sign-up</Link>

        <div className={register ? "name" : null}></div>

        <div className={register ? "ceva1" : "cevaa2"}>
          <div>
            <input
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
              id="secondPassword"
              placeholder="Confirm Password"
              type={showPass ? `password` : `text`}
              onChange={(event) => {
                setSecondPassword(event.target.value);
              }}
            />
          </div>

          <div>
            <input type="checkbox" onClick={handleVisibility} />
            <p>Show password</p>
          </div>

          <div>
            <button onClick={createAccount}>REGISTER</button>
            <button onClick={handleRegisterForm}>CLOSE</button>
            <p className=" text-[#ffffff] font-bold inline-block ">
              To login in your account, click&nbsp;
              <Link to="/Signin">here!</Link>
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}
