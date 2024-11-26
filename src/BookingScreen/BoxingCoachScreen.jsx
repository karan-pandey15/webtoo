// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Modal, TextInput, Button, Alert, ScrollView } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome'; 

// import Header from '../components/Header';

// const services = [
//   {
//     id: '1',
//     type: 'Private Boxing Lesson (1-on-1)',
//     price: '₹499',
//     time: '1 hr',
//     description: 'One-on-one boxing lesson focused on technique, footwork, and conditioning, tailored to your skill level.',
//     imageUrl: 'https://example.com/boxing1.jpg', // Replace with a suitable boxing-related image URL
//   },
//   {
//     id: '2',
//     type: 'Group Boxing Class',
//     price: '₹399 (per person)',
//     time: '1 hr',
//     description: 'Join a dynamic group class that covers basic boxing techniques, conditioning, and sparring drills in a fun and supportive environment.',
//     imageUrl: 'https://example.com/boxing2.jpg', // Replace with a suitable boxing-related image URL
//   },
//   {
//     id: '3',
//     type: 'Youth Boxing Program',
//     price: '₹499',
//     time: '45 min',
//     description: 'A safe and engaging program designed for kids and teens, focusing on the fundamentals of boxing, fitness, and discipline.',
//     imageUrl: 'https://example.com/boxing3.jpg', // Replace with a suitable boxing-related image URL
//   },
//   {
//     id: '4',
//     type: 'Advanced Sparring Session',
//     price: '₹600',
//     time: '1 hr',
//     description: 'An intensive sparring session for experienced boxers looking to refine their skills and techniques under expert guidance.',
//     imageUrl: 'https://example.com/boxing4.jpg', // Replace with a suitable boxing-related image URL
//   },
// ];


// const BoxingCoachScreen = () => {
//   const navigation = useNavigation();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [slotModalVisible, setSlotModalVisible] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   const [addressDetails, setAddressDetails] = useState({
//     houseNumber: '',
//     landmark: '',
//     name: '',
//   });

//   const [availableDates, setAvailableDates] = useState([]);

//   useEffect(() => {
//     // Dynamically generate the next 3 days for the date selection
//     const generateDates = () => {
//       const today = new Date();
//       const dates = [];
//       for (let i = 0; i < 3; i++) {
//         const nextDate = new Date(today);
//         nextDate.setDate(today.getDate() + i);
//         const dateString = nextDate.toDateString().split(' ').slice(0, 3).join(' '); // e.g., "Wed Sep 27"
//         dates.push(dateString);
//       }
//       setAvailableDates(dates);
//     };
//     generateDates();
//   }, []);

