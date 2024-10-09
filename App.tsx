import {StatusBar} from 'react-native';
import React from 'react';
import {Colors} from './src/Constant/Colors';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './src/Navigation/MainNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <MainNavigation />
    </SafeAreaProvider>
  );
};

export default App;
