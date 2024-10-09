import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../Constant/Colors';
import {hp} from '../../Constant/Responsive';

const Home = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon
          name="search"
          size={20}
          color={Colors?.black}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search your pins"
          placeholderTextColor={Colors?.primary_black}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      {/* <TextInput
        style={styles.searchBar}
        placeholder="Search your pins"
        value={searchText}
        onChangeText={setSearchText}
      /> */}

      {/* Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749, // Example: Latitude for San Francisco
          longitude: -122.4194, // Example: Longitude for San Francisco
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* Markers */}
        <Marker
          coordinate={{latitude: 37.7749, longitude: -122.4194}}
          title={'Location 1'}
          description={'This is a description'}
        />
        <Marker
          coordinate={{latitude: 37.7749, longitude: -121.4194}}
          title={'Location 2'}
          description={'Another location'}
        />
      </MapView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    height: hp(7),
    backgroundColor: 'white',
    borderRadius: hp(10),
    paddingHorizontal: 15,
    zIndex: 1, // Keep the search bar above the map
    elevation: 5, // Add shadow for Android
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject, // Fill the whole screen
  },
});
