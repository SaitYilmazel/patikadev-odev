import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import {Input, FloatingButton, MessageCard} from './../../components';
import {MessageParser} from './../../utils/dataParser';
import styles from './Messages.style';

export default function Messages({navigation, route}) {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params,
    });
  }, [route]);

  useEffect(() => {
    database()
      .ref(`/rooms/${route.params}/messages`)
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = MessageParser(contentData || {});
        setData(parsedData);
      });
  }, []);

  function handleSendMessage() {
    const {email} = auth().currentUser;
    const contentObj = {
      userName: email.split('@')[0],
      userMail: email,
      value: text,
      date: new Date().toISOString(),
      like: 0,
    };
    database().ref(`/rooms/${route.params}/messages/`).push(contentObj);
    setText(null);
  }

  function onPressLike(item) {
    database()
      .ref(`/rooms/${route.params}/messages/${item.id}`)
      .update({like: item.like + 1});
  }

  const renderMessage = ({item}) => (
    <MessageCard data={item} onPressLike={() => onPressLike(item)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={data}
        renderItem={renderMessage}
      />
      <View style={styles.footer_container}>
        <Input value={text} placeholder="Message" onChangeText={setText} />
        <FloatingButton
          icon="send"
          iconSize={24}
          iconColor="#fff"
          onPress={handleSendMessage}
        />
      </View>
    </View>
  );
}
