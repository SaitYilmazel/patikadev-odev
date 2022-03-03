import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import SongCard from './components/Card';
import SearchBar from './components/SearchBar';

import music_data from './data/music_data.json';

export default function App() {
  const [musicList, setMusicList] = useState(music_data);

  const renderSong = ({item}) => <SongCard song={item} />;
  const itemSeparator = () => <View style={styles.separator} />;

  function handleSearch(textValue) {
    let textFiltered = music_data.filter(
      item => item.title.toLowerCase().indexOf(textValue.toLowerCase()) > -1,
    );
    setMusicList(textFiltered);
  }

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={musicList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderSong}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  separator: {width: '100%', height: 1, backgroundColor: '#cccccc'},
});
