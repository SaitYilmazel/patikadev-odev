import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import styles from './MealsDetailCard.style';

export default function MealsCard({mealsDetail}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: mealsDetail.strMealThumb}} />
      <View style={styles.title_container}>
        <Text style={styles.title}>{mealsDetail.strMeal}</Text>
        <Text style={styles.area}>{mealsDetail.strArea}</Text>
      </View>
      <Text style={styles.instructions}>{mealsDetail.strInstructions}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(mealsDetail.strYoutube)}>
        <Text style={styles.buttonText}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
}
