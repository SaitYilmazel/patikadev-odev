import React, {useState} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

import {Button, Input} from './../../../components';
import styles from './RoomModal.style';

export default function RoomModal({visible, onClose, onSend}) {
  const [text, setText] = useState('');

  function handleSend() {
    if (!text) {
      return;
    }
    onSend(text);
    setText(null);
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <Input
          value={text}
          placeholder="Room name"
          onChangeText={msg => setText(msg)}
        />
        <Button text="Submit" onPress={handleSend} />
      </View>
    </Modal>
  );
}
