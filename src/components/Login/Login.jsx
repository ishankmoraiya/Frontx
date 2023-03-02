import React from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { login } from "../../redux/actions/userActions";
import "./Login.scss";

const Login = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const dispatch = useDispatch();

  //   const loginHandler = (e) => {
  //     e.preventDefault();
  //     dispatch(login(email, password));
  //   };
  return (
    <div className="login-div">
      <div className="login">
        <form className="loginform">
          <Link to="/register" className="signup2">
            <p>
              Don't have an account? <span>Register</span>{" "}
            </p>
          </Link>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Login
          </h2>
          <p className="head">Welcome Back! Please enter your details.</p>
          <p className="email">Email</p>
          <input
            type="email"
            placeholder="email@example.com"
            required
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <p className="email">Password</p>
          <input
            type="password"
            placeholder="Enter Your Password"
            required
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent:"space-between" }}>
            <Link to="/reset" className="password">
              <p>Forgot Your Password?</p>
            </Link>
            <Link to="/signup" className="password">
              <p>Create an account?</p>
            </Link>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
      <div className="background">
        <div>
          <img src="/login.png" alt="login" />
          <img src="/auth.png" alt="auth" />
        </div>
        <div>
          <p className="head-1">Login Here</p>
          <p className="head-2">Sign in to explore more!</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
