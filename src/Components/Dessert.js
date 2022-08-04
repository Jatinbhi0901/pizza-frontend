import style from "../css/homepage.module.css"
import React, { useEffect, useState } from 'react'
import axios from "axios"


function DessertCard({beverage}){

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
function Dessert() {
    const [desserts,setDesserts]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await axios.get("http://localhost:4000/beverageData/getBeverage/Dessert")
            console.log(res.data)
            setDesserts(res.data.beverage)
        }
        fetchData()
    },[])
    
  return (
    <>
     <section className={style.bestsellers} id="one">
        <div className={style.linemain}></div>
        <div className={style.mainhead}>DESSERTS</div>
        <div className={style.cardlist}>
        {desserts.map((beverage,index)=>(
            <DessertCard key={`card_${index}`} beverage={beverage}/>
        ))}
        </div>
       
      </section>

    </>
  )
}

export default Dessert