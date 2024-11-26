import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';

const OfficialWork = () => {
  const [activeTab, setActiveTab] = useState('details'); // Track active tab

  return (
    <View>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Main Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://example.com/official-work-image.jpg' }} // replace with a suitable official work image URL
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Service Title and Price */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Official Work Assistance</Text>
          <Text style={styles.price}>₹399 / day</Text>
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
              Our official work assistance service supports tasks such as bank document uploads, bill payments, and
              essential paperwork management. Let us handle the time-consuming paperwork while you focus on more
              important tasks. Our experienced team provides timely, accurate assistance to ensure your tasks are handled
              efficiently.
            </Text>
          </View>
        ) : (
          <View style={styles.additionalInfoContainer}>
            <Text style={styles.additionalInfoTitle}>Service Schedule</Text>
            <Text style={styles.additionalInfoText}>Available Daily, 9:00 AM - 6:00 PM</Text>
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

export default OfficialWork;
