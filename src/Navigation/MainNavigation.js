import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ActivityIndicator} from 'react-native';
import SuplashScreen from '../Screen/SuplashScreen';
import OnboardingScreen from '../Screen/OnboardingScreen/OnboardingScreen';
import AuthNavigation from './AuthNavigation';

const mainStack = createNativeStackNavigator();

function MainNavigation() {
  // useEffect(() => {
  //   configAxiosHeaders(user?.token);
  // }, [user]);

  return (
    <NavigationContainer
    // linking={linking}
    // fallback={<ActivityIndicator animating />}
    >
      <mainStack.Navigator
        initialRouteName={'SplashScreen'}
        screenOptions={{headerShown: false}}>
        {/* <mainStack.Screen name="SplashScreen" component={SuplashScreen} /> */}
        <mainStack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
        />
        <mainStack.Screen name="AuthNavigation" component={AuthNavigation} />
        {/* <mainStack.Screen
          name="CommonNavigation"
          component={CommonNavigation}
        /> */}
      </mainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
