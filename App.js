import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './routes';



export default function App() {
  return (
    
      <View  style ={{flex :1}} >
        
        <Routes/>
      </View>
   
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end', 
    paddingBottom: 20, 
    paddingHorizontal: 20, 
  },
});