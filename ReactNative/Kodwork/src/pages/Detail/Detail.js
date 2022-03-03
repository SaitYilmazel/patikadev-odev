import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  Alert,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';

import {Loading, Error} from './../../components';
import useFetch from '../../hook/useFetch';
import styles from './Detail.style';

export default function Detail({navigation, route}) {
  const {data, loading, error} = useFetch(
    `${Config.API_JOB_URL}/${route.params.id}`,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, [navigation, route]);

  const source = {
    html: data.contents,
  };

  const {width} = useWindowDimensions();
  const dispatch = useDispatch();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  function handleFavorite() {
    dispatch({
      type: 'SET_JOB',
      payload: {
        id: data.id,
        title: data.name,
        company: data.company.name,
        location: data.locations[0].name,
        level: data.levels[0].name,
      },
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.text_container}>
          <Text style={styles.text}>Location: </Text>
          <Text style={styles.value}>{data.locations[0].name}</Text>
        </View>

        <View style={styles.text_container}>
          <Text style={styles.text}>Job Level: </Text>
          <Text style={styles.value}>{data.levels[0].name}</Text>
        </View>
        <Text style={styles.detail}>Job Detail</Text>
      </View>
      <ScrollView style={styles.html_container}>
        <RenderHtml contentWidth={width} source={source} />
      </ScrollView>
      <View style={styles.footer_container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert(
              `${data.name} / ${data.levels[0].name}`,
              'Başvurunuz alınmıştır.',
            );
          }}>
          <Icon name="logout" color="#fff" size={24} />
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleFavorite}>
          <Icon name="heart" color="#fff" size={24} />
          <Text style={styles.buttonText}>Favorite Job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
