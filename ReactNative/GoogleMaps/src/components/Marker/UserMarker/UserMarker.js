import React from 'react';
import {Image} from 'react-native';
import {Marker} from 'react-native-maps';

import styles from './UserMarker.style';

export default function UserMarker({coordinates, onSelect, userImageURL}) {
  return (
    <Marker coordinate={coordinates} onPress={onSelect}>
      <Image style={styles.image} source={{uri: userImageURL}} />
    </Marker>
  );
}
