import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

export default function SearchBar(props) {
  return (
    <View>
      <TextInput
        style={styles.search}
        placeholder="Ara..."
        onChangeText={props.onSearch}
      />
    </View>
  );
}
