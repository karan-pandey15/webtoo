import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';

const TravellingwithKids = () => {
  const [activeTab, setActiveTab] = useState('details'); // Track active tab

  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Main Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://example.com/traveling-with-kids-image.jpg' }} // replace with a suitable travel image URL
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Service Title and Price */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Travel Assistance with Kids</Text>
          <Text style={styles.price}>₹2500 / day</Text>
          <Text style={styles.taxInfo}>(Inclusive of all taxes)</Text>
        </View>

        {/* Book Now Button */}
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookText}>Book now!</Text>
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
            <Text style={styles.descriptionTitle}>Service Description</Text>
            <Text style={styles.descriptionText}>
              Our family-friendly travel service is designed to make vacations easier for parents and fun for kids.
              We provide tailored assistance with child-friendly transportation, activity planning, and a dedicated travel
              concierge to ensure you and your children enjoy every part of the journey!
            </Text>
          </View>
        ) : (
          <View style={styles.additionalInfoContainer}>
            <Text style={styles.additionalInfoTitle}>Service Schedule</Text>
            <Text style={styles.additionalInfoText}>Available Daily, 8:00 AM - 8:00 PM</Text>
          </View>
        )}

        {/* Bottom Book Now Button */}
        <TouchableOpacity style={styles.bottomBookButton}>
          <Text style={styles.bottomBookText}>Book Now</Text>
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
    textAlign: 'center',
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
  bookButton: {
    alignSelf: 'center',
    backgroundColor: '#ff6600',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  bookText: {
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
    color: '#ff6600',
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
  bottomBookButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3366cc',
    paddingVertical: 12,
    marginVertical: 20,
    borderRadius: 5,
  },
  bottomBookText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TravellingwithKids;
