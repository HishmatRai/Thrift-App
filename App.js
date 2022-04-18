import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import SmartFi from './src/screens/smartFi'
let App = () => {
  return (
    <SafeAreaView style={styles._container}>
      <SmartFi />
    </SafeAreaView>
  )
}
let styles = StyleSheet.create({
  _container: {
    flex: 1
  }
})
export default App