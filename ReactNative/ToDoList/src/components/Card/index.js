import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function Card(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[props.list.status ? styles.button : styles.buttonPressed]}
        onPress={() => props.onClick(props.list.id, !props.list.status)}
        onLongPress={() => props.onLongPress(props.list.id)}>
        <Text style={props.list.status ? styles.text : styles.textPressed}>
          {props.list.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
