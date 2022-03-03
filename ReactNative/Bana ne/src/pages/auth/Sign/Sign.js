import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Formik, ErrorMessage} from 'formik';
import {object, string, ref} from 'yup';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import {Input, Button} from './../../../components';
import styles from './Sign.style';
import authErrorMessageParser from './../../../utils/authErrorMessageParser';

const initialFormValues = {
  eMail: '',
  password: '',
  repassword: '',
};

const formValidationSchema = object({
  eMail: string().required('Lütfen e-postanızı giriniz.'),
  password: string()
    .required('Lütfen şifrenizi giriniz.')
    .min(4, ({min}) => `Şifreniz en az ${min} karakterden oluşmalıdır.`),
  repassword: string()
    .required('Lütfen şifrenizi giriniz.')
    .min(6, ({min}) => `Şifreniz en az ${min} karakterden oluşmalıdır.`)
    .oneOf([ref('password'), null], 'Şifreler aynı olmalıdır.'),
});

export default function Sign({navigation}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleBack() {
    navigation.goBack();
  }

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.eMail,
        formValues.password,
      );
      showMessage({
        message: 'Kullanıcı oluşturuldu.',
        type: 'danger',
      });
      setLoading(false);
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

            <Input
              value={values.repassword}
              placeholder="Şifrenizi tekrar giriniz..."
              onChangeText={handleChange('repassword')}
              isSecure
            />

            <ErrorMessage name="repassword">
              {msg => <Text style={styles.errorText}>{msg}</Text>}
            </ErrorMessage>

            <Button
              text="Kayıt Ol"
              theme="secondary"
              onPress={handleSubmit}
              loading={loading}
            />
          </>
        )}
      </Formik>
      <Button text="Geri" onPress={handleBack} />
    </View>
  );
}
