import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import database from '@react-native-firebase/database';

import {FloatingButton, RoomModal, RoomCard} from './../../components';
import styles from './Home.style';
import {RoomParser} from './../../utils/dataParser';

export default function Home({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    database()
      .ref('/rooms')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = RoomParser(contentData || {});
        setData(parsedData);
      });
  }, []);

  function handleToggleButton() {
    setModalVisible(!modalVisible);
  }

  function handleSubmit(text) {
    database()
      .ref('/rooms')
      .once('value', snapshot => {
        const contentData = snapshot.val();
        if (contentData !== null) {
          let room = Object.keys(contentData).some(
            item => text.toLowerCase() === item.toLowerCase(),
          );
          console.log(room);
          if (!room) {
            database().ref(`/rooms/${text}/messages`).set('');
          }
        } else {
          database().ref(`/rooms/${text}/messages`).set('');
        }
      });
    setModalVisible(false);
  }

  function handleRoom(item) {
    navigation.navigate('MessagePage', item.roomName);
  }

  const renderRoom = ({item}) => (
    <RoomCard data={item} onPress={() => handleRoom(item)} />
  );

  return (
    <View style={styles.container}>
      <FloatingButton
        iconSize={25}
        iconColor="#fff"
        icon="plus"
        onPress={handleToggleButton}
      />
      <RoomModal
        visible={modalVisible}
        onClose={handleToggleButton}
        onSend={handleSubmit}
      />
      <FlatList numColumns={2} data={data} renderItem={renderRoom} />
    </View>
  );
}
