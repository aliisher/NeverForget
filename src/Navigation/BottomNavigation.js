import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontSize, Fonts} from '../Constant/Fonts';
import {Colors} from '../Constant/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {wp} from '../Constant/Responsive';
import Home from '../Screen/Home/Home';

const BottomStack = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <BottomStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors.green,
        tabBarInactiveTintColor: Colors.darkBlack,
        tabBarStyle: {
          backgroundColor: Colors.white,
        },
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontFamily: Fonts.regular,
          fontSize: FontSize.XXXS,
          color: Colors.lightBlack,
        },
      }}>
      <BottomStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon
                name="home" // Icon name for home (from Ionicons)
                size={wp(7)}
                color={Colors.green} // Active color
              />
            ) : (
              <Icon
                name="home-outline" // Icon name for inactive home (from Ionicons)
                size={wp(7)}
                color={Colors.darkBlack} // Inactive color
              />
            ),
        }}
      />
      <BottomStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Icon
                name="list" // Icon name for Groovy Feeds (from Ionicons)
                size={wp(7)}
                color={Colors.green} // Active color
              />
            ) : (
              <Icon
                name="list-outline" // Icon name for inactive Groovy Feeds (from Ionicons)
                size={wp(7)}
                color={Colors.darkBlack} // Inactive color
              />
            ),
        }}
      />
    </BottomStack.Navigator>
  );
}
