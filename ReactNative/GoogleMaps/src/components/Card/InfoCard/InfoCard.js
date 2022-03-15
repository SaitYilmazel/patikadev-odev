import React from 'react';
import {View, Text, Image} from 'react-native';
import Modal from 'react-native-modal';

import styles from './InfoCard.style';

export default function InfoCard({visible, onClose, user}) {
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      backdropOpacity={0.3}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: user.avatar}} />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>
            First Name: <Text style={styles.textValue}>{user.first_name}</Text>
          </Text>
          <Text style={styles.textName}>
            Last Name: <Text style={styles.textValue}>{user.last_name}</Text>
          </Text>
        </View>
        <Text style={styles.textName}>
          Gender: <Text style={styles.textValue}>{user.gender}</Text>
        </Text>
        <Text style={styles.textName}>
          Phone Number:{' '}
          <Text style={styles.textValue}>{user.phone_number}</Text>
        </Text>
        <Text style={styles.textName}>
          Email: <Text style={styles.textValue}>{user.email}</Text>
        </Text>
        <View style={styles.textContainer}>
          <Text style={styles.textName}>
            Country: <Text style={styles.textValue}>{user.country}</Text>
          </Text>
          <Text style={styles.textName}>
            City: <Text style={styles.textValue}>{user.city}</Text>
          </Text>
        </View>
        <Text style={styles.textName}>
          Street Name: <Text style={styles.textValue}>{user.street_name}</Text>
        </Text>
        <Text style={styles.textName}>
          Street Address:{' '}
          <Text style={styles.textValue}>{user.street_address}</Text>
        </Text>
      </View>
    </Modal>
  );
}
