import React from "react";
import style from "../css/menu.module.css";
import { Link } from "react-router-dom";
import q1 from "../Images/q1.jpg";
import q2 from "../Images/q2.jpg";
import q3 from "../Images/q3.jpg";
import q4 from "../Images/q4.jpg";
import q5 from "../Images/q5.jpg";
import q6 from "../Images/q6.jpg";

function Menu() {
  return (
    <section className={style.explore}>
      <h1 className={style.exploremenu}>Explore Menu</h1>
      <div className={style.row1}>
        <Link to="">
          <img
            src={q1}
            alt="veg pizza"
            width="400 px"
            height="250px"
            className={style.imgresponsive}
          ></img>
          <h3 className={style.heading}>Veg Pizza</h3>
        </Link>

        <Link to="">
          <img
            src={q6}
            alt="Non-veg pizza"
            width="400 px"
            height="250px"
            className={style.imgresponsive}
          ></img>
          <h3 className={style.heading}>Non-veg pizza</h3>
        </Link>

        <Link to="">
          <img
            src={q3}
            alt="Deserts"
            width="400 px"
            height="250px"
            className={style.imgresponsive}
          ></img>
          <h3 className={style.heading}>Deserts</h3>
        </Link>
      </div>




      <div className={style.row1}>
        <Link to="">
          <img
            src={q5}
            alt="veg pizza"
            width="400 px"
            height="250px"
            className={style.imgresponsive}
          ></img>
          <h3 className={style.heading}>Special Offers</h3>
        </Link>

        <Link to="">
          <img
            src={q4}
            alt="Non-veg pizza"
            width="400 px"
            height="250px"
            className={style.imgresponsive}
          ></img>
          <h3 className={style.heading}>Beverages</h3>
        </Link>

        <Link to="">
          <img
            src={q2}
            alt="Deserts"
            width="400 px"
            height="250px"
            className={style.imgresponsive}
          ></img>
          <h3 className={style.heading}>Meals and Combos</h3>
        </Link>
      </div>
    </section>
  );
}

export default Menu;
