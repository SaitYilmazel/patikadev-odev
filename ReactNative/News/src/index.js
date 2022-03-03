import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import NewsCard from './components/Card';
import Banner from './components/Banner';

import news_data from './data/news_data.json';

export default function App() {
  const renderNews = ({item}) => <NewsCard news={item} />;
  const headerBanner = () => <Banner />;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        data={news_data}
        keyExtractor={item => item.u_id.toString()}
        ListHeaderComponent={headerBanner}
        renderItem={renderNews}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    margin: 5,
    marginLeft: 10,
  },
});
