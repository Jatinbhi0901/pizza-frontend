import React from "react";
import "../css/personalinfo.css";

function Personalinfo() {
  return (
    <>
      <section>
        <div class="container2"></div>
      </section>

      <section className="Information">
        <div className="container1">
          <div className="Box2">
            <h1>Personal Information </h1>

            <div class="abc">
              <span className="line1">First Name</span>
              <input type="text" class="fn" placeholder="Enter First Name" />

              <span className="line2">Last Name</span>
              <input type="text" class="ln" placeholder="Enter Last Name" />
            </div>

            <div class="qwe">
              <span className="line3">Contact No</span>
              <input type="text" class="cn" placeholder="Contact No" />

              <span className="line4">Country</span>
              <input type="text" class="co" placeholder="Country" />
            </div>

            <div class="asd">
              <span className="line5">State</span>
              <input type="text" class="st" placeholder="State" />

              <span className="line6">Postal Zip</span>
              <input type="text" class="zip" placeholder="Postal Zip" />
            </div>

            <button className="btn">Register</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Personalinfo;
