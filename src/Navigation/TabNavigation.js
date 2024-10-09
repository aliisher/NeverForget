import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors} from '../Constant/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import DiscoverCom from '../Components/DiscoverCom';
import {hp, wp} from '../Constant/Responsive';
import Api from '../API/ApiCalls';
import {FontSize, Fonts} from '../Constant/Fonts';
import {useIsFocused} from '@react-navigation/native';
import moment from 'moment';

function NearByEvents() {
  const [data, setData] = useState([]);
  const [indicator, setIndicator] = useState(false);
  const isFocused = useIsFocused();

  const getNearByEvents = async () => {
    try {
      setIndicator(true);
      const res = await Api.getNearByEvents();
      if (res.status == 200) {
        const now = moment();

        const upcomingEvents = res?.data?.events?.filter(event => {
          const eventStartDate = moment(
            `${event.date} ${event.start_time}`,
            'DD-MM-YYYY hh:mm A',
          );

          let eventEndDate = moment(
            `${event.date} ${event.end_time}`,
            'DD-MM-YYYY hh:mm A',
          );

          if (eventEndDate.isBefore(eventStartDate)) {
            eventEndDate.add(1, 'days');
          }

          return eventEndDate.isAfter(now);
        });

        setData(upcomingEvents);
        // const AllEvents = res?.data?.events.sort((a, b) => {
        //   const verifiedA = Number(a.verified);
        //   const verifiedB = Number(b.verified);
        //   return verifiedB - verifiedA;
        // });
        // setData(AllEvents?.reverse());
      }
    } catch (error) {
      console.log('getNearByEvents', error.message);
    }
    setIndicator(false);
  };

  useEffect(() => {
    if (isFocused) {
      getNearByEvents();
    }
  }, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      {data.length > 0 ? (
        <DiscoverCom
          data={data}
          style={{paddingBottom: hp(15)}}
          container={{width: wp(90), height: hp(35), marginVertical: hp(1)}}
        />
      ) : indicator ? (
        <ActivityIndicator size={'large'} color={Colors.white} />
      ) : (
        <Text style={{color: Colors.white}}>No Events Yet!</Text>
      )}
    </SafeAreaView>
  );
}

function FollowingEvents() {
  const [data, setData] = useState([]);
  const [indicator, setIndicator] = useState(false);
  const isFocused = useIsFocused();
  const getFollowingEvents = async () => {
    try {
      setIndicator(true);
      const res = await Api.getFollowingEvents();
      console.log('response', JSON.stringify(res, null, 2));
      if (res.status == 200) {
        const now = moment();

        const upcomingEvents = res?.data?.events?.filter(event => {
          const eventStartDate = moment(
            `${event.date} ${event.start_time}`,
            'DD-MM-YYYY hh:mm A',
          );

          let eventEndDate = moment(
            `${event.date} ${event.end_time}`,
            'DD-MM-YYYY hh:mm A',
          );

          if (eventEndDate.isBefore(eventStartDate)) {
            eventEndDate.add(1, 'days');
          }

          return eventEndDate.isAfter(now);
        });

        setData(upcomingEvents);
        // setData(res?.data?.events);
      }
    } catch (error) {
      console.log('getFollowingEvents', error.message);
    }
    setIndicator(false);
  };
  useEffect(() => {
    if (isFocused) {
      getFollowingEvents();
    }
  }, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      {data.length > 0 ? (
        <DiscoverCom
          data={data}
          style={{paddingBottom: hp(15)}}
          container={{width: wp(90), height: hp(35), marginVertical: hp(1)}}
        />
      ) : indicator ? (
        <ActivityIndicator size={'large'} color={Colors.white} />
      ) : (
        <Text style={{color: Colors.white}}>No Following Events Yet!</Text>
      )}
    </SafeAreaView>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="All Events"
      indicatorStyle={{backgroundColor: 'red'}}
      screenOptions={{
        indicatorStyle: {
          backgroundColor: 'red',
          fontSize: FontSize.L,
          fontFamily: Fonts.semiBold,
        },

        tabBarIndicatorStyle: {
          borderBottomColor: Colors.white,
          borderBottomWidth: wp(0.5),
        },
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: Colors.green,
        tabBarInactiveTintColor: Colors.white,
        tabBarStyle: {backgroundColor: Colors.black},
      }}>
      <Tab.Screen name="Around Me" component={NearByEvents} />
      <Tab.Screen name="Following" component={FollowingEvents} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  tabBarLabelStyle: {
    textTransform: 'capitalize',
    fontFamily: Fonts.medium,
    fontSize: FontSize.S,
  },
});
