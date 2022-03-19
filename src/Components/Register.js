
import "../css/register.css";
import React from "react";




function Register() {
    function handleclick(){
        
    }




  return (
    <>
      {
        //put both element in one frame(section)
      }
      <section>
        <div className="container2"></div>
      </section>

      <section className="login">
        <div className="container1">
          <div className="Box2">
            <h1>Registration </h1>
            <h4>Email Address</h4>
            <form action="">
              <input
                type="email"
                className="email"
                placeholder="Enter Your Email"
              />
            </form>

            <h4>Password</h4>
            <form action="">
              <input
                type="password"
                className="password"
                placeholder="Enter Password"
              />
            </form>

            <h4>Confirm Password</h4>
            <form action="">
              <input
                type="cpassword"
                className="cpassword"
                placeholder="Enter Confirm Password"
              />
            </form>

            <div className="cheak">
              <input type="checkbox" id="agree" />
              <label for="agree">I agree, all terms and Conditions</label>
            </div>

            <button className="btn"onClick={handleclick}>Next</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
