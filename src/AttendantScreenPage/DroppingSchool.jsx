 

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'; 
import Header from '../components/Header';

const DroppingSchool = () => {
  const [activeTab, setActiveTab] = useState('details'); // Track active tab

  return (
    <View>
       <Header />
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */} 

      {/* Main Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://example.com/dropping-school-image.jpg' }} // replace with your image URL
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Product Title and Price */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Dropping School Tuition for Kids</Text>
        <Text style={styles.price}>₹1500 / month</Text>
        <Text style={styles.taxInfo}>(Inclusive of all taxes)</Text>
      </View>

      {/* Subscription Button */}
      <TouchableOpacity style={styles.subscribeButton}>
        <Text style={styles.subscribeText}>Book now!</Text>
      </TouchableOpacity>

      {/* Tabs for Details and Other Info */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => setActiveTab('details')}>
          <Text style={[styles.tab, activeTab === 'details' && styles.activeTab]}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('otherInfo')}>
          <Text style={[styles.tab, activeTab === 'otherInfo' && styles.activeTab]}>Other Info</Text>
        </TouchableOpacity>
      </View>

      {/* Conditional Content Based on Active Tab */}
      {activeTab === 'details' ? (
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Product Description</Text>
          <Text style={styles.descriptionText}>
            Our specialized school drop-off service ensures your kids reach their tuition safely every day.
            With trained staff and secure transportation, we prioritize the safety and comfort of your children.
            Ideal for busy parents looking for reliable solutions.
          </Text>
        </View>
      ) : (
        <View style={styles.additionalInfoContainer}>
          <Text style={styles.additionalInfoTitle}>Service Schedule</Text>
          <Text style={styles.additionalInfoText}>Monday to Friday, 7:00 AM - 6:00 PM</Text>
        </View>
      )}

      {/* Bottom Subscribe Now Button */}
      <TouchableOpacity style={styles.bottomSubscribeButton}>
        <Text style={styles.bottomSubscribeText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeButton: {
    padding: 10,
  },
  shareButton: {
    padding: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  infoContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  price: {
    fontSize: 16,
    color: '#000',
    marginTop: 5,
  },
  taxInfo: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  subscribeButton: {
    alignSelf: 'center',
    backgroundColor: '#ff6600',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  subscribeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  tab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 20,
  },
  activeTab: {
    color: '#ff6600', // Highlight active tab color
    borderBottomWidth: 2,
    borderBottomColor: '#ff6600',
  },
  descriptionContainer: {
    padding: 10,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
  },
  additionalInfoContainer: {
    padding: 10,
    marginTop: 10,
  },
  additionalInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  additionalInfoText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  bottomSubscribeButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3366cc',
    paddingVertical: 12,
    marginVertical: 20,
    borderRadius: 5,
  },
  bottomSubscribeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DroppingSchool;
 