import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Dish from "./types";


interface initial {
    dishes: Dish[];
    totalAmount: number,
}
const initialState: initial = {
    dishes: [],
    totalAmount:0,
}

const cartSlicer = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addMeal:(state, action:PayloadAction<Dish>)=>{
             state.totalAmount += action.payload.numberOfItem * action.payload.price;
            let alreadyExistedItemIndex= state.dishes.findIndex(item => item.id===action.payload.id);
             let existedItem = state.dishes[alreadyExistedItemIndex];   
             if(existedItem){
                    const updateItem={
                        ...existedItem,
                        numberOfItem: action.payload.numberOfItem
                    };
                    state.dishes = state.dishes.map((dish) => {
                        if(dish.id === action.payload.id){
                            return updateItem
                        }
                        else{
                            return dish
                        }
                    })
             }
             else{
                state.dishes = state.dishes.concat(action.payload)
             }
        }
    }
});



export default cartSlicer.reducer;