 

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput, Button, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const TravellingwithKids = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [modalVisible, setModalVisible] = useState(false);
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const navigation = useNavigation();

  const handleConfirmBooking = async () => {
    if (!address) {
      Alert.alert("Missing Information", "Please enter your address.");
      return;
    }

    const bookingDetails = {
      title: "Travelling with Kids",
      price: "₹399",
      address,
      date: date.toLocaleDateString(),
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    try {
      // Fetch existing bookings and add the new booking
      const existingBookings = await AsyncStorage.getItem('bookingDetails');
      let bookingsArray = [];

      if (existingBookings) {
        // Parse the existing bookings if they exist
        bookingsArray = JSON.parse(existingBookings);
        
        // If the fetched data is not an array, convert it to an array
        if (!Array.isArray(bookingsArray)) {
          bookingsArray = [bookingsArray];  // Convert single object to array
        }
      }

      // Add the new booking to the array
      bookingsArray.push(bookingDetails);

      // Save the updated bookings array back to AsyncStorage
      await AsyncStorage.setItem('bookingDetails', JSON.stringify(bookingsArray));

      setModalVisible(false);
      navigation.navigate('OrderScreen');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while booking. Please try again.');
      console.error('Error saving booking details:', error);
    }
  };

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const handleConfirmDate = (selectedDate) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);
  const handleConfirmTime = (selectedTime) => {
    setTime(selectedTime);
    hideTimePicker();
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: 'https://example.com/dropping-school-image.jpg' }} style={styles.image} resizeMode="contain" />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>Travelling with Kids</Text>
          <Text style={styles.price}>₹399 / day</Text>
          <Text style={styles.taxInfo}>(Inclusive of all taxes)</Text>
        </View>

        <TouchableOpacity style={styles.subscribeButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.subscribeText}>Book now!</Text>
        </TouchableOpacity>

        <View style={styles.tabsContainer}>
          <TouchableOpacity onPress={() => setActiveTab('details')}>
            <Text style={[styles.tab, activeTab === 'details' && styles.activeTab]}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('otherInfo')}>
            <Text style={[styles.tab, activeTab === 'otherInfo' && styles.activeTab]}>Other Info</Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'details' ? (
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Product Description</Text>
            <Text style={styles.descriptionText}>
            Our family-friendly travel service is designed to make vacations easier for parents and fun for kids.
We provide tailored assistance with child-friendly transportation, activity planning, and a dedicated travel
concierge to ensure you and your children enjoy every part of the journey!
            </Text>
          </View>
        ) : (
          <View style={styles.additionalInfoContainer}>
            <Text style={styles.additionalInfoTitle}>Service Schedule</Text>
            <Text style={styles.additionalInfoText}>Monday to Friday, 7:00 AM - 6:00 PM</Text>
          </View>
        )}

        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Booking Details</Text>
              <TextInput
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
                style={styles.input}
              />
              <TouchableOpacity onPress={showDatePicker}>
                <Text style={styles.dateText}>Select Date: {date.toLocaleDateString()}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
              />
              <TouchableOpacity onPress={showTimePicker}>
                <Text style={styles.dateText}>Select Time: {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleConfirmTime}
                onCancel={hideTimePicker}
              />
              <Button title="Confirm Booking" onPress={handleConfirmBooking} />
              <Button title="Close" onPress={() => setModalVisible(false)} color="red" />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};
 
export default TravellingwithKids;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  contentContainer: { padding: 16 },
  imageContainer: { alignItems: 'center', marginVertical: 20 },
  image: { width: 150, height: 150 },
  infoContainer: { alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  price: { fontSize: 16, color: '#000', marginTop: 5 },
  taxInfo: { fontSize: 12, color: '#666', marginTop: 5 },
  subscribeButton: { alignSelf: 'center', backgroundColor: '#ff6600', borderRadius: 5, paddingVertical: 8, paddingHorizontal: 15, marginVertical: 10 },
  subscribeText: { color: '#fff', fontWeight: 'bold' },
  tabsContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 15 },
  tab: { fontSize: 16, fontWeight: 'bold', color: '#000', marginHorizontal: 20 },
  activeTab: { color: '#ff6600', borderBottomWidth: 2, borderBottomColor: '#ff6600' },
  descriptionContainer: { padding: 10 },
  additionalInfoContainer: { padding: 10, marginTop: 10 },
  modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalView: { width: '80%', backgroundColor: 'white', padding: 20, borderRadius: 10, elevation: 10 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 },
  dateText: { fontSize: 16, color: '#333', marginBottom: 10 },
});
