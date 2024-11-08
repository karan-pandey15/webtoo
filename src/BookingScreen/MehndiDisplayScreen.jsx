import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Hook for navigation
import Header from '../components/Header';

const MehndiDisplayScreen = ({ route }) => {
  const { item } = route.params;  // Access the item data passed from MehndiScreen
  const [activeTab, setActiveTab] = useState('details'); // Track active tab

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
      {/* Main Image */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="contain" />
      </View>

      {/* Product Title and Price */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.taxInfo}>(Inclusive of all taxes)</Text>
      </View>

      {/* Subscribe Button */}
      <TouchableOpacity style={styles.subscribeButton}>
        <Text style={styles.subscribeText}>Book Now!</Text>
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
            {item.description}
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
  infoContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  price: {
    fontSize: 20,
    color: '#000',
    marginTop: 5,
  },
  taxInfo: {
    fontSize: 14,
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

export default MehndiDisplayScreen;
