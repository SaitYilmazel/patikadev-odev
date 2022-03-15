import React, {useState, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import Config from 'react-native-config';

import {InfoCard, Loading, UserMarker} from './components';
import useFetch from './hooks/useFetch';

export default function App() {
  const [user, setUser] = useState();
  const [infoModalVisibility, setInfoModalVisibility] = useState();
  const {data, loading, error} = useFetch(Config.API_URL);
  const mapRef = useRef();

  const renderUserMarker = () => {
    return data.map(
      ({
        id,
        first_name,
        last_name,
        email,
        gender,
        phone_number,
        avatar,
        address: {coordinates, country, city, street_name, street_address},
      }) => {
        return (
          <UserMarker
            key={id}
            userImageURL={avatar}
            coordinates={{
              latitude: coordinates.lat,
              longitude: coordinates.lng,
            }}
            onSelect={() => {
              handleMarkerSelect(coordinates, {
                avatar,
                first_name,
                last_name,
                email,
                gender,
                phone_number,
                country,
                city,
                street_name,
                street_address,
              });
            }}
          />
        );
      },
    );
  };

  function handleMarkerSelect(coor, selectedUser) {
    setUser(selectedUser);
    handleModalVisibility();
    mapRef.current.animateToRegion({
      latitude: coor.lat,
      longitude: coor.lng,
      latitudeDelta: 7,
      longitudeDelta: 7,
    });
  }

  function handleModalVisibility() {
    setInfoModalVisibility(!infoModalVisibility);
  }

  return (
    <View style={styles.container}>
      <MapView ref={mapRef} style={styles.map}>
        {data && renderUserMarker()}
      </MapView>
      {loading && <Loading />}
      {user && (
        <InfoCard
          visible={infoModalVisibility}
          onClose={handleModalVisibility}
          user={user}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
