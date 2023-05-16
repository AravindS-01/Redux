import React, { Fragment, useCallback, useEffect, useState } from "react";
import "./App.css";
import BurgerCombo from "./assest/Burger.png";
import Burger from "./assest/burgerImg.png";
import riceBowl from "./assest/riceBowlImage.png";
import MealListItem from "./MealListItem";
import Header from "./header/Header";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import Dish from "./redux/types";
import { emptyCart, removeMeal } from "./redux/reducer";

const dishes = [
  {
    id: 201,
    dishName: "Burger Combo",
    description: "A tasty burger with French fries with ketchup",
    price: 220,
    image: BurgerCombo,
  },
  {
    id: 202,
    dishName: "Burger",
    description: "A tasty and yummy burger with margarto cheese",
    price: 100,
    image: Burger,
  },
  {
    id: 203,
    dishName: "Rice Bowl",
    description:
      "The Rice bowl contains the yummy chicken curry with flavour ghee and rice",
    price: 250,
    image: riceBowl,
  },
  {
    id: 204,
    dishName: "Pizza",
    description:
      "The Rice bowl contains the yummy chicken curry with flavour ghee and rice",
    price: 200,
    image: riceBowl,
  },
];
function App() {
  const selector = useAppSelector((state) => state.cart);
  const [cartCount, setCartCount] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = selector.dishes.reduce((previousValue, currentValue) => {
      return Number(previousValue) + Number(currentValue.numberOfItem);
    }, 0);
    setCartCount(data);
  }, [selector.dishes]);

  const removeItem = useCallback(
    (dish: Dish) => {
      const reduceItem = {
        ...dish,
        numberOfItem: Number(dish.numberOfItem),
      };
      dispatch(removeMeal(reduceItem));
    },
    [dispatch]
  );
 const emptycart = useCallback(() =>{
  dispatch(emptyCart());
 },[dispatch])
  console.log("selector", selector);
  return (
    <>
      <Fragment>
        <Header></Header>
        <div
          className="card"
          style={{
            backgroundImage: `url(${Burger})`,
            backgroundSize: " 100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <ul>
            {dishes.map((meal) => {
              return (
                <>
                  <MealListItem meal={meal}></MealListItem>
                </>
              );
            })}
          </ul>
        </div>
      </Fragment>
      <div className="card">
        <span className="cartDetail">Cart Details</span>
        {selector &&
          !!selector.dishes.length &&
          selector.dishes.map((item) => {
            return (
              <>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="dispaly">
                    <h3 style={{ margin: "8px" }}>{item.dishName}</h3>
                    <div style={{ fontWeight: "bold" }}>
                      <span>Food Price: </span>
                      <span>₹{item.price}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                      <span>{"Number of Items Ordered: "}</span>
                      <span style={{ fontWeight: "bold" }}>
                        {item.numberOfItem}
                      </span>
                    </div>
                  </div>
                  <button
                    className="reduceButton"
                    onClick={() => {
                      removeItem(item);
                    }}
                  >
                    Reduce Item in Cart
                  </button>
                </li>
                <hr />
              </>
            );
          })}
        <p
          style={{
            fontSize: "24px",
            fontWeight: 700,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{"No.Of.Items Ordered"}</span>
            <span>{`${cartCount}`}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{"TotalAmount"}</span>
            <span>₹{`${selector.totalAmount}`}</span>
          </div>
        </p>
        {!!selector.dishes.length && (<button className ='emptyCart'onClick={emptycart}> Empty cart</button>) }
      </div>
      
    </>
  );
}

export default App;
