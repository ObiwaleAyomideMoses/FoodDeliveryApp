import { LocationGeocodedAddress } from "expo-location";

export interface category{
    title:string,
    icon:string
}
// Food Model
export interface FoodModel{
_id:string;
name:string,
description:string,
category:string,
price:number,
readyTime:number,
image:[string]
}
// Restaurant Model
export interface Restaurant{
    _id:string;
    name:string,
    foodType:string,
    address:string,
    phone:string,
    images:number,
    foods:[string]
}

export interface FoodAvailability{
    categories:[category],
    restaurants:[Restaurant];
    foods:[FoodModel]
}
export interface UserModel{
    firstName:string,
    lastName:string,
    contactNumber:string,
    token:string
}

export interface UserState{
    user:UserModel,
    location: LocationGeocodedAddress,
    error:string,
    loading:boolean
}