import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './Categories.style';
import Config from 'react-native-config';

import CategoryCard from '../../components/Card/CategoriesCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

export default function Products({navigation}) {
  const {loading, data, error} = useFetch(Config.CATEGORIES_URL);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  function handleCategorySelect(categoryName) {
    navigation.navigate('MealsScreen', {categoryName});
  }

  const renderCategory = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </View>
  );
}
