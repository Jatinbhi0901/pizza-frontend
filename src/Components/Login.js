import React from "react";
import style from "../css/login.module.css";
import loginimage from "../Images/main.jpg";
import {Link} from "react-router-dom";

function Login() {
  return (
    <>
      <section className={style.login}>
        <div className={style.container1}>
          <div className={style.Box1}>
            <img src={loginimage} alt="" width="500px" height="480px" />
          </div>

          <div className={style.Box2}>
            <h1>Sign In</h1>

            <form action="">

              <input
                type="email"
                className={style.email}
                placeholder="Enter E-mail"
              />
            </form>

            <form action="">
              <input
                type="password"
                className={style.password}
                placeholder="Enter Password"
              />
            </form>

            <form action="">
              <input type="button" className={style.btn} value="Submit" />
            </form>

            <p className={style.abc}>
              <a href="#">Forget Password</a>
            </p>

            <p className={style.abc}>
              <Link to="/register">Don't have account? Create account</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
