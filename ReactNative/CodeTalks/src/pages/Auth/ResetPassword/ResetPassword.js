import React, {useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from './../../../utils/authErrorMessageParser';

import {Button, Input} from './../../../components';
import {authBackgroundImg, welcomingImg} from './../../../assets/Image';
import useAuth from '../../../hooks/useAuth';
import styles from './ResetPassword.style';

export default function ResetPassword({navigation}) {
  const [email, setEmail] = useState('');

  const {UserPasswordReset} = useAuth();

  function handleSend() {
    if (email !== '') {
      UserPasswordReset(email)
        .then(() =>
          showMessage({
            message: 'Password reset sent to your email.',
            type: 'success',
            style: {height: 80, justifyContent: 'center'},
          }),
        )
        .catch(err =>
          showMessage({
            message: authErrorMessageParser(err.code),
            type: 'danger',
            style: {height: 80, justifyContent: 'center'},
          }),
        );
    } else {
      showMessage({
        message: 'Please enter e-mail',
        type: 'danger',
        style: {height: 80, justifyContent: 'center'},
      });
    }
  }

  return (
    <ImageBackground source={authBackgroundImg} style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.title}>Forgot Password?</Text>
        <Image style={styles.image} source={welcomingImg} />
        <Input icon="email" placeholder={'Email'} onChangeText={setEmail} />
        <Button text="Send" onPress={handleSend} />
      </View>
    </ImageBackground>
  );
}
