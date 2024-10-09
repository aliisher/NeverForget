import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Comment from '../Screens/MainScreen/Comment';
import HotelDetails from '../Screens/MainScreen/HotelDetails';
import AllReviews from '../Screens/MainScreen/AllReviews';
import DailyOffers from '../Screens/MainScreen/DailyOffers';
import AllHotels from '../Screens/MainScreen/AllHotels';
import Events from '../Screens/MainScreen/Events';
import Setting from '../Screens/MainScreen/Setting';
import ChangePassword from '../Screens/MainScreen/ChangePassword';
import Following from '../Screens/MainScreen/Following';
import NewPost from '../Screens/MainScreen/NewPost';
import Search from '../Screens/MainScreen/Search';
import MyEvents from '../Screens/MainScreen/MyEvents';
import Photo from '../Screens/MainScreen/Photo';
import BottomNavigation from './BottomNavigation';
import EventDetails from '../Screens/MainScreen/EventDetails';
import MyFeeds from '../Screens/MainScreen/MyFeeds';
import SearchEvents from '../Screens/MainScreen/SearchEvents';
import BlockUsers from '../Screens/MainScreen/BlockUsers';
import UsersProfile from '../Screens/MainScreen/UsersProfile';
import MyFavouriteHotels from '../Screens/MainScreen/MyFavouriteHotels';
import Chat from '../Screens/MainScreen/Chat';
import Notification from '../Screens/MainScreen/Notification';
import MapOpen from '../Screens/MainScreen/MapOpen';
import PrivacyPolicy from '../Screens/MainScreen/PrivacyPolicy';
import TermsConditions from '../Screens/MainScreen/TermsConditions';
import ChooseFriends from '../Screens/MainScreen/ChooseFriends';
import EventsAndFeeds from '../Screens/MainScreen/EventsAndFeeds';

const MainStack = createNativeStackNavigator();

export default function CommonNavigation() {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BottomNavigation">
      <MainStack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
      />
      <MainStack.Screen
        name="Comment"
        component={Comment}
      />
      <MainStack.Screen
        name="EventDetails"
        component={EventDetails}
      />
      <MainStack.Screen
        name="HotelDetails"
        component={HotelDetails}
      />
      <MainStack.Screen
        name="AllReviews"
        component={AllReviews}
      />
      <MainStack.Screen
        name="DailyOffers"
        component={DailyOffers}
      />
      <MainStack.Screen
        name="Events"
        component={Events}
      />
      <MainStack.Screen
        name="EventsAndFeeds"
        component={EventsAndFeeds}
      />
      <MainStack.Screen
        name="AllHotels"
        component={AllHotels}
      />
      <MainStack.Screen
        name="Setting"
        component={Setting}
      />
      <MainStack.Screen
        name="ChangePassword"
        component={ChangePassword}
      />
      <MainStack.Screen
        name="Following"
        component={Following}
      />
      <MainStack.Screen
        name="NewPost"
        component={NewPost}
      />
      <MainStack.Screen
        name="Search"
        component={Search}
      />
      <MainStack.Screen
        name="MyEvents"
        component={MyEvents}
      />
      <MainStack.Screen
        name="Photo"
        component={Photo}
      />
      <MainStack.Screen
        name="MyFeeds"
        component={MyFeeds}
      />
      <MainStack.Screen
        name="SearchEvents"
        component={SearchEvents}
      />
      <MainStack.Screen
        name="BlockUsers"
        component={BlockUsers}
      />
      <MainStack.Screen
        name="UsersProfile"
        component={UsersProfile}
      />

      <MainStack.Screen
        name="MyFavouriteHotels"
        component={MyFavouriteHotels}
      />
      <MainStack.Screen
        name="Chat"
        component={Chat}
      />
      <MainStack.Screen
        name="ChooseFriends"
        component={ChooseFriends}
      />
      <MainStack.Screen
        name="Notification"
        component={Notification}
      />
      <MainStack.Screen
        name="MapOpen"
        component={MapOpen}
      />
      <MainStack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
      />
      <MainStack.Screen
        name="TermsConditions"
        component={TermsConditions}
      />
    </MainStack.Navigator>
  );
}
