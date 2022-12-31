import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FoodAvailability } from "./models";
import axios from "axios";
import { BASE_URL } from '../utils/index';
interface ShoppingActions{
    error:string,
    response:FoodAvailability,
    loading:boolean
}
const initialState:ShoppingActions={
error:"",
response:{} as FoodAvailability,
loading:false
}
export const fetchFoodAvailabilty=createAsyncThunk('foodsAvailable/fetchFoodAvailability',async()=>{
    console.log("hereeeeee")
    return await axios.get<FoodAvailability>(`${BASE_URL}food/availability/95014`).then((response)=>response.data)

})
const foodAvailabiltySlice=createSlice({
    name:'foodsAvailable',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchFoodAvailabilty.pending, (state)=>{
            state.loading=true
        })
        builder.addCase(fetchFoodAvailabilty.fulfilled,(state, action:PayloadAction<FoodAvailability>)=>{
            state.loading=false
            state.response=action.payload
            state.error=''
        })
        builder.addCase(fetchFoodAvailabilty.rejected, (state, action)=>{
            state.loading=false,
            state.error=action.error.message ||"Something went wrong"
        })
    }
})

export default foodAvailabiltySlice.reducer