import React, { useState, useEffect } from 'react';
import {  Text, View, StyleSheet } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import * as Location from 'expo-location';

type LocationType = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

export default function HomeScreen() {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const options = { accuracy: 6, distanceInterval: 0.3 };

      Location.watchPositionAsync(options, (location: LocationType) => {
        setLocation(location);
      });
    })();
  }, []);

  const region: Region | undefined = location
    ? {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.002,
        longitudeDelta: 0.0001,
      }
    : undefined;

  return (
    <View style={styles.container}>
      {location && (
        <MapView style={styles.map} region={region}>
        
        </MapView>
      )}
      {errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
