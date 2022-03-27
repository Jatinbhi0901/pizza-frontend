import React from "react";
import style from "../css/login.module.css";
import loginimage from "../Images/main.jpg";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Login() {
  const history = useNavigate();
  function match() {
    history("/homepage");
  }

  function handle(e) {
    e.preventDefault();
    swal({
      title: "Login Successful",
      text: "Good job!",
      icon: "success",
      button: "Ok",
    }).then(match);

    // swal({
    //   title: "Login Failed",
    //   icon: "error",
    //   button: "Ok",
    // })
  }

  return (
    <>
      <section className={style.login}>
        <div className={style.container1}>
          <div className={style.Box1}>
            <img src={loginimage} alt="" width="500px" height="480px" />
          </div>

          <div className={style.Box2}>
            <h1 className={style.sign}>Sign In</h1>

            <form action="">
              <input
                type="email"
                className={style.email}
                placeholder="Enter E-mail"
              />

              <input
                type="password"
                className={style.password}
                placeholder="Enter Password"
              />

              <button className={style.btn} onClick={handle}>
                Submit
              </button>
              <br></br>

              <p className={style.abc}>
                <Link to="">Forget Password</Link>
                <br></br>
                <br></br>
                <Link to="/register" className={style.reg}>
                  Don't have account? Create account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
