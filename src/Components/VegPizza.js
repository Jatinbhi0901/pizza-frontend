import style from "../css/homepage.module.css"
import React, { useEffect, useState } from 'react'
import axios from "axios"

const Sizes = {regular:"Regular",medium:"Medium",large:"Large"}
const Crust= {newHandTossed:"New Hand",cheeseBurst:"Cheese Burst",freshPan:"Fresh Pan"} 
function VegPizzaCard({pizza}){
    const [result1, setResult1] = useState("regular");
  const handleclick1 = (e) => {
    const type=e.target.name
    setResult1(type);
    const pizzaname=""+type+result2[0].toUpperCase()+result2.slice(1)+"Price"
    // console.log(pizzaname)
    setprice(pizza.size[type].crust[result2][pizzaname])
  };
  const [result2, setResult2] = useState("newHandTossed");
  const handleclick2 = (e) => {
    const type=e.target.name
    setResult2(type); 
    const pizzaname=""+result1+type[0].toUpperCase()+type.slice(1)+"Price"
    console.log(pizzaname)
    setprice(pizza.size[result1].crust[type][pizzaname])
  };
  const[price, setprice]=useState(pizza.size.regular.crust.newHandTossed.regularNewHandTossedPrice)


    return (
        <section className={style.row1}>
        <div className={style.item1}>
          <img
            src={pizza.image}
            className={style.border}
            alt=""
            width="300px"
            height="150px"
          />
          <input
                  type="text"
                  className={style.price}
                  value={price}
                  readOnly
                  
                />
          <h2 className={style.heading1}>{pizza.name}</h2>
          <p className={style.para1}>
            {pizza.description}
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
                  value={Sizes[result1]}
                  readOnly
                  
                />
                <ul className={style.dropdown}>
                  <li>
                    <button
                      
                      name="regular"
                      className={style.dr}
                      onClick={handleclick1}
                    >
                      {" "}
                      Regular
                    </button>
                  </li>
                  <li>
                    <button
                      
                      name="medium"
                      className={style.dr}
                      onClick={handleclick1}
                    >
                      {" "}
                      Medium
                    </button>
                  </li>
                  <li>
                    <button
                     
                      name="large"
                      className={style.dr}
                      onClick={handleclick1}
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
                  value={Crust[result2]}
                  readOnly
                  
                />
                <ul className={style.dropdown2}>
                  <li>
                    <button
                      name="newHandTossed"
                      className={style.dr}
                      onClick={handleclick2}
                    >
                      {" "}
                      New Hand
                    </button>
                  </li>
                  <li>
                    <button
                  
                      name="cheeseBurst"
                      className={style.dr}
                      onClick={handleclick2}
                    >
                      {" "}
                      Classic
                    </button>
                  </li>
                  <li>
                    <button
                      
                      name="freshPan"
                      className={style.dr}
                      onClick={handleclick2}
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
    )
}
function VegPizza() {
    const [pizzas,setPizzas]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await axios.get("http://localhost:4000/pizzaData/getPizza/Veg Pizza")
            console.log(res.data)
            setPizzas(res.data.pizza)
        }
        fetchData()
    },[])
    // console.log(pizzas)
  return (
    <>
     <section className={style.bestsellers} id="one">
        <div className={style.linemain}></div>
        <div className={style.mainhead}>VEG-PIZZA</div>
        <div className={style.cardlist}>
        {pizzas.map((pizza,index)=>(
            <VegPizzaCard key={`card_${index}`} pizza={pizza}/>
        ))}
        </div>
       
      </section>

    </>
  )
}

export default VegPizza