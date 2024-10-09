import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../Constant/Responsive';
import {Colors} from '../Constant/Colors';

const ButtonRadius = props => {
  return (
    <TouchableOpacity style={styles.getStartedButton} onPress={props.onPress}>
      <Text style={styles.getStartedButtonText}>{props?.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonRadius;

const styles = StyleSheet.create({
  getStartedButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(10),
    marginHorizontal: hp(7),
    marginBottom: hp(2),
    backgroundColor: Colors.primary,
  },

  getStartedButtonText: {
    fontSize: wp(4.5),
    color: '#fff',
    paddingVertical: hp(2),
    fontWeight: 'bold',
  },
});
