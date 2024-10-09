import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../Constant/Responsive';
import {Colors} from '../Constant/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BtnWithIcon = props => {
  return (
    <TouchableOpacity style={styles.nextButton} onPress={props?.onPress}>
      <Text style={styles.nextButtonText}>Next</Text>
      <AntDesign
        name="right"
        size={12}
        color={Colors.primary}
        style={styles.iconStyle}
      />
    </TouchableOpacity>
  );
};

export default BtnWithIcon;

const styles = StyleSheet.create({
  nextButton: {
    width: wp(35),
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: wp(2),
    borderWidth: 0.7,
    borderColor: Colors.black,
  },
  nextButtonText: {
    fontSize: wp(4.5),
    color: Colors.primary,
  },
  iconStyle: {marginLeft: 3, marginTop: 2},
});
