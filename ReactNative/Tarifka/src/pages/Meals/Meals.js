import React from 'react';
import {View, FlatList} from 'react-native';
import Config from 'react-native-config';
import styles from './Meals.style';

import MealsCard from '../../components/Card/MealsCard/MealsCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

export default function Meals({navigation, route}) {
  const {categoryName} = route.params;
  const {data, loading, error} = useFetch(`${Config.MEALS_URL}${categoryName}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  function handleMealSelect(mealId) {
    navigation.navigate('MealsDetailScreen', {mealId});
  }

  const renderMeal = ({item}) => (
    <MealsCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderMeal}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
}
