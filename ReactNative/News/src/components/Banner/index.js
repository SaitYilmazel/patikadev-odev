import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import styles from './styles';

import news_banner_data from './../../data/news_banner_data.json';

export default function Banner() {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        invertStickyHeaders={true}>
        {news_banner_data.map(bannerNews => (
          <Image
            key={bannerNews.id}
            style={styles.banner_Image}
            source={{uri: bannerNews.imageUrl}}
          />
        ))}
      </ScrollView>
    </View>
  );
}
