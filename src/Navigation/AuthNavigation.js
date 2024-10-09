import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../Screen/Signup/Signup';

const AuthStack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
}
