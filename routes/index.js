 import { View, Text } from 'react-native'
 import React from 'react'
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/homeVue';
import BottomTabs from '../screen/tabs';




 const Stack = createNativeStackNavigator();

 const Routes  = () => {
   return (
     <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={BottomTabs} />
      </Stack.Navigator>

     </NavigationContainer>
   )
 }
 
 export default Routes  