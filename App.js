import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput, } from 'react-native';

export default function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const addingItem = () => {
    setData([...data, { key: text}]);
    setText("")
  }
  const clearItems = () => {
    setData([])
  }
  return (
    <View style={styles.container}>
        <View style={styles.input}>
      <TextInput style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setText(text)} value={text} />
        </View>
        <View style={styles.button}>
      <Button onPress={addingItem} title="Add"/>
      <Button onPress={clearItems} title="Clear"/>
        </View>
        <Text> ShoppingList </Text>
        <View style={styles.flatList}>
        

      <FlatList data={data} renderItem={({item}) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()} />
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
    
  },
  button: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    marginBottom: 30,
    
  },
  flatList: {
    alignItems: 'center',
    marginTop: 20,
  },
  
});
