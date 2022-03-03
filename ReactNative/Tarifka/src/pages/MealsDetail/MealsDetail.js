import React from 'react';
import {View, FlatList} from 'react-native';
import Config from 'react-native-config';
import styles from './MealsDetail.style';

import MealsDetailCard from '../../components/Card/MealsDetailCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch';

export default function MealsDetail({route}) {
  const {mealId} = route.params;
  const {loading, data, error} = useFetch(`${Config.MEALS_DETAIL}${mealId}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const renderMealsDetail = ({item}) => <MealsDetailCard mealsDetail={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        keyExtractor={item => item.idMeal}
        renderItem={renderMealsDetail}
      />
    </View>
  );
}
