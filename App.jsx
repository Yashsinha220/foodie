import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './Navigation'

const App = () => {
  return (
    <>
    <SafeAreaView className = 'flex-1'>
      <Navigation></Navigation>
    </SafeAreaView>
    </>
    // <Navigation></Navigation>
  )
}

export default App

const styles = StyleSheet.create({})