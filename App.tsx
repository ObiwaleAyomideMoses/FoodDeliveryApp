import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './src/screens/LandingScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';

const switchNavigator=createStackNavigator({
  
  landingStack:{
    
    screen:createStackNavigator({
      Landing:LandingScreen,
    },
    {
      defaultNavigationOptions:{
        headerShown:false,
        
      }
    }
    )
  },
  homeStack:createBottomTabNavigator({
    
    home:{
      screen:createStackNavigator({
        HomePage:HomeScreen
      }),
      navigationOptions:{
        tabBarIcon:({focused, tintColor})=>{
          let icon=focused==true?require('./src/images/home_icon.png'):require('./src/images/home_n_icon.png')
          return <Image source={icon} style={{height:30, width:30}}/>
        }
      }
    },
    Offer:{
      screen:createStackNavigator({
        OfferPage:HomeScreen
      }),
      navigationOptions:{
        tabBarIcon:({focused, tintColor})=>{
          let icon=focused==true?require('./src/images/offer_icon.png'):require('./src/images/offer_n_icon.png')
          return <Image source={icon} style={{height:30, width:30}}/>
        }
      }
    },
    Cart:{
      screen:createStackNavigator({
        CartPage:HomeScreen
      }),
      navigationOptions:{
        tabBarIcon:({focused, tintColor})=>{
          let icon=focused==true?require('./src/images/cart_icon.png'):require('./src/images/cart_n_icon.png')
          return <Image source={icon} style={{height:30, width:30}}/>
        }
      }
    },
    Account:{
      screen:createStackNavigator({
        AccountPage:HomeScreen
      }),
      navigationOptions:{
        tabBarIcon:({focused, tintColor})=>{
          let icon=focused==true?require('./src/images/account_icon.png'):require('./src/images/account_n_icon.png')
          return <Image source={icon} style={{height:30, width:30}}/>
        }
      }
    }
  })
})
const AppNavigations=createAppContainer(switchNavigator)
export default function App() {
  return (
  <AppNavigations/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
