import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontSize, Fonts} from '../Constant/Fonts';
import {Colors} from '../Constant/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {wp} from '../Constant/Responsive';
import Home from '../Screen/Home/Home';
import Setting from '../Screen/Setting/Setting';
import Added from '../Screen/Save/BookMark';
import BookMark from '../Screen/BookMark/BookMark';

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
          color: Colors.white,
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
                color={Colors.primary} // Active color
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
        name="Added"
        component={Added}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Octicons
                name="diff-added" // Icon name for home (from Ionicons)
                size={wp(7)}
                color={Colors.primary} // Active color
              />
            ) : (
              <Octicons
                name="diff-added" // Icon name for inactive home (from Ionicons)
                size={wp(7)}
                color={Colors.primary_black} // Inactive color
              />
            ),
        }}
      />
      <BottomStack.Screen
        name="BookMark"
        component={BookMark}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <FontAwesome
                name="bookmark" // Icon name for home (from Ionicons)
                size={wp(7)}
                color={Colors.primary} // Active color
              />
            ) : (
              <FontAwesome
                name="bookmark-o" // Icon name for inactive home (from Ionicons)
                size={wp(7)}
                color={Colors.primary_black} // Inactive color
              />
            ),
        }}
      />
      <BottomStack.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Feather
                name="settings" // Icon name for home (from Ionicons)
                size={wp(7)}
                color={Colors.primary} // Active color
              />
            ) : (
              <Feather
                name="settings" // Icon name for inactive home (from Ionicons)
                size={wp(7)}
                color={Colors.primary_black} // Inactive color
              />
            ),
        }}
      />
    </BottomStack.Navigator>
  );
}
