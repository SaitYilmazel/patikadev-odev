import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import styles from './Messages.style';
import parseContentData from '../../utils/parseContentData';
import {
  FloatingButton,
  ContentInputModal,
  MessageCard,
} from './../../components';

export default function Messages() {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('/messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;
    const contentObj = {
      text: content,
      userName: userMail.split('@')[0],
      dislike: 0,
      date: new Date().toISOString(),
    };

    database().ref('/messages/').push(contentObj);
  }

  function handleDislike(item) {
    database()
      .ref(`/messages/${item.id}/`)
      .update({dislike: item.dislike + 1});
  }

  const renderContent = ({item}) => (
    <MessageCard message={item} onDislike={() => handleDislike(item)} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent} />
      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </View>
  );
}
