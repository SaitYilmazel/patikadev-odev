import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';

import {Button} from './components';

export default function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  function addToList() {
    if (!text) {
      return;
    }
    setList([...list, text]);
  }

  const renderElements = ({item}) => <Text>{item}</Text>;
  return (
    <View style={styles.container}>
      <FlatList
        testID="list"
        data={list}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderElements}
      />
      <TextInput
        testID="input"
        style={styles.input}
        placeholder="Add..."
        onChangeText={setText}
      />
      <Button title="Add" onPress={addToList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: '#e0e0e0',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
});
