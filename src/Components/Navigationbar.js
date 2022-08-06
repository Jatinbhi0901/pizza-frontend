import React from "react";
import style from "../css/navigationbar.module.css";
import pizzancoffee from "../Images/pizzancoffee.png";
import search from "../Images/search.png";
import { Link } from "react-router-dom";

function navigationbar() {
  return (
    <section className={style.navigationbar}>
      <div className={style.container1}>
        <div className={style.menu1}>
          <div className={style.box1}>
            <img src={pizzancoffee} alt="" width="113px" />
          </div>

          <div className={style.box2}>
            <ul>
              <li>
                <Link to=""className={style.dr}>Discover ▾</Link>
                <ul className={style.dropdown}>
                  <li>
                    <Link to="/homepage" className={style.dr}>
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className={style.dr}>
                      Deals
                    </Link>
                  </li>
                  <li>
                    <Link to="/bestsellers" className={style.dr}>
                      Bestsellers
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={style.box3}>
            <input
              type="text"
              className={style.search}
              placeholder="search by name"
            />
            <button className={style.s}>
              <img src={search} alt="" width="20px" />
            </button>
          </div>

          <div className={style.box4}>
            <input type="radio" id="1" name="qw"/>
            <label htmlFor="1">Delivery</label>

            <input type="radio" id="2"name="qw" />
            <label htmlFor="2">Dine-in</label>

            <input type="radio" id="3"name="qw" />
            <label htmlFor="3">Take-away</label>
          </div>

          <div className={style.box5}>
            <Link to="/profile" className={style.signup}>
              Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default navigationbar;
