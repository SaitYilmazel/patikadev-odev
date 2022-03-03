import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './Products.style';
import Config from 'react-native-config';

import ProductCard from './../../components/ProductCard/ProductCard';
import useFetch from './../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

export default function Products({navigation}) {
  const {loading, data, error} = useFetch(Config.API_PRODUCT_URL);

  function handleProductSelect(id) {
    navigation.navigate('DetailScreen', {id});
  }

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data} renderItem={renderProduct} />;
}
