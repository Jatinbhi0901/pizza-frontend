import React from "react";
import style from "../css/menu.module.css";
import { useNavigate } from "react-router-dom";

import q1 from "../Images/items/farmhouse.png";
import q2 from "../Images/items/nonvegsupreme.png";
import q3 from "../Images/items/cheesencorn.png";
import q4 from "../Images/items/pepsi.jpg";
import q5 from "../Images/q3.jpg";
import q6 from "../Images/items/vegdeluxcombo.png";

function Menu() {
  const history = useNavigate();
  function ok1() {
    history("/vegpizza");
  }
  function ok2() {
    history("/nonvegpizza");
  }
  function ok3() {
    history("/bestsellers");
  }
  function ok4() {
    history("/beverages");
  }
  function ok5() {
    history("/dessert");
  }
  function ok6() {
    history("/partycombos");
  }
  return (
    <>
      <section className={style.row11}>
        <div className={style.item11}>
          <img
            src={q1}
            className={style.border1}
            alt=""
            width="300px"
            height="150px"
          />
          <h2 className={style.heading11}>Veg Pizza</h2>
          <p className={style.para11}>
          Hot, cheesy and delicious pizza loaded with your favorite veggies. Explore varieties of veg Pizza with your favourite toppings.
          </p>
          <button className={style.addtocart1} type="submit" onClick={ok1}>
            see more
          </button>
        </div>
        <div className={style.item12}>
          <img
            src={q2}
            className={style.border1}
            alt=""
            width="300px"
            height="150px"
          />
          <h2 className={style.heading11}>Non-Veg Pizza</h2>
          <p className={style.para11}>
          With a healthy pizza base made with millet and tapioca flour along with soy milk, meat lovers pizza strikes a perfect
           balance of flavour.
          </p>
          <button className={style.addtocart1} type="submit" onClick={ok2}>
            see more
          </button>
        </div>

        <div className={style.item13}>
          <img
            src={q3}
            className={style.border1}
            alt=""
            width="300px"
            height="150px"
          />
          <h2 className={style.heading11}>Bestsellers</h2>
          <p className={style.para11}>
          Among our entire menu, few dishes are in most demand. You can explore these mouthwatering and delicious pizzas over here.
          </p>
          <button className={style.addtocart1} type="submit" onClick={ok3}>
            see more
          </button>
        </div>

        <div className={style.item14}>
          <img
            src={q4}
            className={style.border1}
            alt=""
            width="300px"
            height="150px"
          />
          <h2 className={style.heading11}>Beverages</h2>
          <p className={style.para11}>
          Besides water we need something tasty to consume while eating chessy pizza. 
          Beverages such as coke, thumbs up can make your meal more tasty.
          </p>
          <button className={style.addtocart1} type="submit" onClick={ok4}>
            see more
          </button>
        </div>
      </section>
      <section className={style.row12}>
        <div className={style.item15}>
          <img
            src={q5}
            className={style.border1}
            alt=""
            width="300px"
            height="150px"
          />
          <h2 className={style.heading11}>Dessert</h2>
          <p className={style.para11}>
          Dessert is a course that concludes a meal. The course consists of sweet foods,
           such as confections, and possibly a beverage.
          </p>
          <button className={style.addtocart1} type="submit" onClick={ok5}>
            see more
          </button>
        </div>

        <div className={style.item16}>
          <img
            src={q6}
            className={style.border1}
            alt=""
            width="300px"
            height="150px"
          />
          <h2 className={style.heading11}>Party Combos</h2>
          <p className={style.para11}>
          Chilling and vibing with friends need some party menu. For this purpose you can enjoy these party combos specially made for you.
          </p>
          <button className={style.addtocart1} type="submit" onClick={ok6}>
            see more
          </button>
        </div>
      </section>
    </>
  );
}

export default Menu;
