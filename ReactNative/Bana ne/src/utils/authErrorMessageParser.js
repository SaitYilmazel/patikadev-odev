export default function (errorCode) {
  switch (errorCode) {
    case 'auth/email-already-exists':
      return 'E-posta adresi mevcut.';

    case 'auth/email-already-in-use':
      return 'E-posta adresi kullanılıyor.';

    case 'auth/invalid-email':
      return 'Geçersiz e-posta adresi.';

    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı.';

    case 'auth/weak-password':
      return 'Parola çok zayıf.';

    case 'auth/wrong-password':
      return 'Parola geçersiz.';

    default:
      return errorCode;
  }
}
