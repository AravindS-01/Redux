import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/cardComponent/Cards';
import BurgerCombo from './assest/Burger.png'
import Burger from './assest/burgerImg.png'
import riceBowl from './assest/riceBowlImage.png'


const dishes = [
  {
    id: 201,
    dishName: 'Burger Combo',
    description: 'A tasty burger with French fries with ketchup',
    price: 220,
    image:BurgerCombo
  },
  {
    id: 202,
    dishName: 'Burger',
    description: 'A tasty and yummy burger with margarto cheese',
    price: 100,
    image:Burger
  },
  {
    id: 203,
    dishName: 'Rice Bowl',
    description: 'The Rice bowl contains the yummy chicken curry with flavour ghee and rice',
    price: 250,
    image:riceBowl
  },
  {
    id: 204,
    dishName: 'Pizza',
    description: 'The Rice bowl contains the yummy chicken curry with flavour ghee and rice',
    price: 200,
    image:riceBowl
  },
]
function App() {

  const onAddDishes =() =>{}
  return (
    <Fragment>
      <div className='card' style={{backgroundImage:`url(${Burger})`,backgroundSize: ' 100% 100%',backgroundRepeat: 'no-repeat',}}>
        <ul>
          {dishes.map(meal => {
            return (
              <>
                <li className='meal_add_button'>
                  <div>
                    <h3>{meal.dishName}</h3>
                    <div  style={{fontStyle:'italic'}}>{meal.description}</div>
                    <div style={{fontWeight:'bold'}}>₹{meal.price}</div>
                  </div>
                  <div className='input_button_label'>
                    <div className='input_button'>
                    <label className='labelText'>{'Amount'}</label>
                    <input type='number' className='input_size' min='1' defaultValue ='1'></input>
                    </div>
                    <button className='buttonProp' onClick={onAddDishes}>Add +</button>
                  </div>
                </li>
                <hr/>
              </>
            )
          })}
        </ul>
      </div>
    </Fragment>
  );
}

export default App;
