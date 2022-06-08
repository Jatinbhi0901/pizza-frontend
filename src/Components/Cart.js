import React from "react";
import style from "../css/cart.module.css";
import margerita from "../Images/items/margerita.png";
import { useState } from "react";

function Cart() {
  const [counter, setCounter] = useState(1);
  function h1() {
    setCounter(counter + 1);
  }
  function h2() {
    if(counter>0){
      setCounter(counter - 1);
    }
    
  }
  
  return (
    <>
      <section className={style.maincart}>
        <h1 className={style.shopping}>Shopping Cart</h1>
        <div className={style.linecart}></div>
        <section className={style.cart}>
          <div className={style.cartimg}>
            <img src={margerita} alt="" width="400px" height="250px" />
          </div>
          <div className={style.cartinfo}>
            <input type="text" className={style.cartinfo1} />
            <br></br>

            <textarea className={style.cartinfo2}></textarea>
            <br></br>

            <input type="text" className={style.cartinfo3} />
            <br></br>

            <input type="text" className={style.cartinfo4} />
            <br></br>
            <br></br>
            <div className={style.plusminus}>
              <button onClick={h2} className={style.mi}>
                <img
                  src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/undefined/external-minus-essentials-tanah-basah-glyph-tanah-basah.png"
                  width="15px"
                  alt=""
                  className={style.minus}
                />
              </button>

              <input type="text" value={counter} className={style.cartinfo5} />

              <button onClick={h1} className={style.pl}>
                <img
                  src="https://img.icons8.com/external-simple-solid-edt.graphics/50/undefined/external-Plus-add-and-remove-simple-solid-edt.graphics.png"
                  width="15px"
                  alt=""
                  className={style.plus}
                />
              </button>
            </div>
          </div>
          <div className={style.cartprice}>
            <input type="text" className={style.cartinfooo} />
          </div>
        </section>

        {/* start new section */}
















        

        <div className={style.linetotal}></div>
        <h1 className={style.subtotal}>Subtotal</h1>
        <input type="text" className={style.subtotal1} />
      </section>
    </>
  );
}

export default Cart;
