// import React from 'react';
// import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Banner = () => {
//   const navigation = useNavigation();
//   const images = [
//     { id: 1, source: require('../assets/images/cricket.jpeg'), navigateTo: 'Home' },
//     { id: 2, source: require('../assets/images/hokey.jpeg'), navigateTo: 'Page1' },
//     { id: 3, source: require('../assets/images/basketball.png'), navigateTo: 'Page2' },
//     { id: 4, source: require('../assets/images/tennis.jpeg'), navigateTo: 'Page3' },
//     { id: 5, source: require('../assets/images/football.jpeg'), navigateTo: 'Page4' },
//   ];

//   return (
//     <View style={styles.bannerContainer}>
//       {images.map((img) => (
//         <TouchableOpacity
//           key={img.id}
//           onPress={() => navigation.navigate(img.navigateTo)}
//           style={styles.imageWrapper}
//         >
//           <Image source={img.source} style={styles.image} resizeMode="cover" />
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   bannerContainer: {
//     width: '100%',
//     height: 80,
//     backgroundColor: '#f8f9fa',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical: 10,
//     borderRadius: 8,
//     padding: 5,
//     alignSelf: 'center',
//   },
//   imageWrapper: {
//     flex: 1,
//     marginHorizontal: 3,
//     height: '100%',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 8,
//   },
// });

// export default Banner;


import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Banner = () => {
  const navigation = useNavigation();
  const images = [
    { id: 1, source: require('../assets/images/cricket.jpeg'), navigateTo: 'CricketScreen' },
    { id: 2, source: require('../assets/images/hokeyy.jpeg'), navigateTo: 'HokeyScreen' },
    { id: 3, source: require('../assets/images/basketball.png'), navigateTo: 'basketballScreen' },
    { id: 4, source: require('../assets/images/tennis.jpeg'), navigateTo: 'TennisScreen' },
    { id: 5, source: require('../assets/images/football.jpeg'), navigateTo: 'FoodballScreen' },
  ];

  return (
    <View>
        <View style={styles.bannerContainer}>
      {images.map((img) => (
        <TouchableOpacity
          key={img.id}
          onPress={() => navigation.navigate(img.navigateTo)}
          style={styles.imageWrapper}
        >
          <Image source={img.source} style={styles.image} resizeMode="cover" />
        </TouchableOpacity>
      ))}
    </View> 

    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#f8f9fa',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 8,
    padding: 0, // Remove padding to avoid gaps between images
    alignSelf: 'center',
    borderWidth: 2, // Add border to the main container
    borderColor: '#ccc', // Color of the border
    borderRadius:10
  },
  imageWrapper: {
    flex: 1,
    height: '100%',
    marginHorizontal: 0, // No gap between images
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 0, // No border radius to maintain uniformity
  },
  titleText: {
    color: '#00b0f0', // Light blue color
    fontSize: 24, // Larger font size
    fontWeight: 'bold', // Bold text
    textAlign: 'center', // Center the text horizontally
    marginVertical: 10, // Add vertical margin for spacing

  },
});

export default Banner;
