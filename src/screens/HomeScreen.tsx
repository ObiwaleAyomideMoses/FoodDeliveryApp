import { View, Text } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={{
        flex:1, backgroundColor:"green"
    }}>
        <View style={{flex:2, backgroundColor:'red'}}>
            <Text>Navigation</Text>
        </View>
        <View style={{flex:9, justifyContent:'center', alignItems:'center', backgroundColor:'yellow'}}>
            <Text>Landing Screen</Text>
        </View>
        <View style={{ flex:1, backgroundColor:'cyan'}}>
            <Text>Footer</Text>
        </View>
      
    </View>
  )
}

export default HomeScreen