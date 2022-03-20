
import style from "../css/register.module.css";
import React from "react";
import {useNavigate} from "react-router-dom"




function Register() {
  const history=useNavigate()
    function handleclick(){
        history("/personalinfo")
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
          <div className={style.Box2}>
            <h1 className={style.a1}>Registration </h1>
            <h4>Email Address</h4>
            <form action="">
              <input
                type="email"
                className={style.email}
                placeholder="Enter Your Email"
              />
            </form>

            <h4>Password</h4>
            <form action="">
              <input
                type="password"
                className={style.password}
                placeholder="Enter Password"
              />
            </form>

            <h4>Confirm Password</h4>
            <form action="">
              <input
                type="cpassword"
                className={style.cpassword}
                placeholder="Enter Confirm Password"
              />
            </form>

            <div className={style.cheak}>
              <input type="checkbox" id="agree" />
              <label for="agree">I agree, all terms and Conditions</label>
            </div>

            <button className={style.btn}onClick={handleclick}>Next</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
