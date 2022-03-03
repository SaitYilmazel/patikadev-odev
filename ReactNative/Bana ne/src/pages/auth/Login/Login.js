import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Formik, ErrorMessage} from 'formik';
import {object, string} from 'yup';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import styles from './Login.style';
import {Input, Button, Loading} from './../../../components';
import authErrorMessageParser from './../../../utils/authErrorMessageParser';

const initialFormValues = {
  eMail: '',
  password: '',
};

const formValidationSchema = object({
  eMail: string().required('Lütfen E-postanızı giriniz.'),
  password: string()
    .required('Lütfen şifrenizi giriniz')
    .min(6, ({min}) => `Şifreniz en az ${min} karakterli olmalıdır.`),
});

export default function Login({navigation}) {
  const [loading, setLoading] = useState(false);

  function handleSignUp() {
    navigation.navigate('SignPage');
  }

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.eMail,
        formValues.password,
      );
      setLoading(false);
      navigation.navigate('MessagesPage');
    } catch (err) {
      console.log(err);
      showMessage({
        message: authErrorMessageParser(err.code),
        type: 'danger',
      });
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bana ne?</Text>
      <Formik
        initialValues={initialFormValues}
        validationSchema={formValidationSchema}
        onSubmit={handleFormSubmit}>
        {({values, errors, touched, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.eMail}
              placeholder="E-postanızı giriniz..."
              onChangeText={handleChange('eMail')}
            />

            <ErrorMessage name="eMail">
              {msg => <Text style={styles.errorText}>{msg}</Text>}
            </ErrorMessage>

            <Input
              value={values.password}
              placeholder="Şifrenizi giriniz..."
              onChangeText={handleChange('password')}
              isSecure
            />

            <ErrorMessage name="password">
              {msg => <Text style={styles.errorText}>{msg}</Text>}
            </ErrorMessage>

            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
    </View>
  );
}
