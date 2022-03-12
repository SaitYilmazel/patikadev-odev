import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './RoomCard.style';

export default function RoomCard({data, onPress}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.6}>
      <Text style={styles.text}>{data.roomName}</Text>
    </TouchableOpacity>
  );
}
