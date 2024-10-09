// import React, {useEffect, useState, useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Discover from '../Screens/BottomTabScreens/Discover';
import Rep from '../Screens/BottomTabScreens/Host';
import DM from '../Screens/BottomTabScreens/DM';
import MyProfile from '../Screens/BottomTabScreens/MyProfile';
import {FontSize, Fonts} from '../Constant/Fonts';
import {Colors} from '../Constant/Colors';
import { wp} from '../Constant/Responsive';
import {Image} from 'react-native';
import REP2 from '../Screens/MainScreen/REP2';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import firestore from '@react-native-firebase/firestore';
// import {useIsFocused} from '@react-navigation/native';
// import {useSelector} from 'react-redux';
import GrooveFeeds from '../Screens/BottomTabScreens/GrooveFeeds';
import Host from '../Screens/BottomTabScreens/Host';

const BottomStack = createBottomTabNavigator();
const REPStack = createNativeStackNavigator();

const REPScreen = () => (
  <REPStack.Navigator
    initialRouteName="HostScreen"
    screenOptions={{headerShown: false}}>
    <REPStack.Screen name="HostScreen" component={Host} />
    <REPStack.Screen name="REP2" component={REP2} />
  </REPStack.Navigator>
);

export default function BottomNavigation() {
  // const user = useSelector(state => state.UserReducer);
  // const isFocused = useIsFocused();
  // const [badge, setBadge] = useState(false);

  // useEffect(() => {
  //   if (badge) {
  //     const interval = setInterval(() => {
  //       setBadge(prev => !prev);
  //     }, 500); // Toggle every half-second, adjust the interval as needed

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }
  // }, [badge]);

  // useEffect(() => {
  //   if (isFocused) {
  //     const intervalId = setInterval(() => {
  //       NewMessages();
  //     }, 3000);

  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }
  // }, [isFocused]);

  // const NewMessages = useCallback(async () => {
  //   try {
  //     const usersSnapshot = await firestore()
  //       .collection('users')
  //       .where('userId', '!=', user?.id.toString())
  //       .get();
  //     const badgeValues = await Promise.all(
  //       usersSnapshot.docs.map(async userDoc => {
  //         const chatDoc = await firestore()
  //           .collection('chats')
  //           .doc(`${user?.id}${userDoc?.data()?.userId}`)
  //           .collection('messages')
  //           .orderBy('createdAt', 'desc')
  //           .limit(1)
  //           .get();
  //         if (!chatDoc.empty) {
  //           return chatDoc.docs[0]?.data()?.read;
  //         } else {
  //           return true;
  //         }
  //       }),
  //     );
  //     // If all lastMessage values are true, setBadge to false, otherwise set it to true
  //     setBadge(!badgeValues.every(value => value === true));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // });

  return (
    <BottomStack.Navigator
      initialRouteName="Groovy Feeds"
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
        name="Groovy Feeds"
        component={GrooveFeeds}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={{width: wp(7), height: wp(7)}}
                source={require('../Assets/Icons/Group-280.png')}
                defaultSource={require('../Assets/Images/profile.png')}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={{width: wp(7), height: wp(7)}}
                source={require('../Assets/Icons/Group-11.png')}
                defaultSource={require('../Assets/Images/profile.png')}
                resizeMode="contain"
              />
            ),
        }}
      />
      <BottomStack.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={{width: wp(7), height: wp(7)}}
                source={require('../Assets/Icons/Group-279.png')}
                defaultSource={require('../Assets/Images/profile.png')}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={{width: wp(7), height: wp(7)}}
                source={require('../Assets/Icons/Group-75.png')}
                defaultSource={require('../Assets/Images/profile.png')}
                resizeMode="contain"
              />
            ),
        }}
      />
      <BottomStack.Screen
        name="Host"
        component={REPScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={{width: wp(7), height: wp(7)}}
                source={require('../Assets/Icons/event-icon.png')}
                defaultSource={require('../Assets/Images/profile.png')}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={{width: wp(7), height: wp(7)}}
                source={require('../Assets/Icons/event-icon1.png')}
                defaultSource={require('../Assets/Images/profile.png')}
                resizeMode="contain"
              />
            ),
          unmountOnBlur: true,
        }}
      />
      <BottomStack.Screen
        name="DM"
        component={DM}
        options={{
          // tabBarBadge: 0,
          // tabBarBadgeStyle: {
          //   backgroundColor: badge ? Colors.red : 'transparent',
          //   color: 'transparent',
          //   maxWidth: 10,
          //   maxHeight: 10,
          // },
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={{width: wp(7), height: wp(7)}}
                source={require('../Assets/Icons/text-message-icon-1.png')}
                defaultSource={require('../Assets/Images/profile.png')}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={{width: wp(7), height: wp(7)}}
                source={require('../Assets/Icons/text-message-icon.png')}
                defaultSource={require('../Assets/Images/profile.png')}
                resizeMode="contain"
              />
            ),
        }}
      />
      <BottomStack.Screen
        name="My Profile"
        component={MyProfile}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                style={{width: wp(7), height: wp(7)}}
                source={require('../Assets/Icons/Group-278.png')}
                defaultSource={require('../Assets/Images/profile.png')}
                resizeMode="contain"
              />
            ) : (
              <Image
                style={{width: wp(7), height: wp(7)}}
                source={require('../Assets/Icons/Group-9.png')}
                defaultSource={require('../Assets/Images/profile.png')}
                resizeMode="contain"
              />
            ),
        }}
      />
    </BottomStack.Navigator>
  );
}
