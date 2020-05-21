import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  mainText: {
    fontSize: 30,
    color: 'darkslateblue'
  }, 
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  }
})

export default function App() {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.mainText}>Hello world!!</Text>
      <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
             style={styles.img} />
    </View>
  )
}
