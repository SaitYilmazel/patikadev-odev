import React from 'react';
import {View, Image, Text, Alert} from 'react-native';
import {Formik} from 'formik';
import {object, string} from 'yup';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';

import styles from './Login.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import usePost from '../../hooks/usePost/usePost';

export default function Login({navigation}) {
  const {data, post, loading, error} = usePost();
  const dispatch = useDispatch();

  const loginValidationSchema = object({
    username: string().required('Lütfen kullanıcı adını giriniz.'),
    password: string()
      .min(6, ({min}) => `Şifre en az ${min} karakter olmalı.`)
      .required('Lütfen şifrenizi giriniz.'),
  });

  function handleLogin(values) {
    post(`${Config.API_AUTH_URL}/login`, values);
  }

  if (error) {
    Alert.alert('Dükkan', 'Bir hata oluştu.');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Dükkan', 'Kullanıcı bulunamadı.');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('./../../assets/login-logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        validationSchema={loginValidationSchema}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adınızı giriniz..."
              value={values.username}
              onChangeText={handleChange('username')}
              iconName="account"
            />
            {errors.username && touched.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}
            <Input
              placeholder="Şifrenizi giriniz..."
              value={values.password}
              onChangeText={handleChange('password')}
              iconName="key"
              isSecure
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const user = {
  address: {
    geolocation: {
      lat: '50.3467',
      long: '-20.1310',
    },
    city: 'San Antonio',
    street: 'Hunters Creek Dr',
    number: 6454,
    zipcode: '98234-1734',
  },
  id: 4,
  email: 'don@gmail.com',
  username: 'donero',
  password: 'ewedon',
  name: {
    firstname: 'don',
    lastname: 'romer',
  },
  phone: '1-765-789-6734',
  __v: 0,
};
