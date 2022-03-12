import React, {useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

import {Button, Input} from './../../../components';
import {authBackgroundImg, registrationImg} from './../../../assets/Image';
import useAuth from '../../../hooks/useAuth';
import styles from './Register.style';
import {showMessage} from 'react-native-flash-message';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const {UserSignUp} = useAuth();

  function handleLogin() {
    if (email !== '' || password !== '' || rePassword !== '') {
      if (password === rePassword) {
        UserSignUp(email, password).then(() => navigation.navigate('HomePage'));
      } else {
        showMessage({
          message: 'Passwords are different',
          type: 'danger',
          style: {height: 80, justifyContent: 'center'},
        });
      }
    } else {
      showMessage({
        message: 'Please enter e-mail, password and repassword.',
        type: 'danger',
        style: {height: 80, justifyContent: 'center'},
      });
    }
  }

  return (
    <ImageBackground source={authBackgroundImg} style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title}>Register</Text>
        <Image style={styles.image} source={registrationImg} />
      </View>
      <View style={styles.body_container}>
        <Input icon="email" placeholder={'Email'} onChangeText={setEmail} />
        <Input
          icon="lock"
          placeholder={'Password'}
          onChangeText={setPassword}
          secret
        />
        <Input
          icon="lock"
          placeholder={'Repassword'}
          onChangeText={setRePassword}
          secret
        />
        <Button text="Register" onPress={handleLogin} />
      </View>
    </ImageBackground>
  );
}
