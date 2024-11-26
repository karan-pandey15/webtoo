 



import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RazorpayCheckout from 'react-native-razorpay';

const SportsDashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('userData');
        if (storedData) setUserData(JSON.parse(storedData));
      } catch (error) {
        console.log('Error fetching user data:', error);
        Alert.alert('Error', 'Failed to load user data.');
      }
    };
    fetchData();
  }, []);

  const handleRazorpayPayment = () => {
    const totalPrice = userData.feeAmount * 100; 

    const options = {
      description: 'Sports Academy Registration Fee',
      currency: 'INR',
      key: 'rzp_live_5PPrr1z0Y5RqDP',  
      amount: totalPrice,
      name: 'MARAS Sports Academy',
      prefill: {
        email: userData.email || 'test@example.com',
        contact: userData.phone || '9999999999',
        name: userData.name || 'Test User',
      },
      theme: { color: '#007AFF' },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        Alert.alert('Payment Successful', `Payment ID: ${data.razorpay_payment_id}`);
      })
      .catch(() => {
        Alert.alert('Payment Failed', 'The payment was canceled or encountered an error.');
      });
  };

  if (!userData) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/100', // Replace with actual profile image if available
          }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{userData.name}</Text>
        <Text style={styles.subText}>Father's Name: {userData.fatherName}</Text>
      </View>

      {/* Contact Information */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Phone:</Text> {userData.phone}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Email:</Text> {userData.email}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Address:</Text> {userData.completeAddress}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>City:</Text> {userData.city}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>State:</Text> {userData.state}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>PIN Code:</Text> {userData.pinCode}
        </Text>
      </View>

      {/* Academy Information */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Academy Information</Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Academy:</Text>{' '}
          {userData?.selectedAcademy?.title || 'Default Academy'}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Starting Date:</Text> {userData.startingDate}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Fee Type:</Text> {userData.feeType}
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.label}>Fee Amount:</Text> ₹{userData.feeAmount}
        </Text>
      </View>

      {/* Pay Now Button */}
      <TouchableOpacity onPress={handleRazorpayPayment} style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SportsDashboard;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderColor: '#4CAF50',
    borderWidth: 2,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  detailItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
