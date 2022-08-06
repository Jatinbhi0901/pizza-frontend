import style from "../css/register.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import registerschema from "../Validations/RegisterValidation";
import axios from "axios";

function Register() {
  const history = useNavigate();
  function ok(a) {
    if (a) {
      history("/login");
    }
  }

  async function RegisterUser(e) {
    e.preventDefault();
    let formData = {
      email: e.target[0].value,
      password: e.target[1].value,
      passwordConfirmation: e.target[2].value,
      // cheackbox: e.target[3].value
    };
    const isValid = await registerschema.isValid(formData);

    if (isValid) {
      const res = await axios.post(
        "http://localhost:5000/register/newRegister",
        {
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.passwordConfirmation,
        }
      );
      console.log(res);
      swal({
        title: "Registration Successful",
        text: "Good job!",
        icon: "success",
        button: "Ok",
      }).then(ok);
      console.log(formData);
    } else {
      swal({
        title: "Registration Failed",
        text: "Atleast one capital letter and one special character for password",
        icon: "error",
        button: "Ok",
      });
      console.log(formData);
    }
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
          <form onSubmit={RegisterUser}>
            <div className={style.Box2}>
              <h1 className={style.a1}>Registration </h1>
              <h4 className={style.heading}>Email Address</h4>

              <input
                type="email"
                className={style.email}
                placeholder="Enter Email"
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
                <input type="checkbox" id="agree" checked={true} readOnly />
                <label htmlFor="agree">I agree, all terms and Conditions</label>
              </div>

              <button className={style.btn} type="submit" onClick={ok}>
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
