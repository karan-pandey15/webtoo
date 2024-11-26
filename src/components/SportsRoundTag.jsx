

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Banner from './Banner';
import Header from './Header';

const SportsRoundTag = () => {
  const navigation = useNavigation();

  const handleImagePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
   
    <>
     <Header />
     <View style={styles.container}>
      {/* Title for "Our Services" */}
      <Text style={styles.sectionTitle}>
        Best Sports Academy
      </Text>
      <View style={styles.row}>
        <ImageContainer name="Cricket" imageSource={require('../assets/images/crickets.jpeg')} onPress={() => handleImagePress('CricketScreen')} />
        <ImageContainer name="Hokey" imageSource={require('../assets/images/hokeys.jpeg')} onPress={() => handleImagePress('HokeyScreen')} />
        <ImageContainer name="BasketBall" imageSource={require('../assets/images/basketboll.jpeg')} onPress={() => handleImagePress('basketballScreen')} />
        <ImageContainer name="Football" imageSource={require('../assets/images/footboll.jpeg')} onPress={() => handleImagePress('FoodballScreen')} />

      </View>
 

 </View>
    </>

 
  );
};

const ImageContainer = ({ name, imageSource, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View style={styles.imageWrapper}>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} resizeMode="cover" />
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 24,          // Larger text size
    fontWeight: 'bold',    // Bold text
    color: '#333',         // Darker color for contrast
    marginVertical: 10,    // Margin above and below the text
    textAlign: 'left',     // Align text to the left
    width: '100%',   
    marginTop:20,      // Full width
    marginLeft:20
  },

  sectionTit: {
    fontSize: 24,          // Larger text size
    fontWeight: 'bold',    // Bold text
    color: '#333',         // Darker color for contrast
    marginVertical: 10,    // Margin above and below the text
    textAlign: 'left',     // Align text to the left
    width: '100%',         // Full width
    marginTop:40
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',  // Distribute space evenly between items
    marginBottom: 20,
    width: '100%',
  },
  touchable: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  imageWrapper: {
    alignItems: 'center',
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.2,  // 20% of screen width to ensure responsive design
    height: Dimensions.get('window').width * 0.2,
    borderRadius: Dimensions.get('window').width * 0.1,  // Fully rounded (half of width/height)
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    marginTop: 5,
    textAlign: 'center',
    color: '#111',
    fontSize: 14,
    fontWeight: 'bold',
    width: Dimensions.get('window').width * 0.2,  // Ensure text stays within the width of the image
  },
  leftrow: {
    flexDirection: 'row', // Align images in a row
    justifyContent: 'flex-start', // Align to the left
    marginRight: 150, // Gap from the left side of the screen
  },


});

export default SportsRoundTag;
