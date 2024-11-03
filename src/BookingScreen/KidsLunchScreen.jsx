import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Modal, TextInput, Button, Alert, Dimensions } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header';

// Screen dimensions for responsive design
const { width } = Dimensions.get('window');

// Lunch service data
const smallLunchServices = [
  {
    id: '1',
    type: 'Sabji and 4 Puri',
    price: '₹99',
    description: 'Delicious sabji served with 4 freshly made puris, perfect for kids during lunch hours.',
    imageUrl: 'https://example.com/lunch1.jpg',
  },
  {
    id: '2',
    type: 'Bhujiya Sabji and 2 Paratha',
    price: '₹99',
    description: 'Delicious sabji served with 2 freshly Paratha with Potato bhujiya sabji, perfect for kids during lunch hours.',
    imageUrl: 'https://example.com/lunch2.jpg',
  },
];

const bigLunchServices = [
  {
    id: '3',
    type: 'Full Meal: Sabji, Roti, Rice & Dal',
    price: '₹150',
    description: 'A wholesome meal with sabji, roti, rice, and dal to keep kids energized during the day.',
    imageUrl: 'https://example.com/lunch3.jpg',
  },
  {
    id: '4',
    type: 'Paneer Masala and 3 Rotis',
    price: '₹130',
    description: 'Flavorful paneer masala paired with 3 freshly made rotis.',
    imageUrl: 'https://example.com/lunch4.jpg',
  },
];

const KidsLunchScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [slotModalVisible, setSlotModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedLunchType, setSelectedLunchType] = useState(null); // Updated to null
  const [addressDetails, setAddressDetails] = useState({
    schoolAddress: '',
    schoolName: '',
  });

  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    const generateDates = () => {
      const today = new Date();
      const dates = [];
      for (let i = 0; i < 3; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        const dateString = nextDate.toDateString().split(' ').slice(0, 3).join(' ');
        dates.push(dateString);
      }
      setAvailableDates(dates);
    };
    generateDates();
  }, []);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  const openSlotModal = () => setSlotModalVisible(true);
  const closeSlotModal = () => setSlotModalVisible(false);

  const onBook = () => {
    if (!selectedDate || !selectedTime) {
      Alert.alert('Error', 'Please select a date and time slot.');
      return;
    }

    Alert.alert(
      'Booking Confirmed',
      `School Name: ${addressDetails.schoolName}\nAddress: ${addressDetails.schoolAddress}\nDate: ${selectedDate}\nTime: ${selectedTime}\n\nYour lunch will arrive as scheduled!`,
    );

    closeSlotModal();
  };

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const handleConfirmDate = (date) => {
    const dateString = date.toDateString().split(' ').slice(0, 3).join(' ');
    setSelectedDate(dateString);
    hideDatePicker();
  };

  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);
  const handleConfirmTime = (time) => {
    const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setSelectedTime(timeString);
    hideTimePicker();
  };

  const renderService = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.type}</Text>
        <Text style={styles.text}>{item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity style={styles.addButton} onPress={openModal}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      </View>
    </View>
  );

  return (
    <>
      <Header />
      <View style={styles.container}>
        {/* Conditional rendering: Show only if no lunch type is selected */}
        {!selectedLunchType && (
          <View style={styles.lunchTypeContainer}>
            <TouchableOpacity
              style={styles.lunchTypeOption}
              onPress={() => setSelectedLunchType('small')}>
              <Image source={require('./../assets/images/kidstiffin.jpg')} style={styles.lunchImage} />
              <Text style={styles.lunchTypeText}>Small Lunch</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.lunchTypeOption}
              onPress={() => setSelectedLunchType('big')}>
              <Image source={require('./../assets/images/kidstiffin.jpg')} style={styles.lunchImage} />
              <Text style={styles.lunchTypeText}>Big Lunch</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Conditional rendering based on lunch type selection */}
        {selectedLunchType === 'small' && (
          <FlatList
            data={smallLunchServices}
            renderItem={renderService}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
        {selectedLunchType === 'big' && (
          <FlatList
            data={bigLunchServices}
            renderItem={renderService}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </View>

      {/* Modal for entering address details */}
      <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Details</Text>
            <TextInput
              style={styles.input}
              placeholder="School Address or Home Address"
              value={addressDetails.schoolAddress}
              onChangeText={(text) => setAddressDetails({ ...addressDetails, schoolAddress: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="School Name"
              value={addressDetails.schoolName}
              onChangeText={(text) => setAddressDetails({ ...addressDetails, schoolName: text })}
            />
            <View style={styles.modalButtons}>
              <Button title="Next" onPress={() => { closeModal(); openSlotModal(); }} />
              <Button title="Cancel" onPress={closeModal} color="red" />
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal for selecting date and time slots */}
      <Modal visible={slotModalVisible} animationType="slide" transparent={true} onRequestClose={closeSlotModal}>
        <View style={styles.modalContainer}>
          <View style={styles.slotModalContent}>
            <Text style={styles.modalTitle}>When should the lunch be delivered?</Text>
            <View style={styles.dateContainer}>
              {availableDates.map((date, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.dateBox, selectedDate === date && styles.selectedDateBox]}
                  onPress={() => setSelectedDate(date)}>
                  <Text style={[styles.dateText, selectedDate === date && styles.selectedDateText]}>{date}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.calendarButton} onPress={showDatePicker}>
              <Icon name="calendar" size={24} color="#fff" style={styles.calendarIcon} />
            </TouchableOpacity>
            <Text style={styles.subText}>Select delivery time</Text>
            <TouchableOpacity style={styles.timeButton} onPress={showTimePicker}>
              <Text style={styles.timeButtonText}>{selectedTime || 'Select Time'}</Text>
            </TouchableOpacity>
            <View style={styles.modalButtons}>
              <Button title="Book" onPress={onBook} />
              <Button title="Cancel" onPress={closeSlotModal} color="red" />
            </View>
          </View>
        </View>
      </Modal>

      {/* Date and Time Pickers */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  lunchTypeContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 },
  lunchTypeOption: { alignItems: 'center' },
  lunchImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 8 },
  lunchTypeText: { fontSize: 18, fontWeight: 'bold' },
  card: { flexDirection: 'row', backgroundColor: '#fff', padding: 16, borderRadius: 10, marginBottom: 10, elevation: 2 },
  textContainer: { flex: 1, paddingRight: 8 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  text: { fontSize: 16, color: '#666', marginBottom: 4 },
  description: { fontSize: 14, color: '#888', marginBottom: 8 },
  addButton: { backgroundColor: '#00b0ff', padding: 8, borderRadius: 5 },
  addButtonText: { color: '#fff', textAlign: 'center' },
  imageContainer: { justifyContent: 'center' },
  image: { width: 80, height: 80, borderRadius: 10 },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { width: '90%', backgroundColor: '#fff', padding: 20, borderRadius: 10 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 8, borderRadius: 5, marginBottom: 10 },
  modalButtons: { flexDirection: 'row', justifyContent: 'space-around' },
  slotModalContent: { width: '90%', backgroundColor: '#fff', padding: 20, borderRadius: 10 },
  dateContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  dateBox: { padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 },
  selectedDateBox: { backgroundColor: '#00b0ff' },
  dateText: { color: '#333' },
  selectedDateText: { color: '#fff' },
  calendarButton: { alignSelf: 'center', backgroundColor: '#00b0ff', padding: 10, borderRadius: 5 },
  calendarIcon: { marginLeft: 8 },
  subText: { fontSize: 16, fontWeight: '600', marginVertical: 10 },
  timeButton: { backgroundColor: '#00b0ff', padding: 8, borderRadius: 5 },
  timeButtonText: { color: '#fff', textAlign: 'center' },
});

export default KidsLunchScreen;
