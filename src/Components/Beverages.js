import style from "../css/homepage.module.css"
import React, { useEffect, useState } from 'react'
import axios from "axios"


function BeveragesCard({beverage}){

    return (
        <section className={style.row1}>
        <div className={style.item1}>
          <img
            src={beverage.image}
            className={style.border}
            alt=""
            width="300px"
            height="150px"
          />
          <input
                  type="text"
                  className={style.price}
                  value={beverage.price}
                  readOnly
                  
                />
          <h2 className={style.heading1}>{beverage.name}</h2>
          <p className={style.para1}>
            {beverage.description}
          </p>
        

          <button className={style.addtocart} type="submit">
            ADD TO CART
          </button>
        </div>
      </section>
    )
}
function Beverages() {
    const [beverages,setBeverages]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await axios.get("http://localhost:4000/beverageData/getBeverage/Beverages")
            console.log(res.data)
            setBeverages(res.data.beverage)
        }
        fetchData()
    },[])
    
  return (
    <>
     <section className={style.bestsellers} id="one">
        <div className={style.linemain}></div>
        <div className={style.mainhead}>BEVERAGES</div>
        <div className={style.cardlist}>
        {beverages.map((beverage,index)=>(
            <BeveragesCard key={`card_${index}`} beverage={beverage}/>
        ))}
        </div>
       
      </section>

    </>
  )
}

export default Beverages