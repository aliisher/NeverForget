import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {hp, wp} from '../../Constant/Responsive';
import {Colors} from '../../Constant/Colors';
import AppHeader from '../../Component/Header';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';

const Signup = () => {
  const navigation = useNavigation();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '425016402323-skdc3jbemib9o4qtebejo9sh26dmg4m2.apps.googleusercontent.com',
    });
  }, []);
  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      const idToken = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(
        idToken?.data?.idToken,
      );
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );

      const googleInfo = userCredential.additionalUserInfo;

      const googleData = googleInfo?.profile;
      if (googleData?.email_verified) {
        // navigation?.navigate('Map');
        Toast.show('You have successfully logged in', Toast.LONG);
      }

      // const socialData = {
      //   name: googleData?.given_name,
      //   email: googleData?.email,
      //   social_id: googleData?.sub,
      // };
      // console.log('@SOCAL', socialData);
      // SocialLoginApi(socialData);
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          console.log('User cancelled the login flow', error);
          break;
        case statusCodes.IN_PROGRESS:
          console.log('Sign-in operation is in progress already', error);
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log('Play services are not available or outdated', error);
          break;
        default:
          console.log('An unexpected error occurred', error);
          break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader onPress={() => navigation?.goBack()} />
      <View style={styles.bodyContainer}>
        <Text style={styles.signUpText}>CLICK TO</Text>
        <Text style={styles.signUpTextBold}>SIGN UP</Text>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => googleLogin()}>
          <Image
            source={require('../../Assets/google.png')}
            style={styles.googleIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: wp('5%'),
    fontWeight: '700',
    color: Colors?.primary,
  },
  signUpTextBold: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
    color: Colors?.primary_black,
  },
  googleButton: {
    marginTop: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleIcon: {
    width: wp('20%'),
    height: wp('20%'),
  },
});
