import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from './FavoriteCard.style';

export default function FavoriteCard({jobs, onPress, onRemove}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{jobs.title}</Text>
        <Text style={styles.company}>{jobs.company}</Text>
        <Text style={styles.location}>{jobs.location}</Text>
        <Text style={styles.level}>{jobs.level}</Text>
        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
