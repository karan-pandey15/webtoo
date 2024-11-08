 

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Header from '../components/Header';

const AttendedScreen = () => {
  const navigation = useNavigation();

  const handleImagePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <>
      <Header />
<ScrollView>

      <View style={styles.container}>
        {/* Title for "Our Services" */}
        <Text style={styles.sectionTitle}>Book Guardian For Kids</Text>

        <View style={styles.row}>
          <ImageContainer name="Dropping School, Tution" imageSource={require('../assets/images/dripingscl.jpeg')} onPress={() => handleImagePress('DroppingSchool')} />
          <ImageContainer name="Shopping and Market Assistance" imageSource={require('../assets/images/shpping.png')} onPress={() => handleImagePress('ShoppingMarket')} />
          <ImageContainer name="Travelling With Kids" imageSource={require('../assets/images/travellingkid.jpeg')} onPress={() => handleImagePress('TravellingwithKids')} />
        </View>

        <View style={styles.row}>
          <ImageContainer name="Night Shift Job Support For Kids" imageSource={require('../assets/images/jobsopport.jpeg')} onPress={() => handleImagePress('NightShiftSupport')} />
          <ImageContainer name="Baby Sitter" imageSource={require('../assets/images/babysiiterimg.jpeg')} onPress={() => handleImagePress('BabySitter')} />
        </View>
      </View> 
      <View style={styles.container}>
        {/* Title for "Our Services" */}
        <Text style={styles.sectionTitle}>Book Attendant For Parents</Text>

        <View style={styles.row}>
          <ImageContainer name="For Hospital Visit" imageSource={require('../assets/images/hospitavisit.jpeg')} onPress={() => handleImagePress('ForHospitalVisit')} />
          <ImageContainer name="For Shopping Assistance" imageSource={require('../assets/images/shpping.png')} onPress={() => handleImagePress('ShoppingAssistance')} />
          <ImageContainer name="For Official Work" imageSource={require('../assets/images/official.png')} onPress={() => handleImagePress('OfficialWork')} />
        </View>

        <View style={styles.row}>
          <ImageContainer name="For Travelling with Parents" imageSource={require('../assets/images/grandpa.jpeg')} onPress={() => handleImagePress('TravellingWithParents')} />
          <ImageContainer name="Baby Sitter" imageSource={require('../assets/images/babysitters.png')} onPress={() => handleImagePress('BabySitter')} />
        </View>
      </View>

      </ScrollView>
  
      
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
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 28,          // Increased font size for title
    fontWeight: 'bold',    // Bold text
    color: '#00b0ff',      // Blue color for title
    marginVertical: 20,    // Space above and below the title
    textAlign: 'left',     // Align text to the left
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute items evenly
    marginBottom: 20,
    width: '100%',
  },
  touchable: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,  // Increased gap between items
  },
  imageWrapper: {
    alignItems: 'center',
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.28,  // Increased width for images
    height: Dimensions.get('window').width * 0.28, // Increased height to keep it square
    overflow: 'hidden',
    borderRadius: 8,       // Slightly rounded corners for a more modern look
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    marginTop: 10,         // Increased margin for better spacing
    textAlign: 'center',
    color: '#333',         // Darker text color for better readability
    fontSize: 16,          // Slightly larger text size
    fontWeight: 'bold',
    width: Dimensions.get('window').width * 0.28,  // Adjust text width to match image width
    lineHeight: 22,        // Added line height for better text alignment
  },
});

export default AttendedScreen;
