import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ProductCard from './components/Card';
import SearchBar from './components/SearchBar';

import product_data from './data/product_data.json';

export default function App() {
  const [products, setProducts] = useState(product_data);
  const renderNews = ({item}) => <ProductCard product={item} />;

  const handleSearch = text => {
    const filteredList = product_data.filter(item => {
      const searchText = text.toLowerCase();
      const currentTittle = item.title.toLocaleLowerCase();
      return currentTittle.indexOf(searchText) > -1;
    });
    setProducts(filteredList);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderNews}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#80007f',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  search: {
    backgroundColor: '#ebeff1',
    borderRadius: 10,
    paddingLeft: 15,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});
