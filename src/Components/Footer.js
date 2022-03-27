import React from "react";
import style from "../css/footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className={style.footer}>
      <div>
        <Link to="" className={style.f2}>
          Home
        </Link>
        <Link to="" className={style.f2}>
          Contact
        </Link>
        <Link to="" className={style.f2}>
          Privacy Policy
        </Link>
      </div>

      <div className={style.social}>
        <Link to="" className={style.f3}>
          <img
            src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
            alt="insta"
          />
        </Link>

        <Link to="" className={style.f3}>
          <img
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt="facebook"
          />
        </Link>

        <Link to="" className={style.f3}>
          <img
            src="https://img.icons8.com/color/50/000000/twitter--v2.png"
            alt="twitter"
          />
        </Link>
      </div>

      <div>
        <p className={style.copyright}>
          @ COPYRIGHT 2022. ALL RIGHTS RESERVED.
        </p>
        <p className={style.pizzapalace}>Donita Pizza Palace</p>
      </div>
    </section>
  );
}

export default Footer;
