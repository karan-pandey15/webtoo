 



import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AcademyDisplayScreen = ({ route }) => {
  const { item } = route.params;
  const [activeTab, setActiveTab] = useState('details');
  const [modalVisible, setModalVisible] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [completeAddress, setCompleteAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [startingDate, setStartingDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirmDate = (date) => {
    setStartingDate(date);
    hideDatePicker();
  };

  const handleAdd = async () => {
    const bookingData = {
      name,
      fatherName,
      email,
      phone,
      completeAddress,
      city,
      state,
      pinCode,
      startingDate: startingDate.toLocaleDateString(),
      title: item.title,
    };

    try {
      const existingData = await AsyncStorage.getItem('bookings');
      const bookings = existingData ? JSON.parse(existingData) : [];
      bookings.push(bookingData);
      await AsyncStorage.setItem('bookings', JSON.stringify(bookings));
      setModalVisible(false);
    } catch (error) {
      console.log('Error saving booking data', error);
    }
  };

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
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
        ) : (
          <View style={styles.additionalInfoContainer}>
            <Text style={styles.additionalInfoTitle}>Service Schedule</Text>
            <Text style={styles.additionalInfoText}>Monday to Friday, 7:00 AM - 6:00 PM</Text>
          </View>
        )}

        {/* Bottom Register Now Button */}
        <TouchableOpacity style={styles.bottomSubscribeButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.bottomSubscribeText}>Register Now</Text>
        </TouchableOpacity>

        {/* Registration Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add Details for {item.title}</Text>
              <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
              <TextInput placeholder="Father's Name" value={fatherName} onChangeText={setFatherName} style={styles.input} />
              <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} />
              <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" style={styles.input} />
              <TextInput placeholder="Complete Address" value={completeAddress} onChangeText={setCompleteAddress} style={styles.input} />
              <TextInput placeholder="City" value={city} onChangeText={setCity} style={styles.input} />
              <TextInput placeholder="State" value={state} onChangeText={setState} style={styles.input} />
              <TextInput placeholder="Pin Code" value={pinCode} onChangeText={setPinCode} keyboardType="numeric" style={styles.input} />
              <TouchableOpacity onPress={showDatePicker}>
                <Text style={styles.dateText}>Starting Date: {startingDate.toLocaleDateString()}</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
              />
              <View style={styles.modalButtons}>
                <Button title="Cancel" onPress={() => setModalVisible(false)} color="#FF6347" />
                <Button title="Register" onPress={handleAdd} color="#4CAF50" />
              </View>
            </View>
          </View>
        </Modal>
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
  additionalInfoContainer: {
    padding: 10,
    marginTop: 10,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});

export default AcademyDisplayScreen;
