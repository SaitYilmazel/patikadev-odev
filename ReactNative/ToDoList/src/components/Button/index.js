import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function Button(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={props.onFocus}
        style={props.onFocus ? styles.button : styles.focusButton}
        onPress={props.onClick}>
        <Text style={styles.text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
}
