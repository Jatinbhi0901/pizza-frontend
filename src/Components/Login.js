import React from "react";
import style from "../css/login.module.css";
import loginimage from "../Images/main.jpg";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import loginschema from "../Validations/LoginValidation";

function Login() {
  const history = useNavigate();
  function match() {
    history("/homepage");
  }
  async function CreateUser(event) {
    event.preventDefault();
    let formData = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    const isValid = await loginschema.isValid(formData);
    if (isValid) {
      swal({
        title: "Login Successful",
        text: "Good job!",
        icon: "success",
        button: "Ok",
      }).then(match);
      console.log(formData);
    } else {
      swal({
        title: "Invalid Credentials",
        icon: "error",
        button: "Ok",
      });
      console.log(formData);
    }
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

            <form onSubmit={CreateUser}>
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

              <button className={style.btn} type="submit">
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
