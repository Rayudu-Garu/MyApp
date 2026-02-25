import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';
import FarmerScreen from './src/components/FamerScreen';
import BuildingRentals from './src/components/BuildingRentals';
import PainterScreen from './src/components/PainterScreen'
const App = () => {

  // ✅ include Farmer
  const [route, setRoute] = useState('Login');

  const navigation = {
    navigate: (name) => setRoute(name),
    replace: (name) => setRoute(name),
    goBack: () => setRoute('Home') // ✅ back support
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>

          {route === 'Login' && <LoginScreen navigation={navigation} />}
          {route === 'Home' && <HomeScreen navigation={navigation} />}
          {route === 'Farmer' && <FarmerScreen navigation={navigation} />}
          {route === 'BuildingRentals' && <BuildingRentals navigation={navigation} />}
          {route === 'PainterScreen' && <PainterScreen navigation={navigation} />}


        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  safe:{ flex:1 },
  container:{ flex:1, backgroundColor:'#fff' }
});