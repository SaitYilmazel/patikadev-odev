import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

import {Button} from './../../../components';
import {authBackgroundImg,welcomingImg} from './../../../assets/Image'
import styles from './Welcome.style';

export default function Welcome({navigation}) {
  function handleRegister() {
    navigation.navigate('RegisterPage');
  }

  function handleLogin() {
    navigation.navigate('LoginPage');
  }

  return (
    <ImageBackground
      source={authBackgroundImg}
      style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.title}>CodeTalks</Text>
        <Image
          style={styles.welcomeImg}
          source={welcomingImg}
        />
        <Button text="Register" onPress={handleRegister} />
        <Button text="Login" theme="secondary" onPress={handleLogin} />
      </View>
    </ImageBackground>
  );
}
