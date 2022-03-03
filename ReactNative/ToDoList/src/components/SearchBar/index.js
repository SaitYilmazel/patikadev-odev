import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

export default function SearchBar(props) {
  return (
    <View>
      <TextInput
        value={props.textValue}
        style={styles.textInput}
        placeholder="Yapılacak..."
        onChangeText={props.onSearch}
      />
    </View>
  );
}
