
// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput, Button, Alert } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
// import Header from '../components/Header';

// const HokeyScreen = () => {

//   const [activeTab, setActiveTab] = useState('details');
//   const [modalVisible, setModalVisible] = useState(false);
//   const navigation = useNavigation();
//   const [selectedAcademy, setSelectedAcademy] = useState(null);
//   const [name, setName] = useState('');
//   const [fatherName, setFatherName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [completeAddress, setCompleteAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [pinCode, setPinCode] = useState('');
//   const [startingDate, setStartingDate] = useState(new Date());
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   const showDatePicker = () => setDatePickerVisibility(true);
//   const hideDatePicker = () => setDatePickerVisibility(false);

//   const handleConfirmDate = (date) => {
//     setStartingDate(date);
//     hideDatePicker();
//   };

//   const handleAdd = async () => {
//     const bookingData = {
//       name,
//       fatherName,
//       email,
//       phone,
//       completeAddress,
//       city,
//       state,
//       pinCode,
//       startingDate: startingDate.toLocaleDateString(),
//       selectedAcademy, // Store selected academy data
//     };

//     try {
//       await AsyncStorage.setItem('userData', JSON.stringify(bookingData));
//       setModalVisible(false);
//       navigation.navigate('SportsDashboard');
//     } catch (error) {
//       console.log('Error saving booking data', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Header />
//       <ScrollView contentContainerStyle={styles.contentContainer}>
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: 'https://example.com/dropping-school-image.jpg' }} style={styles.image} resizeMode="contain" />
//         </View>

//         <View style={styles.infoContainer}>
//           <Text style={styles.title}>Hokey Coaching for Aspiring Players</Text>
//           <Text style={styles.price}>₹3500 / month</Text>
//           <Text style={styles.taxInfo}>(Inclusive of all taxes)</Text>
//         </View>

//         <TouchableOpacity style={styles.subscribeButton} onPress={() => setModalVisible(true)}>
//           <Text style={styles.subscribeText}>Register now!</Text>
//         </TouchableOpacity>

//         <View style={styles.tabsContainer}>
//           <TouchableOpacity onPress={() => setActiveTab('details')}>
//             <Text style={[styles.tab, activeTab === 'details' && styles.activeTab]}>Details</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => setActiveTab('otherInfo')}>
//             <Text style={[styles.tab, activeTab === 'otherInfo' && styles.activeTab]}>Other Info</Text>
//           </TouchableOpacity>
//         </View>

//         {activeTab === 'details' ? (
//           <View style={styles.descriptionContainer}>
//             <Text style={styles.descriptionTitle}>Program  Description</Text>
//             <Text style={styles.descriptionText}>
//               Our comprehensive Hokey coaching program offers personalized training with experienced coaches.
//               Focusing on batting, bowling, and fielding techniques, we ensure players of all ages and skill levels
//               can improve their game. Ideal for those aiming to excel in the sport.

//             </Text>
//           </View>
//         ) : (
//           <View style={styles.additionalInfoContainer}>
//             <Text style={styles.additionalInfoTitle}>Service Schedule</Text>
//             <Text style={styles.additionalInfoText}>Monday to Friday, 7:00 AM - 6:00 PM</Text>
//           </View>
//         )}

//         <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>Add Details</Text>
//               <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
//               <TextInput placeholder="Father's Name" value={fatherName} onChangeText={setFatherName} style={styles.input} />
//               <TextInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} />
//               <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" style={styles.input} />
//               <TextInput placeholder="PIN Code" value={pinCode} onChangeText={setPinCode} style={styles.input} keyboardType="numeric" maxLength={6} />
//               <TextInput placeholder="Complete Address" value={completeAddress} onChangeText={setCompleteAddress} style={styles.input} />
//               <TextInput placeholder="City" value={city} onChangeText={setCity} style={styles.input} />
//               <TextInput placeholder="State" value={state} onChangeText={setState} style={styles.input} />
//               <TouchableOpacity onPress={showDatePicker}>
//                 <Text style={styles.dateText}>Starting Date: {startingDate.toLocaleDateString()}</Text>
//               </TouchableOpacity>
//               <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirmDate} onCancel={hideDatePicker} />
//               <View style={styles.modalButtons}>
//                 <Button title="Cancel" onPress={() => setModalVisible(false)} color="#FF6347" />
//                 <Button title="Register" onPress={handleAdd} color="#4CAF50" />
//               </View>
//             </View>
//           </View>
//         </Modal>


//       </ScrollView>
//     </View>
//   );
// };

