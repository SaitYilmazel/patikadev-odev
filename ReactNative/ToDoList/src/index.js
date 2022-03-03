import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, StyleSheet, Alert} from 'react-native';

import ToDoCard from './components/Card';
import SearchBar from './components/SearchBar';
import CustomButton from './components/Button';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [text, setText] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const [textFocus, setTextFocus] = useState(true);
  const markedLength = toDoList.filter(item => item.status === true).length;
  const renderSong = ({item}) => (
    <ToDoCard list={item} onClick={onPressed} onLongPress={onLongPress} />
  );

  useEffect(() => {
    async function readData() {
      const getList = await AsyncStorage.getItem('toDoList');
      if (getList !== null) {
        setToDoList(JSON.parse(getList));
      }
    }
    readData();
  }, []);

  useEffect(() => {
    if (toDoList.length > 0) {
      const saveData = async () => {
        await AsyncStorage.setItem('toDoList', JSON.stringify(toDoList));
      };
      saveData();
    }
  }, [toDoList]);

  function handleSearch(textValue) {
    setText(textValue);
    setTextFocus(false);
  }

  function handleSubmit() {
    const isTextSame = toDoList.some(item => item.text === text);
    if (text === ' ') {
      Alert.alert('Please fill this field');
    } else if (isTextSame) {
      Alert.alert('This event already exists.');
    } else {
      setToDoList([...toDoList, {id: toDoList.length, text, status: true}]);
    }
    setTextFocus(true);
    setText('');
  }

  function onPressed(cardId, statusChanged) {
    setToDoList(
      toDoList.map(item =>
        item.id === cardId ? {...item, status: statusChanged} : item,
      ),
    );

    AsyncStorage.getItem('toDoList')
      .then(JSON.parse)
      .then(data =>
        data.map(item =>
          item.id === cardId ? {...item, status: statusChanged} : item,
        ),
      )
      .then(newData =>
        AsyncStorage.setItem('toDoList', JSON.stringify(newData)),
      );
  }

  function onLongPress(cardId) {
    const remove = toDoList.filter(item => item.id !== cardId);
    setToDoList(remove);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.count}>{markedLength}</Text>
      </View>
      <FlatList
        data={toDoList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderSong}
      />
      <View style={styles.content_entry_container}>
        <View style={styles.inner_content_entry_container}>
          <SearchBar onSearch={handleSearch} textValue={text} />
          <CustomButton onClick={handleSubmit} onFocus={textFocus} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#0f2027'},
  header_container: {flexDirection: 'row', alignItems: 'center', margin: 10},
  title: {fontSize: 30, fontWeight: 'bold', color: '#fea500'},
  count: {
    right: 2,
    bottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    height: 25,
    width: 25,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  content_container: {},
  content_entry_container: {
    justifyContent: 'flex-end',
  },
  inner_content_entry_container: {
    backgroundColor: '#36474f',
    margin: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  separator: {width: '100%', height: 1, backgroundColor: '#cccccc'},
});
