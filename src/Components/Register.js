import style from "../css/register.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Register() {
  const history = useNavigate();
  function ok(a) {
    if (a) {
      history("/login");
    }
  }

  function handleclick(e) {
    e.preventDefault();
    swal({
      title: "Registration Successful",
      text: "Good job!",
      icon: "success",
      button: "Ok",
    }).then(ok);
  }

  return (
    <>
      {
        //put both element in one frame(section)
      }
      <section>
        <div className={style.container2}></div>
      </section>

      <section className={style.login}>
        <div className={style.container1}>
          <form action="">
            <div className={style.Box2}>
              <h1 className={style.a1}>Registration </h1>
              <h4 className={style.heading}>Email Address</h4>

              <input
                type="email"
                className={style.email}
                placeholder="Enter Your Email"
              />

              <h4 className={style.heading}>Password</h4>
              <input
                type="password"
                className={style.password}
                placeholder="Enter Password"
              />

              <h4 className={style.heading}>Confirm Password</h4>
              <input
                type="password"
                className={style.cpassword}
                placeholder="Enter Confirm Password"
              />

              <div className={style.cheak}>
                <input type="checkbox" id="agree" />
                <label htmlFor="agree">I agree, all terms and Conditions</label>
              </div>

              <button className={style.btn} onClick={handleclick}>
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