// export default HokeyScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   contentContainer: { padding: 16 },
//   imageContainer: { alignItems: 'center', marginVertical: 20 },
//   image: { width: 150, height: 150 },
//   infoContainer: { alignItems: 'center' },
//   title: { fontSize: 18, fontWeight: 'bold', color: '#000' },
//   price: { fontSize: 16, color: '#000', marginTop: 5 },
//   taxInfo: { fontSize: 12, color: '#666', marginTop: 5 },
//   subscribeButton: { alignSelf: 'center', backgroundColor: '#4A91C2', borderRadius: 5, paddingVertical: 8, paddingHorizontal: 15, marginVertical: 10 },
//   subscribeText: { color: '#fff', fontWeight: 'bold' },
//   tabsContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 15 },
//   tab: { fontSize: 16, fontWeight: 'bold', color: '#000', marginHorizontal: 20 },
//   activeTab: { color: '#ff6600', borderBottomWidth: 2, borderBottomColor: '#ff6600' },
//   descriptionContainer: { padding: 10 },
//   additionalInfoContainer: { padding: 10, marginTop: 10 },
//   modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
//   modalView: { width: '80%', backgroundColor: 'white', padding: 20, borderRadius: 10, elevation: 10 },
//   modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
//   input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 },
//   dateText: { fontSize: 16, color: '#333', marginBottom: 10 },

//   container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 },
//   card: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 16, marginVertical: 8, borderRadius: 8, borderColor: '#ddd', borderWidth: 1 },
//   cardContent: { flex: 1, paddingRight: 8 },
//   title: { fontSize: 18, fontWeight: 'bold' },
//   price: { fontSize: 16, color: '#555', marginVertical: 4 },
//   ratingContainer: { flexDirection: 'row', alignItems: 'center' },
//   rating: { fontSize: 14, color: '#4caf50', fontWeight: 'bold' },
//   reviews: { fontSize: 14, color: '#999', marginLeft: 4 },
//   description: { fontSize: 14, color: '#666' },
//   image: { width: 80, height: 80, borderRadius: 8, resizeMode: 'cover' },
//   addButton: { backgroundColor: '#87CEFA', borderRadius: 4, paddingVertical: 6, paddingHorizontal: 16, position: 'absolute', right: 16, bottom: 16 },
//   addButtonText: { color: '#fff', fontWeight: 'bold' },
//   modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
//   modalContent: { width: '80%', backgroundColor: '#fff', borderRadius: 8, padding: 20, alignItems: 'center' },
//   modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
//   input: { width: '100%', height: 40, borderColor: '#ddd', borderWidth: 1, borderRadius: 5, marginBottom: 20, paddingHorizontal: 10 },
//   modalButtons: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20 },
//   dateText: { fontSize: 16, color: '#007BFF', marginBottom: 20 },
// });




