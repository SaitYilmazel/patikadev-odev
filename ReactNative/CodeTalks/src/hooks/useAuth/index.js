import {GoogleSignin} from '@react-native-google-signin/google-signin';
import FirebaseAuth from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';

export default function useAuth() {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    FirebaseAuth().onAuthStateChanged(user => setUserSession(!!user));
  }, []);

  const UserSignUp = async (email, password) => {
    return await FirebaseAuth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        return response.user;
      });
  };

  const UserSignIn = async (email, password) => {
    return await FirebaseAuth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        return response.user;
      });
  };

  const UserSignInWithGoogle = async () => {
    GoogleSignin.configure({
      webClientId:
        '214151894823-rh7jirfpn6nrop4ucphjrabq4rbsum38.apps.googleusercontent.com',
    });
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential =
      FirebaseAuth.GoogleAuthProvider.credential(idToken);

    return FirebaseAuth()
      .signInWithCredential(googleCredential)
      .then(response => {
        return response.user;
      });
  };

  const UserSignOut = () => {
    return FirebaseAuth().signOut();
  };

  const UserPasswordReset = email => {
    return FirebaseAuth().sendPasswordResetEmail(email);
  };

  return {
    userSession,
    UserSignUp,
    UserSignIn,
    UserSignInWithGoogle,
    UserSignOut,
    UserPasswordReset,
  };
}
