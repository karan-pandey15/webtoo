import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';

const OrderScreen = () => {
  const [bookingDetails, setBookingDetails] = useState([]);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const details = await AsyncStorage.getItem('bookingDetails');
        if (details) setBookingDetails(JSON.parse(details));
      } catch (error) {
        console.error('Error fetching booking details:', error);
      }
    };
    fetchBookingDetails();
  }, []);

  const handleClearBooking = async (index) => {
    try {
      const updatedBookings = [...bookingDetails];
      updatedBookings.splice(index, 1);
      await AsyncStorage.setItem('bookingDetails', JSON.stringify(updatedBookings));
      setBookingDetails(updatedBookings);
      Alert.alert('Booking cleared', 'Selected booking has been removed');
    } catch (error) {
      Alert.alert('Error', 'Failed to clear booking');
      console.error('Error clearing booking:', error);
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        {bookingDetails.length > 0 ? (
          <FlatList
            data={bookingDetails}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={styles.row}>
                    <Text style={styles.price}>Price: {item.price}</Text>
                    <Text style={styles.date}>Date: {item.date}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.info}>Time: {item.time}</Text>
                    <Text style={styles.info}>Address: {item.address}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleClearBooking(index)}
                >
                  <Text style={styles.buttonText}>Clear Booking</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        ) : (
          <Text style={styles.noDetailsText}>No booking details available</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 12,
    elevation: 5,
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardContent: {
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: '#27ae60',
    marginBottom: 5,
    fontWeight: '600',
  },
  date: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 5,
    fontWeight: '600',
  },
  info: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0b58d6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noDetailsText: {
    fontSize: 18,
    color: '#7f8c8d',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default OrderScreen;
