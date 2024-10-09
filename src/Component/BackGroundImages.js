// import React from 'react';
// import {StyleSheet, View, Image, ImageBackground} from 'react-native';

// const BackGroundImages = () => {
//   return (
//     <View style={styles.backgroundContainer}>
//       {/* Adjust styles here as needed */}
//       <View style={{justifyContent: 'flex-end'}}>
//         <ImageBackground
//           source={require('../Assets/image5.png')} // Path to your first grey icon
//           style={styles.icon}
//         />
//       </View>
//       {/* <ImageBackground
//         source={require('../Assets/image3.png')} // Path to your second grey icon
//         style={styles.icon}
//       />
//       <ImageBackground
//         source={require('../Assets/image4.png')} // Path to your second grey icon
//         style={styles.icon}
//       />
//       <ImageBackground
//         source={require('../Assets/image5.png')} // Path to your second grey icon
//         style={styles.icon}
//       />
//       <ImageBackground
//         source={require('../Assets/image6.png')} // Path to your second grey icon
//         style={styles.icon}
//       /> */}
//       {/* Add more icons if needed */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundContainer: {
//     flex: 1,
//     // justifyContent: 'center', // Center items vertically
//     // alignItems: 'center', // Center items horizontally
//     // opacity: 0.1, // Adjust opacity for the background effect
//     // position: 'relative', // Keep it relative for absolute items if needed
//   },
//   icon: {
//     width: 100, // Adjust the size of the icons
//     height: 100, // Adjust the size of the icons
//     // margin: 10, // Add margin to space them out
//     // position: 'relative', // Make icons relative to the container
//   },
// });

// export default BackGroundImages;
import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {hp, wp} from '../Constant/Responsive';

const BackGroundImages = () => {
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.topRightContainer}>
        <ImageBackground
          source={require('../Assets/image5.png')} // Path to your grey icon
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: 'flex-start', // Align items at the start (top)
    alignItems: 'flex-end', // Align items to the end (right)
  },
  topRightContainer: {
    // margin: 10, // Add margin for spacing
  },
  icon: {
    width: wp('85%'), // Adjust the size of the icon
    height: hp('30%'), // Adjust the size of the icon
  },
});

export default BackGroundImages;
