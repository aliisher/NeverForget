import { StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors} from '../Constant/Colors';
import { wp} from '../Constant/Responsive';
import {FontSize, Fonts} from '../Constant/Fonts';
import { NearByFeeds } from '../Components/NearByFeeds';
import { FollowingFeeds } from '../Components/FolllowingFeeds';



const Tab = createMaterialTopTabNavigator();

export default function TabNavigation1() {
  return (
    <Tab.Navigator
      initialRouteName="All Events"
      indicatorStyle={{backgroundColor: 'red'}}
      screenOptions={{
        lazy: true, // Ensures that screens are not mounted until they are first focused
        unmountOnBlur: true, // Unmounts the screen when it loses focus
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
      <Tab.Screen name="Around Me" component={NearByFeeds} />
      <Tab.Screen name="Following" component={FollowingFeeds} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    textTransform: 'capitalize',
    fontFamily: Fonts.medium,
    fontSize: FontSize.S,
  },
});
