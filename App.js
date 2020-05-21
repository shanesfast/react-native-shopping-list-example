import React, { useState } from 'react'
import { Alert, FlatList, StyleSheet, View } from 'react-native'
import uuid from 'react-native-uuid'
import AddItem from './components/AddItem'
import Header from './components/Header'
import ListItem from './components/ListItem'

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingTop: 60
  }
})

export default function App() {
  const [items, setItems] = useState([
    { id: uuid.v4(), text: 'Granola' },
    { id: uuid.v4(), text: 'Bread' },
    { id: uuid.v4(), text: 'Cheese' },
    { id: uuid.v4(), text: 'Almond milk' },
    { id: uuid.v4(), text: 'Bananas' },
    { id: uuid.v4(), text: 'Apples' },
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    })
  }

  const addItem = (item) => {
    if (!item) {
      Alert.alert('Error', 'Item is blank. Please enter an item.', { text: 'Ok!' })
    } else {
      setItems(prevItems => {
        return [...prevItems, {id: uuid.v4(), text: item}]
      })
    }
  }

  return (
    <View style={styles.conatiner}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>} />
    </View>
  )
}
