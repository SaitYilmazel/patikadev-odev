import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animation}
        source={require('./../../assets/loading.json')}
        autoPlay
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  animation: {
    height: 100,
  },
});
