export default function (errorCode) {
  switch (errorCode) {
    case 'auth/email-already-exists':
      return 'Email already exists.';

    case 'auth/email-already-in-use':
      return 'Email already in use.';

    case 'auth/invalid-email':
      return 'Invalid email.';

    case 'auth/user-not-found':
      return 'User not found.';

    case 'auth/weak-password':
      return 'Weak password.';

    case 'auth/wrong-password':
      return 'Wrong password.';

    default:
      return errorCode;
  }
}
