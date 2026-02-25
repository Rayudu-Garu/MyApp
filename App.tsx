import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen';

const App = () => {
  const [route, setRoute] = useState<'Login' | 'Home'>('Login');

  const navigation = {
    navigate: (name: string) => setRoute(name as any),
    replace: (name: string) => setRoute(name as any),
  } as any;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          {route === 'Login' && <LoginScreen navigation={navigation} />}
          {route === 'Home' && <HomeScreen navigation={navigation} />}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height:'100%',
    top:40,
    
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333',
    width:'100%',
    textAlign:'center'
  },
});

export default App;
