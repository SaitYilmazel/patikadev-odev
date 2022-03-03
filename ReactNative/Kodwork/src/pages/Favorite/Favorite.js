import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {FavoriteCard} from './../../components';

export default function Favorite({navigation}) {
  const data = useSelector(state => state.jobs);
  const dispatch = useDispatch();

  function handlePress(id, title) {
    navigation.navigate('DetailPage', {id, title});
  }

  function handleRemove(id) {
    dispatch({type: 'REMOVE_JOB', payload: {id}});
  }

  const renderFavorite = ({item}) => (
    <FavoriteCard
      jobs={item}
      onPress={() => handlePress(item.id, item.title)}
      onRemove={() => handleRemove(item.id)}
    />
  );

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderFavorite}
      />
    </View>
  );
}
