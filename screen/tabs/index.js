import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../homeVue';
import listeProduit from '../listeProduit';
import ParametreUtilisateur from '../parametreUtilisateur';


const Tab = createBottomTabNavigator();


const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tab_Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Menu"
        component={Home}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Liste"
        component={listeProduit }
        options={{
          tabBarLabel: 'liste',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
          ),
          //tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Parametre"
        component={ParametreUtilisateur}
        options={{
          tabBarLabel: 'Parametre',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs