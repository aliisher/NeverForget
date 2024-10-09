import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {hp, wp} from '../../Constant/Responsive';
import {Colors} from '../../Constant/Colors';
import {data} from '../../Constant/DummyData';
import {useNavigation} from '@react-navigation/native';
import BtnWithIcon1 from '../../Component/BtnWithIcon';
import Button from '../../Component/Btn';
import AppHeader from '../../Component/Header';
import ButtonRadius from '../../Component/BtnRadius';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  activeIndex === index ? Colors.primary : '#C4C4C4',
              },
            ]}
          />
        ))}
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {activeIndex > 0 && (
        <AppHeader onPress={() => carouselRef.current.snapToPrev()} />
      )}

      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={wp(100)}
        itemWidth={wp(100)}
        onSnapToItem={index => setActiveIndex(index)}
      />

      <View style={styles.buttonContainer}>
        {activeIndex < data.length - 1 && (
          <>
            <Button
              title={'Skip'}
              onPress={() => navigation.navigate('AuthNavigation')}
            />
            <BtnWithIcon1 onPress={() => carouselRef.current.snapToNext()} />
          </>
        )}
      </View>
      {activeIndex == 2 && (
        <ButtonRadius
          title={'Get Started'}
          onPress={() => navigation.navigate('AuthNavigation')}
        />
      )}
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.white,
  },
  slide: {
    alignItems: 'center',
    paddingTop: hp(3),
    paddingHorizontal: wp(5),
  },
  image: {
    width: wp('90%'),
    height: hp('60%'),
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginTop: hp(2),
  },
  description: {
    fontSize: 14,
    color: Colors.grey_Primary,
    textAlign: 'center',
    marginTop: hp(1),
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: hp(15),
  },
  dot: {
    width: wp(2.5),
    height: wp(2.5),
    borderRadius: wp(1.25),
    marginHorizontal: wp(1),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    marginBottom: hp(3),
  },
});
