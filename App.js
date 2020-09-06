import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import Titulo from "./app/components/Titulo";
import MapView, { Marker } from "react-native-maps";

/*const MarkerPersonalizado = () => (
  <View
    style={{
      paddingVertical: 10,
      paddingHorizontal: 30,
      backgroundColor: "#007bff",
      borderColor: "#eee",
      borderRadius: 5,
      elevation: 10
    }}
  >
    <Text style={{ color: "#fff" }}>Posicion Fer</Text>
  </View>
);*/


const App = () => {

  const LATITUDE = -11.964988435826776;
  const LONGITUDE = -77.07672668451737;

  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02
  });

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
    >
      <Marker coordinate={{ latitude: LATITUDE, longitude: LONGITUDE }} 
      image={require("./assets/coche.png")} 
      />
    </MapView>
  );
};

export default App;