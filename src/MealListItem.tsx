import React, { useCallback, useRef } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { addMeal } from "./redux/reducer";

interface MealProp {
  meal: {
    id: number;
    dishName: string;
    description: string;
    price: number;
    image: string;
  };
}

const MealListItem: React.FC<MealProp> = (props) => {
  const { meal } = props;
  const dispatch = useAppDispatch();
  const itemRef = useRef<HTMLInputElement>(null);
  const onAddDishes = useCallback((meals: any) => {
    let noOfitems = itemRef.current?.value;
    const newDish = {
      ...meals,
      numberOfItem: noOfitems
    };

    dispatch(addMeal(newDish))

  }, [dispatch]);
  return (
    <>
      <li className="meal_add_button">
        <div>
          <h3>{meal.dishName}</h3>
          <div style={{ fontStyle: "italic" }}>{meal.description}</div>
          <div style={{ fontWeight: "bold" }}>₹{meal.price}</div>
        </div>
        <div className="input_button_label">
          <div className="input_button">
            <label className="labelText">{"Amount"}</label>
            <input
              ref={itemRef}
              type="number"
              className="input_size"
              min="1"
              max='5'
              defaultValue="1"
            ></input>
          </div>
          <button className="buttonProp" onClick={() => { onAddDishes(meal) }}>
            Add +
          </button>
        </div>
      </li>
      <hr />
    </>
  );
};

export default MealListItem;
