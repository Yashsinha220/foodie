import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import Restaurants from './screens/Restaurants'
const Navigation = () => {
    const Navigation = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Navigation.Navigator
        screenOptions={{
            headerShown : false
        }}>
            <Navigation.Screen name='Home' component={HomeScreen}></Navigation.Screen>
            <Navigation.Screen name='Restaurants' component={Restaurants}></Navigation.Screen>
        </Navigation.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})