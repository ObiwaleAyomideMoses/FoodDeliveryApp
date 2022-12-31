import { View, Text, Image, Dimensions } from 'react-native'
import React, {useState,useEffect, useReducer} from 'react'
import * as Location from 'expo-location'
import { useDispatch } from 'react-redux'
import { updateAddress, saveToStorage } from '../redux/userActionsReducer'
import { useNavigation } from '../utils'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { fetchFoodAvailabilty } from '../redux/shoppingActions';

const screenWidth=Dimensions.get('screen').width
const LandingScreen = () => {
    const response=useAppSelector((state)=>state.availableFoods.response)
    const error=useAppSelector((state)=>state.availableFoods.error)
    const dispatch=useAppDispatch()
    const ulocation =useAppSelector((state)=>state.userActions.location)
    const {navigate}=useNavigation()
    const [errorMsg, setErrorMsg]=useState("")
    const [Address, setAddress]=useState<Location.LocationGeocodedAddress>()
    const [displayAddress, setDisplayAddress]=useState("Waiting for Current Location")
    useEffect( ()=> {
        
        async function fetchAddress(){
            fetchFoodAvailabilty()
            console.log(response)
            let {status}=await Location.requestPermissionsAsync();
            if(status !=='granted'){
                setErrorMsg('Permission to access location not granted')
            }
            let location:any=await Location.getCurrentPositionAsync({});
            const {coords}= location
            if(coords){
                const {latitude, longitude}=coords
                let addressResponse:any =await Location.reverseGeocodeAsync({latitude, longitude})
               
              setAddress(addressResponse)
                for (let item of addressResponse){
                   
                    setAddress(item)
                    
                    let currentAddress = `${item.name}, ${item.street}, ${item.postalCode}, ${item.country}`
                    setDisplayAddress(currentAddress)
                    
                    if(currentAddress.length>0){
                        setTimeout(() => {
                            if (typeof Address!=="undefined"){
                                dispatch(updateAddress(Address))
                            }
                            
                           
                            navigate('homeStack')
                        }, 2000);
                    }
                    return;
                }
            }else {

            }
        }
        fetchAddress()
    },[])
   
  return (
    <View style={{
        flex:1, backgroundColor:'rgba(242, 242,242,1)'
    }}>
        <View style={{flex:2}}>
            <Text></Text>
        </View>
        <View style={{flex:9, justifyContent:'center', alignItems:'center'}}>
            <Image source={require('../images/delivery_icon.png')} style={{height:120, width:120}}/>
            <View style={{width:screenWidth-100, borderBottomColor:'red', borderBottomWidth:0.5, padding:5, marginBottom:10, alignItems:'center'}}>
            <Text style={{fontSize:24, fontWeight:'700', color:'#7D7D7D'}}>Your Delivery Address</Text>
            </View>
            <Text style={{fontSize:20, fontWeight:'200', color:'#4F4F4F'}}>{displayAddress}</Text>
            
        </View>
        <View style={{ flex:1}}>
            <Text></Text>
        </View>
      
    </View>
  )
}

export default LandingScreen