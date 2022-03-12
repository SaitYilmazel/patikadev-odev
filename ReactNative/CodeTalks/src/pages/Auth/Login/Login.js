import React, {useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {showMessage} from 'react-native-flash-message';

import {Button, Input} from './../../../components';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {authBackgroundImg, humanImg} from './../../../assets/Image';
import useAuth from '../../../hooks/useAuth';
import styles from './Login.style';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {UserSignIn, UserSignInWithGoogle} = useAuth();

  function handleLogin() {
    if (email !== '' || password !== '') {
      UserSignIn(email, password).then(() => navigation.navigate('HomePage'));
    } else {
      showMessage({
        message: 'Please enter e-mail and password.',
        type: 'danger',
        style: {height: 80, justifyContent: 'center'},
      });
    }
  }

  function SignInWithGoogle() {
    UserSignInWithGoogle().then(() => navigation.navigate('HomePage'));
  }

  function forgotPassword() {
    navigation.navigate('ResetPasswordPage');
  }

  return (
    <ImageBackground source={authBackgroundImg} style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title}>Login</Text>
        <Image style={styles.image} source={humanImg} />
      </View>
      <View style={styles.body_container}>
        <Input icon="email" placeholder={'Email'} onChangeText={setEmail} />
        <Input
          icon="lock"
          placeholder={'Password'}
          onChangeText={setPassword}
          secret
        />
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button text="Login" onPress={handleLogin} />
      </View>
      <View style={styles.footer_container}>
        <Text>OR</Text>
        <GoogleSigninButton
          style={styles.googleButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={SignInWithGoogle}
        />
      </View>
    </ImageBackground>
  );
}
