import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome5";

const App = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const gasStations = [
    { id: 1, latitude: 37.78925, longitude: -122.4314 },
    { id: 2, latitude: 37.78725, longitude: -122.4354 },
    { id: 3, latitude: 37.78525, longitude: -122.4334 },
  ];

  return (
    <View className="flex-1 bg-black">
      {/* Header */}
      <View className="absolute top-0 w-full p-4 z-10">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity>
            <Icon name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-semibold">Near by workshop</Text>
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center mt-4 bg-gray-800 rounded-full px-4 py-2">
          <TextInput
            placeholder="Search"
            placeholderTextColor="gray"
            className="text-white flex-1 pr-2"
          />
          <TouchableOpacity>
            <Icon name="sync" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Map */}
      <MapView
        style={{ flex: 1 }}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        {gasStations.map((station) => (
          <Marker
            key={station.id}
            coordinate={{
              latitude: station.latitude,
              longitude: station.longitude,
            }}
            title="Gas Station"
          >
            <Icon name="gas-pump" size={20} color="red" />
          </Marker>
        ))}
      </MapView>

      {/* Floating Action Buttons */}
      <View className="absolute bottom-40 right-4 flex items-center">
        <TouchableOpacity className="mb-4 bg-red-500 p-3 rounded-full">
          <Icon name="plus" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-red-500 p-3 rounded-full">
          <Icon name="location-arrow" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
    </View>
  );
};

export default App;