import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const HokeyScreen = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [modalVisible, setModalVisible] = useState(false);
  const [feeType, setFeeType] = useState(null);
  const [feeAmount, setFeeAmount] = useState('');
  const [state, setState] = useState('');
  const [completeAddress, setCompleteAddress] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [startingDate, setStartingDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const navigation = useNavigation();

  const selectedAcademy = {
    title: 'Hokey Coaching for Aspiring Players',
    price: feeType === 'registration' ? '₹1500' : '₹3500',
    taxInfo: '(Inclusive of all taxes)',
  };

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirmDate = (date) => {
    setStartingDate(date);
    hideDatePicker();
  };

  const handleAdd = async () => {
    const bookingData = {
      name,
      email,
      phone,
      completeAddress,
      city,
      state,
      pinCode,
      startingDate: startingDate.toLocaleDateString(),
      selectedAcademy,
      feeType,
      feeAmount,
    };

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(bookingData));
      setModalVisible(false);
      navigation.navigate('SportsDashboard');
    } catch (error) {
      console.log('Error saving booking data', error);
      Alert.alert('Error', 'Failed to save booking data.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://example.com/dropping-school-image.jpg' }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{selectedAcademy.title}</Text>
          <Text style={styles.price}>{selectedAcademy.price}</Text>
          <Text style={styles.taxInfo}>{selectedAcademy.taxInfo}</Text>
        </View>

        <TouchableOpacity
          style={styles.subscribeButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.subscribeText}>Register now!</Text>
        </TouchableOpacity>

        <View style={styles.tabsContainer}>
          <TouchableOpacity onPress={() => setActiveTab('details')}>
            <Text style={[styles.tab, activeTab === 'details' && styles.activeTab]}>
              Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('otherInfo')}>
            <Text style={[styles.tab, activeTab === 'otherInfo' && styles.activeTab]}>
              Other Info
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'details' ? (
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Program Description</Text>
            <Text style={styles.descriptionText}>
              Our comprehensive Hokey coaching program offers personalized training with
              experienced coaches. Focusing on batting, bowling, and fielding techniques, we
              ensure players of all ages and skill levels can improve their game. Ideal for
              those aiming to excel in the sport.
            </Text>
          </View>
        ) : (
          <View style={styles.additionalInfoContainer}>
            <Text style={styles.additionalInfoTitle}>Service Schedule</Text>
            <Text style={styles.additionalInfoText}>
              Monday to Friday, 7:00 AM - 6:00 PM
            </Text>
          </View>
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add Details</Text>
              <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
              />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={styles.input}
              />
              <TextInput
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                style={styles.input}
              />
              <TextInput
                placeholder="PIN Code"
                value={pinCode}
                onChangeText={setPinCode}
                style={styles.input}
                keyboardType="numeric"
                maxLength={6}
              />
              <TextInput
                placeholder="State"
                value={state}
                onChangeText={setState}
                style={styles.input}
              />
              <TextInput
                placeholder="Complete Address"
                value={completeAddress}
                onChangeText={setCompleteAddress}
                style={styles.input}
              />
              <TextInput
                placeholder="City"
                value={city}
                onChangeText={setCity}
                style={styles.input}
              />

              <TouchableOpacity onPress={showDatePicker}>
                <Text style={styles.dateText}>
                  Starting Date: {startingDate.toLocaleDateString()}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
              />

              <View style={styles.feeSelectionContainer}>
                <TouchableOpacity
                  style={[
                    styles.feeOption,
                    feeType === 'registration' && styles.activeFeeOption,
                  ]}
                  onPress={() => {
                    setFeeType('registration');
                    setFeeAmount('1500');
                  }}
                >
                  <Text style={styles.feeOptionText}>Registration Fee</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.feeOption,
                    feeType === 'monthly' && styles.activeFeeOption,
                  ]}
                  onPress={() => {
                    setFeeType('monthly');
                    setFeeAmount('3500');
                  }}
                >
                  <Text style={styles.feeOptionText}>Monthly Fee</Text>
                </TouchableOpacity>
              </View>

              {feeType && (
                <TextInput
                  placeholder="Fee Amount"
                  value={`₹${feeAmount}`}
                  editable={false}
                  style={styles.input}
                />
              )}

              <View style={styles.modalButtons}>
                <Button
                  title="Cancel"
                  onPress={() => setModalVisible(false)}
                  color="#FF6347"
                />
                <Button title="Register" onPress={handleAdd} color="#4CAF50" />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default HokeyScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  contentContainer: { padding: 16 },
  imageContainer: { alignItems: 'center', marginVertical: 20 },
  image: { width: 150, height: 150 },
  infoContainer: { alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  price: { fontSize: 16, color: '#000', marginTop: 5 },
  taxInfo: { fontSize: 12, color: '#666', marginTop: 5 },
  subscribeButton: { alignSelf: 'center', backgroundColor: '#4A91C2', borderRadius: 5, paddingVertical: 8, paddingHorizontal: 15, marginVertical: 10 },
  subscribeText: { color: '#fff', fontWeight: 'bold' },
  tabsContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 15 },
  tab: { fontSize: 16, fontWeight: 'bold', color: '#000', marginHorizontal: 20 },
  activeTab: { color: '#ff6600', borderBottomWidth: 2, borderBottomColor: '#ff6600' },
  descriptionContainer: { padding: 10 },
  additionalInfoContainer: { padding: 10, marginTop: 10 },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalContent: { width: '80%', backgroundColor: '#fff', borderRadius: 8, padding: 20, alignItems: 'center' },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { width: '100%', height: 40, borderColor: '#ddd', borderWidth: 1, borderRadius: 5, marginBottom: 10, paddingHorizontal: 10 },
  dateText: { fontSize: 16, color: '#007BFF', marginBottom: 10 },
  feeSelectionContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  feeOption: { flex: 1, padding: 10, marginHorizontal: 5, borderWidth: 1, borderRadius: 5, alignItems: 'center' },
  activeFeeOption: { backgroundColor: '#4CAF50', borderColor: '#4CAF50' },
  feeOptionText: { color: '#000' },
  modalButtons: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20 },
});
