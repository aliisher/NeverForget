import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../Constant/Colors';
import {hp, wp} from '../Constant/Responsive';

const AppHeader = props => {
  return (
    <View style={styles.navigationContainer}>
      <TouchableOpacity style={styles.arrowButton} onPress={props?.onPress}>
        <AntDesign name="left" size={24} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: hp(2),
    paddingHorizontal: wp(5),
  },
  arrowButton: {
    width: wp(10),
    height: wp(10),
    backgroundColor: Colors.light_White,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(5),
  },
});
