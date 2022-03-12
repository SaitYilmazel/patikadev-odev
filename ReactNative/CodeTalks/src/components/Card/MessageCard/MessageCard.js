import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {formatDistance, parseISO} from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {tr} from 'date-fns/locale';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import styles from './MessageCard.style';

export default function MessageCard({data, onPressLike}) {
  const formattedDate = formatDistance(parseISO(data.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  const {email} = auth().currentUser;

  return (
    <View
      style={
        data.userName === email.split('@')[0]
          ? styles.userContainer
          : styles.container
      }>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{data.userName}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <Text style={styles.content}>{data.value}</Text>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.like_container} onPress={onPressLike}>
          {!!data.like && (
            <View style={styles.like_count_container}>
              <Text style={styles.like_count_text}>{data.like}</Text>
            </View>
          )}

          <Icon name="heart" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
