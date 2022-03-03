import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';
import styles from './MessageCard.style';

export default function MessageCard({message, onDislike}) {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{message.userName}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <Text style={styles.content}>{message.text}</Text>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.dislike_container} onPress={onDislike}>
          {!!message.dislike && (
            <View style={styles.dislike_count_container}>
              <Text style={styles.dislike_count_text}>{message.dislike}</Text>
            </View>
          )}
          <Text style={styles.dislike_text}>bane ne?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
