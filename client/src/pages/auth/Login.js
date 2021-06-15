import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearErrors, loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alertActions";

function Login({ authReducer: { error, isAuthenticated } }) {
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error === "Invalid Credentials" || error === "Invalid Password") {
      dispatch(setAlert(error, "danger"));
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      dispatch(setAlert("All fields are required", "danger"));
    } else {
      dispatch(
        loginUser({
          email,
          password,
        })
      );
    }
  };

  return (
    <div className="">
      <div className="row d-flex justify-content-center">
        <form
          className="col-lg-4 col-md-6 col-sm-12 p-1 bg-light py-4"
          onSubmit={onSubmit}
        >
          <h3 className="mb-3 signInText">Login </h3>
          {/* Sign in with google*/}
          {/* <button
            id="loginGoogle"
            style={{ width: "30%", margin: "auto" }}
            value="Google"
            className="btn btn-block googleBtn mb-3"
          >
            <i className="fab fa-google fa-lg"></i>
          </button> 

          <p className="mb-3">or user your account</p>*/}

          {/* Login Email */}
          <div
            style={{ width: "70%", margin: "auto" }}
            className="input-group mb-3"
          >
            <div className="input-group-prepend">
              <span
                style={{ border: "none", background: "none" }}
                className="input-group-text"
                id="basic-addon1"
              >
                <i className="fas fa-envelope fa-lg"></i>
              </span>
            </div>
            <label className="sr-only" htmlFor="emailLogin">
              Username
            </label>
            <input
              id="emailLogin"
              className="form-control customInput"
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={onChange}
              autoComplete="email"
              required
            />
          </div>
          {/* Login Password */}
          <div
            style={{ width: "70%", margin: "auto" }}
            className="input-group mb-4"
          >
            <div className="input-group-prepend">
              <span
                style={{ border: "none", background: "none" }}
                className="input-group-text"
                id="basic-addon1"
              >
                <i className="fas fa-lock fa-lg"></i>
              </span>
            </div>
            <label className="sr-only" htmlFor="passwordLogin">
              Username
            </label>
            <input
              id="passwordLogin"
              className="form-control customInput"
              type="password"
              name="password"
              placeholder="Your password"
              value={password}
              onChange={onChange}
              autoComplete="current-password"
              required
            />
          </div>

          {/* Login Button */}
          <input
            style={{ width: "50%", margin: "auto" }}
            type="submit"
            value="LOGIN"
            className="btn btn-block loginRegisterBtn mb-3"
          />
          {/* Link to Sign Up  */}
          <div className=" row d-flex justify-content-center">
            <div className="col-sm-12 col-md-3">
              <Link className="loginOptionsLink" to="/register">
                Not a user? <br /> Sign up
              </Link>
            </div>
            <div className="col-sm-12 col-md-3">
              <p className="m-0">or</p>
            </div>
            <div className="col-sm-12 col-md-3">
              <Link className="loginOptionsLink" to="/guest">
                Use as guest
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
});

export default connect(mapStateToProps)(Login);
