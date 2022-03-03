import React from 'react';
import {View, FlatList} from 'react-native';
import Config from 'react-native-config';

import styles from './Home.style';
import {Loading, Error, JobsCard} from './../../components';
import useFetch from '../../hook/useFetch';

export default function Home({navigation}) {
  const {data, loading, error} = useFetch(`${Config.API_JOB_URL}?page=1`);

  function handlePress(id, title) {
    navigation.navigate('DetailPage', {id, title});
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const renderJob = ({item}) => (
    <JobsCard jobs={item} onPress={() => handlePress(item.id, item.name)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderJob}
      />
    </View>
  );
}
