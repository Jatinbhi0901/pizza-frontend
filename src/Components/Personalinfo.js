import React from "react";
import style from "../css/personalinfo.module.css";

function Personalinfo() {
  return (
    <>
      <section>
        <div className={style.container2}></div>
      </section>

      <section className={style.Information}>
        <div className={style.container1}>
          <div className={style.Box2}>
            <h1 className={style.a2}>Personal Information </h1>

            <div class={style.abc}>
              <span className={style.line1}>First Name</span>
              <input type="text" class={style.fn} placeholder="Enter First Name" />

              <span className={style.line2}>Last Name</span>
              <input type="text" class={style.ln} placeholder="Enter Last Name" />
            </div>

            <div className={style.qwe}>
              <span className={style.line3}>Contact No</span>
              <input type="text" className={style.cn} placeholder="Contact No" />

              <span className={style.line4}>Country</span>
              <input type="text" className={style.co} placeholder="Country" />
            </div>

            <div className={style.asd}>
              <span className={style.line5}>State</span>
              <input type="text" className={style.st} placeholder="State" />

              <span className={style.line6}>Postal Zip</span>
              <input type="text" className={style.zip} placeholder="Postal Zip" />
            </div>

            <button className={style.btn}>Register</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Personalinfo;
