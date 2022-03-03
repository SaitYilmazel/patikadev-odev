import React, {useState} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

import {Input, Button} from './../../../components';

import styles from './ContentInputModal.style';

export default function ContentInputModal({visible, onClose, onSend}) {
  const [text, setText] = useState(null);

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
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection="down">
      <View style={styles.container}>
        <Input
          placeholder="Darla hadi milleti..."
          onChangeText={msg => setText(msg)}
          multiline
        />
        <Button text="Gönder" onPress={handleSend} />
      </View>
    </Modal>
  );
}
