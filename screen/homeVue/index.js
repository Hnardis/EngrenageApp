import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import homeVueStyle from './style.js';

const Home = () => {
  return (
    <ScrollView>

{/*  Header*/}
       <View style={homeVueStyle.header }>
         <Text  style={homeVueStyle.userName} > David Barile</Text>
         <Image source={require('./../../img/David_Barile.jpeg')} style={homeVueStyle.userImg}></Image >
       </View>

{/*  Header*/}

{/*  Liste des Fonctionalites*/}

<FlatList horizontal={true}/>

    </ScrollView>
  )
}

export default Home