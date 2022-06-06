import React from "react";
import style from "../css/homepage.module.css";
import margerita from "../Images/items/margerita.png";
import cheesencorn from "../Images/items/cheesencorn.png";
import farmhouse from "../Images/items/farmhouse.png";
import peppypaneer from "../Images/items/peppypaneer.png";
import veggieparadise from "../Images/items/veggieparadise.png";
import chickensausage from "../Images/items/chickensausage.png";
import pepperbarbecuechicken from "../Images/items/pepperbarbecuechicken.png";
import { useState } from "react";

function Homepage() {
  const [result1, setResult1] = useState("");
  const handleclick1 = (e) => {
    setResult1(e.target.name);
  };
  const [result2, setResult2] = useState("");
  const handleclick2 = (e) => {
    setResult2(e.target.name);
  };

  const [result3, setResult3] = useState("");
  const handleclick3 = (e) => {
    setResult3(e.target.name);
  };
  const [result4, setResult4] = useState("");
  const handleclick4 = (e) => {
    setResult4(e.target.name);
  };

  const [result5, setResult5] = useState("");
  const handleclick5 = (e) => {
    setResult5(e.target.name);
  };
  const [result6, setResult6] = useState("");
  const handleclick6 = (e) => {
    setResult6(e.target.name);
  };

  const [result7, setResult7] = useState("");
  const handleclick7 = (e) => {
    setResult7(e.target.name);
  };
  const [result8, setResult8] = useState("");
  const handleclick8 = (e) => {
    setResult8(e.target.name);
  };

  const [result9, setResult9] = useState("");
  const handleclick9 = (e) => {
    setResult9(e.target.name);
  };
  const [result10, setResult10] = useState("");
  const handleclick10 = (e) => {
    setResult10(e.target.name);
  };

  const [result11, setResult11] = useState("");
  const handleclick11 = (e) => {
    setResult11(e.target.name);
  };
  const [result12, setResult12] = useState("");
  const handleclick12 = (e) => {
    setResult12(e.target.name);
  };

  const [result13, setResult13] = useState("");
  const handleclick13 = (e) => {
    setResult13(e.target.name);
  };
  const [result14, setResult14] = useState("");
  const handleclick14 = (e) => {
    setResult14(e.target.name);
  };
  return (
    <>
      <section className={style.bestsellers} id="#one">
      <div className={style.linemain}></div>
        <div className={style.mainhead}>BESTSELLERS</div>
        <section className={style.row1}>
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
              <ul className={style.ull}>
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

              <ul className={style.ull}>
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
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item2}>
            <img
              src={cheesencorn}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <h2 className={style.heading1}>Cheese n Corn</h2>
            <p className={style.para1}>
              A delectable combination of sweet And juicy golden corn
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result3}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick3}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick3}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick3}
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

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result4}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick4}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick4}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick4}
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
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item3}>
            <img
              src={farmhouse}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <h2 className={style.heading1}>Farmhouse</h2>
            <p className={style.para1}>
              Delightful combination of onion, capsicum, tomato And mushroom
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result5}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick5}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick5}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick5}
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

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result6}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick6}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick6}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick6}
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
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item4}>
            <img
              src={peppypaneer}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <h2 className={style.heading1}>Peppy Paneer</h2>
            <p className={style.para1}>
              Flavorful trio of juicy paneer, crisp capsicum with spicy red
              paprika
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result7}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick7}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick7}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick7}
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

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result8}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick8}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick8}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick8}
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
              ADD TO CART
            </button>
          </div>
        </section>

        <section className={style.row1}>
          {/* newone */}
          <div className={style.item5}>
            <img
              src={veggieparadise}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <h2 className={style.heading1}>Veggie Paradise</h2>
            <p className={style.para1}>
              The awesome foursome! Golden corn, black olives, capsicum, red
              paprika
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result9}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick9}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick9}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick9}
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

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result10}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick10}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick10}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick10}
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
              ADD TO CART
            </button>
          </div>

          {/* newone */}
          <div className={style.item6}>
            <img
              src={chickensausage}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <h2 className={style.heading1}>Chicken Sausage</h2>
            <p className={style.para1}>
              American classic! Spicy, herbed chicken sausage on pizza
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result11}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick11}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick11}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick11}
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

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result12}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick12}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick12}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick12}
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
              ADD TO CART
            </button>
          </div>

          {/* newone */}
          <div className={style.item7}>
            <img
              src={pepperbarbecuechicken}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <h2 className={style.heading1}>Pepper Barbecue Chicken</h2>
            <p className={style.para1}>
              Pepper barbecue chicken for that extra zing
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result13}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick13}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick13}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick13}
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

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result14}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick14}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick14}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick14}
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
              ADD TO CART
            </button>
          </div>
        </section>
      </section>
    </>
  );
}

export default Homepage;
