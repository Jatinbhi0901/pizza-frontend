import React from "react";
import style from "../css/homepage.module.css";
import margerita from "../Images/items/margerita.png";
import cheesencorn from "../Images/items/cheesencorn.png";
import farmhouse from "../Images/items/farmhouse.png";
import peppypaneer from "../Images/items/peppypaneer.png";
import veggieparadise from "../Images/items/veggieparadise.png";
import chickensausage from "../Images/items/chickensausage.png";
import pepperbarbecuechicken from "../Images/items/pepperbarbecuechicken.png";

import capsicum from "../Images/items/capsicum.png";
import goldencorn from "../Images/items/goldencorn.png";
import onion from "../Images/items/onion.png";
import paneer from "../Images/items/paneer.png";
import tomato from "../Images/items/tomato.png";
import paneermakhani from "../Images/items/paneermakhani.png";
import inditandoorpaneer from "../Images/items/inditandoorpaneer.png";
import freshveggie from "../Images/items/freshveggie.png";
import mexicangreenwave from "../Images/items/mexicangreenwave.png";

import chickendominator from "../Images/items/chickendominator.png";
import chickenfiesta from "../Images/items/chickenfiesta.png";
import chickengoldendelight from "../Images/items/chickengoldendelight.png";
import indichickentikka from "../Images/items/indichickentikka.png";
import nonvegsupreme from "../Images/items/nonvegsupreme.png";

import pepsi from "../Images/items/pepsi.jpg";
import mirinda from "../Images/items/mirinda.png";
import pepsiblack from "../Images/items/pepsiblack.png";
import nimbooz from "../Images/items/nimbooz.jpg";
import bailyone from "../Images/items/BailleyONE.jpg";

import vegvaluecombo from "../Images/items/vegvaluecombo.png";
import nonvegvaluecombo from "../Images/items/nonvegvaluecombo.png";
import vegdeluxcombo from "../Images/items/vegdeluxcombo.png";
import nonvegdeluxcombo from "../Images/items/nonvegdeluxcombo.png";
import nonvegpremiumcombo from "../Images/items/nonvegpremiumcombo.png";

import chocolava from "../Images/items/chocolava.png";
import brownie from "../Images/items/browniefantasy.png";
import mousse from "../Images/items/moussecake.png";
import redvelvet from "../Images/items/redvelevt.jpg";

import { useState } from "react";
import Bestsellers from "./Bestsellers";



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
     </>
  );
}

export default Homepage;
