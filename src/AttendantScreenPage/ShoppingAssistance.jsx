// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import Header from '../components/Header';

// const ShoppingAssistance = () => {
//   const [activeTab, setActiveTab] = useState('details'); // Track active tab

//   return (
//     <View>
//       <Header />
//       <ScrollView contentContainerStyle={styles.container}>
//         {/* Main Image */}
//         <View style={styles.imageContainer}>
//           <Image
//             source={{ uri: 'https://example.com/shopping-assistance-image.jpg' }} // replace with a suitable shopping assistance image URL
//             style={styles.image}
//             resizeMode="contain"
//           />
//         </View>

//         {/* Service Title and Price */}
//         <View style={styles.infoContainer}>
//           <Text style={styles.title}>Shopping Assistance Service</Text>
//           <Text style={styles.price}>₹500 / day</Text>
//           <Text style={styles.taxInfo}>(Inclusive of all taxes)</Text>
//         </View>

//         {/* Book Now Button */}
//         <TouchableOpacity style={styles.bookButton}>
//           <Text style={styles.bookText}>Book now!</Text>
//         </TouchableOpacity>

//         {/* Tabs for Details and Other Info */}
//         <View style={styles.tabsContainer}>
//           <TouchableOpacity onPress={() => setActiveTab('details')}>
//             <Text style={[styles.tab, activeTab === 'details' && styles.activeTab]}>Details</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => setActiveTab('otherInfo')}>
//             <Text style={[styles.tab, activeTab === 'otherInfo' && styles.activeTab]}>Other Info</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Conditional Content Based on Active Tab */}
//         {activeTab === 'details' ? (
//           <View style={styles.descriptionContainer}>
//             <Text style={styles.descriptionTitle}>Service Description</Text>
//             <Text style={styles.descriptionText}>
              // Our shopping assistance service is designed to help you with all your shopping needs. Whether it's groceries, clothing, or essential items, our team is here to provide reliable assistance. We ensure a hassle-free experience, allowing you to relax while we take care of your shopping requirements efficiently.

//             </Text>
//           </View>
//         ) : (
//           <View style={styles.additionalInfoContainer}>
//             <Text style={styles.additionalInfoTitle}>Service Schedule</Text>
//             <Text style={styles.additionalInfoText}>Available Daily, 10:00 AM - 8:00 PM</Text>
//           </View>
//         )}

//         {/* Bottom Book Now Button */}
//         <TouchableOpacity style={styles.bottomBookButton}>
//           <Text style={styles.bottomBookText}>Book Now</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   imageContainer: {
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   image: {
//     width: 150,
//     height: 150,
//   },
//   infoContainer: {
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//     textAlign: 'center',
//   },
//   price: {
//     fontSize: 16,
//     color: '#000',
//     marginTop: 5,
//   },
//   taxInfo: {
//     fontSize: 12,
//     color: '#666',
//     marginTop: 5,
//   },
//   bookButton: {
//     alignSelf: 'center',
//     backgroundColor: '#ff6600',
//     borderRadius: 5,
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     marginVertical: 10,
//   },
//   bookText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginVertical: 15,
//   },
//   tab: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//     marginHorizontal: 20,
//   },
//   activeTab: {
//     color: '#ff6600',
//     borderBottomWidth: 2,
//     borderBottomColor: '#ff6600',
//   },
//   descriptionContainer: {
//     padding: 10,
//   },
//   descriptionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   descriptionText: {
//     fontSize: 14,
//     color: '#333',
//     marginTop: 8,
//   },
//   additionalInfoContainer: {
//     padding: 10,
//     marginTop: 10,
//   },
//   additionalInfoTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   additionalInfoText: {
//     fontSize: 14,
//     color: '#333',
//     marginTop: 5,
//   },
//   bottomBookButton: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#3366cc',
//     paddingVertical: 12,
//     marginVertical: 20,
//     borderRadius: 5,
//   },
//   bottomBookText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default ShoppingAssistance;



import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput, Button, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const ShoppingAssistance = () => {
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
      title: "Shopping Assistance Service",
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
          <Text style={styles.title}>Shopping Assistance Service</Text>
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
            Our shopping assistance service is designed to help you with all your shopping needs. Whether it's groceries, clothing, or essential items, our team is here to provide reliable assistance. We ensure a hassle-free experience, allowing you to relax while we take care of your shopping requirements efficiently.

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
 
export default ShoppingAssistance;

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
