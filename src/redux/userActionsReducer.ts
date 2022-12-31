import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as Location from 'expo-location'
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserModel, UserState } from "./models";
import { AsyncStorage } from "react-native";
//Anywhere I am calling use dispatch i will specify the type wether it is type error or update
// dispatch = useDispatch<UserAction>


const initialState: UserState={
    user:{} as UserModel,
    location: {} as Location.LocationGeocodedAddress,
    error:"",
    loading:false
    
}
export const saveToStorage =createAsyncThunk('updateAdress/saveToStorage', async(location:Location.LocationGeocodedAddress)=>{
    const locationString=JSON.stringify(location)
   await AsyncStorage.setItem('user_location',locationString)
})
export const userActionsSlice=createSlice({
    name:'updateAddress',
    initialState,
    reducers:{
        updateAddress:(state, action:PayloadAction<Location.LocationGeocodedAddress>)=>{
           state.location=action.payload
           },
        
        },
    extraReducers:(builder)=>{
        builder.addCase(saveToStorage.pending, (state)=>{
            state.loading=true
        })
        builder.addCase(saveToStorage.fulfilled, (state)=>{
            state.loading=false
        })
        builder.addCase(saveToStorage.rejected, (state, action)=>{
            state.loading=false
            state.error=action.error.message||"Something went wrong"
        })
    }
    }
)


export const {updateAddress}=userActionsSlice.actions
export default userActionsSlice.reducer