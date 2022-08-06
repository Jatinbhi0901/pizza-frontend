import React from "react";
import style from "../css/homepage.module.css";
import Bestsellers from "./Bestsellers";
import VegPizza from "./VegPizza";
import NonVegPizza from "./NonVegPizza";
import Beverages from "./Beverages";
import Dessert from "./Dessert";
import PartyCombos from "./PartyCombos";



function Homepage() {



  return (
  <>
    <section className={style.navbarsecond}>
    <a href="#one"className={style.move1}>BESTSELLERS</a>
    <a href="#two"className={style.move}>VEG PIZZA</a>
    <a href="#three"className={style.move}>NON-VEG PIZZA</a>
    <a href="#four"className={style.move}>BEVERAGES</a>
    <a href="#five"className={style.move}>PARTY COMBOS</a>
    <a href="#six"className={style.move}>DESSERT</a>
    </section>
     <Bestsellers/>
     <VegPizza/>
     <NonVegPizza/>
     <Beverages/>
     <PartyCombos/>
     <Dessert/>  
     </>
  );
}

export default Homepage;
