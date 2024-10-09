import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../Constant/Responsive';
import {Colors} from '../Constant/Colors';

const Button = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => props?.onPress}>
      <Text style={styles.buttonText}>{props?.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: wp(35),
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(2),
    borderWidth: 1,
    borderColor: Colors.grey_Primary,
  },

  buttonText: {
    fontSize: wp(4.5),
    color: Colors.grey_Primary,
  },
});
