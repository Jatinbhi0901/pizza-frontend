import React from "react";
import style from "../css/homepage.module.css";
import margerita from "../Images/items/margerita.png";
import { useState } from "react";

function Homepage() {
  const [result1, setResult1] = useState("");
  const handleclick1 = (e) => {
    setResult1(result1.concat(e.target.name));
  };
  const [result2, setResult2] = useState("");
  const handleclick2 = (e) => {
    setResult2(result2.concat(e.target.name));
  };
  return (
    <section className={style.section1}>
      <div className={style.item1}>
        <img
          src={margerita}
          className={style.border}
          alt=""
          width="300px"
          height="150px"
        />
        <h2 className={style.heading1}>Margherita</h2>
        <p className={style.para1}>
          Classic delight with 100% real mozzarella cheese
        </p>
        <div className={style.line}></div>
        <div className={style.sizebase}>
          <ul>
            <h4 className={style.size}> Size </h4>
            <li>
              <input
                type="text"
                className={style.ntext1}
                placeholder=" Choose Size▾"
                value={result1}
              />
              <ul className={style.dropdown}>
                <li>
                  <button
                    onClick={handleclick1}
                    name="Regular"
                    className={style.dr}
                  >
                    {" "}
                    Regular
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleclick1}
                    name="Medium"
                    className={style.dr}
                  >
                    {" "}
                    Medium
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleclick1}
                    name="Large"
                    className={style.dr}
                  >
                    {" "}
                    Large
                  </button>
                </li>
              </ul>
            </li>
          </ul>

          <ul>
            <h4 className={style.crust}> Crust </h4>
            <li>
              <input
                type="text"
                className={style.ntext2}
                placeholder="Crust type ▾"
                value={result2}
              />
              <ul className={style.dropdown2}>
                <li>
                  <button
                    onClick={handleclick2}
                    name="New Hand"
                    className={style.dr}
                  >
                    {" "}
                    New Hand
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleclick2}
                    name="Classic"
                    className={style.dr}
                  >
                    {" "}
                    Classic
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleclick2}
                    name="Cheese Burst"
                    className={style.dr}
                  >
                    {" "}
                    Cheese Burst
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <button className={style.addtocart} type="submit">
          Add To Cart
        </button>
      </div>

     
    </section>
  );
}

export default Homepage;
