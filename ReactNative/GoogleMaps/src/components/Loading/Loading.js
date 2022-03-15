import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './Loading.style';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="dodgerblue" size="small" />
    </View>
  );
}