//   const openModal = () => {
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   const openSlotModal = () => {
//     setSlotModalVisible(true);
//   };

//   const closeSlotModal = () => {
//     setSlotModalVisible(false);
//   };

//   const onBook = () => {
//     if (!selectedDate || !selectedTime) {
//       Alert.alert('Error', 'Please select a date and time slot.');
//       return;
//     }

//     // Show a confirmation message with user details
//     Alert.alert(
//       'Booking Confirmed',
//       `Name: ${addressDetails.name}\nHouse/Flat: ${addressDetails.houseNumber}\nDate: ${selectedDate}\nTime: ${selectedTime}\n\nOur partner will arrive as scheduled!`,
//     );

//     closeSlotModal();
//   };

//   // Open Date Picker Modal
//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   // Close Date Picker Modal
//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   // Handle Date Picked from Calendar
//   const handleConfirm = (date) => {
//     const dateString = date.toDateString().split(' ').slice(0, 3).join(' ');
//     setSelectedDate(dateString);
//     hideDatePicker();
//   };

//   const renderService = ({ item }) => (
//     <View style={styles.card}>
//       <View style={styles.textContainer}>
//         <Text style={styles.title}>{item.type}</Text>
//         <Text style={styles.text}>{item.price} • {item.time}</Text>
//         <Text style={styles.description}>{item.description}</Text>
//         <TouchableOpacity
//           style={styles.addButton}
//           onPress={openModal}>
//           <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.imageContainer}>
//         <Image 
//           source={{ uri: item.imageUrl }} 
//           style={styles.image} 
//         />
//       </View>
//     </View>
//   );

//   return (
//     <>
//       <Header />
//       <View style={styles.container}>
//         <FlatList
//           data={services}
//           renderItem={renderService}
//           keyExtractor={item => item.id}
//           contentContainerStyle={{ paddingBottom: 20 }}
//         />
//       </View>

//       {/* Modal for entering address details */}
//       <Modal
//         visible={modalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={closeModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Enter Details</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="House/Flat Number"
//               value={addressDetails.houseNumber}
//               onChangeText={(text) => setAddressDetails({ ...addressDetails, houseNumber: text })}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Landmark (Optional)"
//               value={addressDetails.landmark}
//               onChangeText={(text) => setAddressDetails({ ...addressDetails, landmark: text })}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Name"
//               value={addressDetails.name}
//               onChangeText={(text) => setAddressDetails({ ...addressDetails, name: text })}
//             />

//             <View style={styles.modalButtons}>
//               <Button title="Next" onPress={() => { closeModal(); openSlotModal(); }} />
//               <Button title="Cancel" onPress={closeModal} color="red" />
//             </View>
//           </View>
//         </View>
//       </Modal>

//       {/* Modal for selecting date and time slots */}
//       <Modal
//         visible={slotModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={closeSlotModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.slotModalContent}>
//             <Text style={styles.modalTitle}>When should the professional arrive?</Text>
//             <Text style={styles.subText}>Your service will take approx. 1 hr</Text>

//             {/* Date Selection */}
//             <View style={styles.dateContainer}>
//               {availableDates.map((date, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   style={[
//                     styles.dateBox,
//                     selectedDate === date && styles.selectedDateBox,
//                   ]}
//                   onPress={() => setSelectedDate(date)}
//                 >
//                   <Text style={[styles.dateText, selectedDate === date && styles.selectedDateText]}>
//                     {date}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//             <TouchableOpacity style={styles.calendarButton} onPress={showDatePicker}>
//   <Icon name="calendar" size={24} color="#fff" style={styles.calendarIcon} />
// </TouchableOpacity>


//             {/* Time Slot Selection */}
//             <Text style={styles.subText}>Select start time of service</Text>
//             <ScrollView contentContainerStyle={styles.timeContainer}>
//               {['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'].map((time, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   style={[
//                     styles.timeBox,
//                     selectedTime === time && styles.selectedTimeBox,
//                   ]}
//                   onPress={() => setSelectedTime(time)}
//                 >
//                   <Text style={[styles.timeText, selectedTime === time && styles.selectedTimeText]}>
//                     {time}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>

//             <View style={styles.modalButtons}>
//               <Button title="Book" onPress={onBook} />
//               <Button title="Cancel" onPress={closeSlotModal} color="red" />
//             </View>
//           </View>
//         </View>
//       </Modal>

//       {/* Calendar Date Picker */}
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//         // Add Platform-specific adjustments if needed
//         isDarkModeEnabled={Platform.OS === 'android' ? false : null}  // Example for iOS dark mode
//       />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 15,
//   },
//   card: {
//     backgroundColor: '#ffffff',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 15,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   textContainer: {
//     flex: 1,
//     marginRight: 10,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   text: {
//     fontSize: 15,
//     color: '#666',
//   },
//   description: {
//     fontSize: 14,
//     color: '#999',
//     marginTop: 5,
//   },
//   addButton: {
//     marginTop: 15,
//     backgroundColor: '#007BFF',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     shadowColor: '#007BFF',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   addButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   imageContainer: {
//     width: 80,
//     height: 80,
//     borderRadius: 10,
//     backgroundColor: '#e0e0e0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 10,
//     resizeMode: 'cover',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },
//   input: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 10,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   slotModalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   subText: {
//     fontSize: 15,
//     color: '#666',
//     marginVertical: 10,
//   },
//   dateContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   dateBox: {
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#f0f0f0',
//     alignItems: 'center',
//   },
//   selectedDateBox: {
//     backgroundColor: '#007BFF',
//   },
//   dateText: {
//     color: '#333',
//   },
//   selectedDateText: {
//     color: 'white',
//   },
//   timeContainer: {
//     flexWrap: 'wrap',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   timeBox: {
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#f0f0f0',
//     marginVertical: 5,
//     width: '45%',
//     alignItems: 'center',
//   },
//   selectedTimeBox: {
//     backgroundColor: '#007BFF',
//   },
//   timeText: {
//     color: '#333',
//   },
//   selectedTimeText: {
//     color: 'white',
//   },
//   calenderContainer:{
//     marginTop:20
//   },
//   calendarButton: {
//     backgroundColor: '#007BFF' ,
//     paddingVertical: 15,       
//     paddingHorizontal: 20,    
//     borderRadius: 10,          
//     marginTop: 10,            
//     alignSelf: 'center',        
//     elevation: 3,               
//     shadowColor: '#000',         
//     shadowOffset: { width: 0, height: 2 },  
//     shadowOpacity: 0.2,       
//     shadowRadius: 3,          
//   },
  
//   calendarButtonText: {
//     color: '#fff',            
//     fontWeight: 'bold',       
//     fontSize: 16,               
//     textAlign: 'center',        
//   },
// });

// export default BoxingCoachScreen;






import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Modal, TextInput, Button, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';



const services = [
  {
    id: '1',
    type: 'Private Boxing Lesson (1-on-1)',
    price: '₹499',
    time: '1 hr',
    description: 'One-on-one boxing lesson focused on technique, footwork, and conditioning, tailored to your skill level.',
    imageUrl: 'https://example.com/boxing1.jpg', // Replace with a suitable boxing-related image URL
  },
  {
    id: '2',
    type: 'Group Boxing Class',
    price: '₹399 (per person)',
    time: '1 hr',
    description: 'Join a dynamic group class that covers basic boxing techniques, conditioning, and sparring drills in a fun and supportive environment.',
    imageUrl: 'https://example.com/boxing2.jpg', // Replace with a suitable boxing-related image URL
  },
  {
    id: '3',
    type: 'Youth Boxing Program',
    price: '₹499',
    time: '45 min',
    description: 'A safe and engaging program designed for kids and teens, focusing on the fundamentals of boxing, fitness, and discipline.',
    imageUrl: 'https://example.com/boxing3.jpg', // Replace with a suitable boxing-related image URL
  },
  {
    id: '4',
    type: 'Advanced Sparring Session',
    price: '₹499',
    time: '1 hr',
    description: 'An intensive sparring session for experienced boxers looking to refine their skills and techniques under expert guidance.',
    imageUrl: 'https://example.com/boxing4.jpg', // Replace with a suitable boxing-related image URL
  },
];

const BoxingCoachScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [urgent, setUrgent] = useState(false);
  const [slotModalVisible, setSlotModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [addressDetails, setAddressDetails] = useState({
    houseNumber: '',
    landmark: '',
    name: '',
    pinCode: '',
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

  const checkAuthentication = async (isUrgent = false) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      openModal(isUrgent);
    } else {
      setLoginModalVisible(true);
      setTimeout(() => {
        setLoginModalVisible(false);
        navigation.navigate('UserSignin');
      }, 1000);
    }
  };

  const openModal = (isUrgent = false) => {
    setUrgent(isUrgent);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openSlotModal = () => {
    setSlotModalVisible(true);
  };

  const closeSlotModal = () => {
    setSlotModalVisible(false);
  };

  const onBook = async () => {
    if (!selectedDate || !selectedTime) {
      Alert.alert('Error', 'Please select a date and time slot.');
      return;
    }

    const token = await AsyncStorage.getItem('token');
    const userDetails = await AsyncStorage.getItem('userDetails'); // Assuming user details are stored here as a JSON string
    const user = JSON.parse(userDetails);

    // Prepare booking details
    const bookingDetails = {
      address: addressDetails.houseNumber + ', ' + addressDetails.landmark,
      pinCode: addressDetails.pinCode,
      serviceType: services[0].type, // Change this as needed for dynamic service type
      date: selectedDate,
      time: selectedTime,
    };

    try {
      const response = await fetch('https://api.marasimpex.com/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to create booking');
      }

      const data = await response.json();
      console.log('Booking confirmed:', data); // Log the confirmation in console
      Alert.alert('Booking Confirmed', `Your booking has been confirmed for ${selectedDate} at ${selectedTime}.`);
      closeSlotModal();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const onUrgentBook = () => {
    if (!addressDetails.houseNumber || !addressDetails.pinCode) {
      Alert.alert('Error', 'Please enter complete address details.');
      return;
    }

    Alert.alert(
      'Urgent Booking Confirmed',
      `Name: ${addressDetails.name}\nHouse/Flat: ${addressDetails.houseNumber}\nPin: ${addressDetails.pinCode}\n\nOur nurse will arrive shortly!`,
    );
    closeModal();
  };

  const renderService = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.type}</Text>
        <Text style={styles.text}>{item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => checkAuthentication(false)}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
   
        </View>
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
        <FlatList
          data={services}
          renderItem={renderService}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>

      {/* Modal for entering address details */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Details</Text>
            <TextInput
              style={styles.input}
              placeholder="House/Flat Number"
              value={addressDetails.houseNumber}
              onChangeText={(text) => setAddressDetails({ ...addressDetails, houseNumber: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Complete Address"
              value={addressDetails.landmark}
              onChangeText={(text) => setAddressDetails({ ...addressDetails, landmark: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Pin Code"
              keyboardType="numeric"
              value={addressDetails.pinCode}
              onChangeText={(text) => setAddressDetails({ ...addressDetails, pinCode: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Description (Optional)"
              value={addressDetails.name}
              onChangeText={(text) => setAddressDetails({ ...addressDetails, name: text })}
            />
            <View style={styles.modalButtons}>
              {urgent ? (
                <Button title="Confirm Urgent" onPress={onUrgentBook} />
              ) : (
                <Button title="Next" onPress={() => { closeModal(); openSlotModal(); }} />
              )}
              <Button title="Cancel" onPress={closeModal} color="red" />
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal for selecting date and time slots */}
      <Modal
        visible={slotModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeSlotModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.slotModalContent}>
            <Text style={styles.modalTitle}>When should the nurse arrive?</Text>
            <Text style={styles.subText}>Service duration will vary by type</Text>
            {/* Date Selection */}
            <View style={styles.dateContainer}>
              {availableDates.map((date, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.dateBox, selectedDate === date && styles.selectedDateBox]}
                  onPress={() => setSelectedDate(date)}
                >
                  <Text style={[styles.dateText, selectedDate === date && styles.selectedDateText]}>
                    {date}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {/* Time Slot Selection */}
            <Text style={styles.subText}>Select start time of service</Text>
            <ScrollView contentContainerStyle={styles.timeContainer}>
              {['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM'].map((time, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.timeBox, selectedTime === time && styles.selectedTimeBox]}
                  onPress={() => setSelectedTime(time)}
                >
                  <Text style={[styles.timeText, selectedTime === time && styles.selectedTimeText]}>
                    {time}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            {/* Modal buttons */}
            <View style={styles.modalButtons}>
              <Button title="Book" onPress={onBook} />
              <Button title="Cancel" onPress={closeSlotModal} color="red" />
            </View>
          </View>
        </View>
      </Modal>

      {/* Login reminder modal */}
      <Modal
        visible={loginModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setLoginModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.loginModalContent}>
            <Text style={styles.modalTitle}>Please login to use service</Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default BoxingCoachScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9f9f9',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 2,
      marginBottom: 20,
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textContainer: {
      flex: 3,
      paddingRight: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#333',
    },
    text: {
      fontSize: 14,
      color: '#666',
      marginBottom: 8,
    },
    description: {
      fontSize: 13,
      color: '#888',
      marginBottom: 10,
      lineHeight: 18,
    },
    buttonsRow: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 10,
    },
    addButton: {
      backgroundColor: '#007BFF',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      width:250
    },
    urgentButton: {
      backgroundColor: '#ff5555',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
      marginLeft: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 10,
      resizeMode: 'cover',
    },
  
    // Modal Styles
    loginModalContent:{
      backgroundColor:"#FFF",
      color:'black'
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '90%',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#333',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      padding: 10,
      fontSize: 16,
      marginVertical: 10,
      backgroundColor: '#f5f5f5',
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    },
  
    // Date and Time Slot Modal
    slotModalContent: {
      width: '90%',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
    },
    subText: {
      fontSize: 14,
      color: '#666',
      textAlign: 'center',
      marginBottom: 10,
    },
    dateContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    dateBox: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#f5f5f5',
      width: '28%',
      alignItems: 'center',
    },
    selectedDateBox: {
      backgroundColor: '#28a745',
      borderColor: '#28a745',
    },
    dateText: {
      color: '#666',
      fontSize: 14,
    },
    selectedDateText: {
      color: '#fff',
    },
  
    timeContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    timeBox: {
      width: '30%',
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#f5f5f5',
      marginBottom: 10,
      alignItems: 'center',
    },
    selectedTimeBox: {
      backgroundColor: '#28a745',
      borderColor: '#28a745',
    },
    timeText: {
      color: '#666',
      fontSize: 14,
    },
    selectedTimeText: {
      color: '#fff',
    },
  
    // Button Styles
    button: {
      backgroundColor: '#28a745',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5,
    },
    cancelButton: {
      backgroundColor: '#ff5555',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
   
 

