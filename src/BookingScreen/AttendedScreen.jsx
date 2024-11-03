 

// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput, Button } from 'react-native';
// import Header from '../components/Header';
// import { Picker } from '@react-native-picker/picker';
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// const GaruduianKidsData = [
//   {
//     id: '1',
//     title: 'Dropping School, Tuition',
//     price: '₹130 per trip',
//     rating: 5.0,
//     reviews: 19,
//     description: 'Safe and reliable transportation for your child to and from school and tuition classes.',
//     imageUrl: null,
//   },
//   {
//     id: '2',
//     title: 'Shopping and Market Assistance',
//     price: '₹180 per hour',
//     rating: 4.7,
//     reviews: 28,
//     description: 'Assistance with grocery shopping and errands while keeping your child engaged and safe.',
//     imageUrl: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '3',
//     title: 'Travelling with Kids',
//     price: '₹120 per trip',
//     rating: 4.0,
//     reviews: 95,
//     description: 'Careful attention and fun activities during trips to keep your child entertained and comfortable.',
//     imageUrl: null,
//   },
//   {
//     id: '4',
//     title: 'Night Shift Job Support for Kids',
//     price: '₹200 per night',
//     rating: 4.0,
//     reviews: 95,
//     description: 'Overnight child care and support for parents working night shifts, ensuring your child’s comfort and safety.',
//     imageUrl: null,
//   },
//   {
//     id: '5',
//     title: 'Baby Sitter',
//     price: '₹150 per hour',
//     rating: 4.0,
//     reviews: 95,
//     description: 'Professional babysitting service that ensures your child is in safe hands.',
//     imageUrl: null,
//   },
// ];

// const AttendedData = [
//   {
//     id: '1',
//     title: 'For Hospital Visit',
//     price: '₹130 per visit',
//     rating: 5.0,
//     reviews: 19,
//     description: 'Assistance for hospital visits, ensuring comfort and support during medical appointments or check-ups.',
//     imageUrl: null,
//   },
//   {
//     id: '2',
//     title: 'For Shopping Assistance',
//     price: '₹180 per hour',
//     rating: 4.7,
//     reviews: 28,
//     description: 'Companion service for shopping, helping with errands while ensuring convenience and assistance throughout.',
//     imageUrl: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '3',
//     title: 'For Official Work',
//     price: '₹120 per hour',
//     rating: 4.0,
//     reviews: 95,
//     description: 'Professional support for official tasks or work meetings, providing companionship and logistical assistance.',
//     imageUrl: null,
//   },
//   {
//     id: '4',
//     title: 'For Travelling with Parents',
//     price: '₹120 per trip',
//     rating: 4.0,
//     reviews: 95,
//     description: 'Travel assistance to ensure safe and enjoyable trips, offering help with navigation and comfort for parents.',
//     imageUrl: null,
//   },
//   {
//     id: '5',
//     title: 'Baby Sitter',
//     price: '₹150 per hour',
//     rating: 4.0,
//     reviews: 95,
//     description: 'Experienced babysitting service to care for your child in a safe and nurturing environment.',
//     imageUrl: null,
//   },
// ];

// const placeholderImage = 'https://via.placeholder.com/150';

// const MenuItem = ({ item, onAddPress }) => {
//   return (
//     <View style={styles.card}>
//       <View style={styles.cardContent}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.price}>{item.price}</Text>
//         <View style={styles.ratingContainer}>
//           <Text style={styles.rating}>{item.rating} ⭐</Text>
//           <Text style={styles.reviews}>({item.reviews})</Text>
//         </View>
//         <Text style={styles.description}>{item.description}</Text>
//       </View>
//       <Image source={{ uri: item.imageUrl || placeholderImage }} style={styles.image} />
//       <TouchableOpacity style={styles.addButton} onPress={() => onAddPress(item)}>
//         <Text style={styles.addButtonText}>ADD</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const AttendedScreen = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [address, setAddress] = useState('');
//   const [date, setDate] = useState(new Date());
//   const [time, setTime] = useState(new Date());
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

//   const openModal = (item) => {
//     setSelectedItem(item);
//     setModalVisible(true);
//   };

//   const handleAdd = () => {
//     console.log("Address:", address, "Date:", date.toLocaleDateString(), "Time:", time.toLocaleTimeString());
//     setModalVisible(false);
//   };

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirmDate = (selectedDate) => {
//     setDate(selectedDate);
//     hideDatePicker();
//   };

//   const showTimePicker = () => {
//     setTimePickerVisibility(true);
//   };

//   const hideTimePicker = () => {
//     setTimePickerVisibility(false);
//   };

//   const handleConfirmTime = (selectedTime) => {
//     setTime(selectedTime);
//     hideTimePicker();
//   };

//   return (
//     <>
//       <Header />
//       <View style={styles.textContainer}>
//         <Text style={styles.text}>Book Garuduian for Kids</Text>
//       </View>
//       <View style={styles.container}>
//         <FlatList
//           data={GaruduianKidsData}
//           renderItem={({ item }) => <MenuItem item={item} onAddPress={openModal} />}
//           keyExtractor={(item) => item.id}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.text}>Book Attended For Parents</Text>
//       </View>
//       <View style={styles.container}>
//         <FlatList
//           data={AttendedData}
//           renderItem={({ item }) => <MenuItem item={item} onAddPress={openModal} />}
//           keyExtractor={(item) => item.id}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>

//       {/* Modal for Address and Time Slot Selection */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Add Details for {selectedItem?.title}</Text>

//             <TextInput
//               style={styles.input}
//               placeholder="Enter PickUp Address"
//               value={address}
//               onChangeText={(text) => setAddress(text)}
//             />

//             <TextInput
//               style={styles.input}
//               placeholder="Enter Drop Address"
//               value={address}
//               onChangeText={(text) => setAddress(text)}
//             />


//             <TouchableOpacity onPress={showDatePicker}>
//               <Text style={styles.dateText}>
//                 Select Date: {date.toLocaleDateString()}
//               </Text>
//             </TouchableOpacity>
//             <DateTimePickerModal
//               isVisible={isDatePickerVisible}
//               mode="date"
//               onConfirm={handleConfirmDate}
//               onCancel={hideDatePicker}
//             />

//             <TouchableOpacity onPress={showTimePicker}>
//               <Text style={styles.timeText}>
//                 Select Time: {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//               </Text>
//             </TouchableOpacity>
//             <DateTimePickerModal
//               isVisible={isTimePickerVisible}
//               mode="time"
//               onConfirm={handleConfirmTime}
//               onCancel={hideTimePicker}
//             />

//             <View style={styles.modalButtons}>
//               <Button title="Cancel" onPress={() => setModalVisible(false)} color="#FF6347" />
//               <Button title="Book" onPress={handleAdd} color="#4CAF50" />
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 16,
//   },
//   text: {
//     fontSize: 25,
//     fontWeight: '600',
//     marginLeft: 40,
//     marginTop: 40,
//     color: '#00b0ff',
//   },
//   textContainer: {
//     textAlign: 'center',
//     backgroundColor: '#fff',
//   },
//   card: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 16,
//     marginVertical: 8,
//     borderRadius: 8,
//     borderColor: '#ddd',
//     borderWidth: 1,
//   },
//   cardContent: {
//     flex: 1,
//     paddingRight: 8,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   price: {
//     fontSize: 16,
//     color: '#555',
//     marginVertical: 4,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   rating: {
//     fontSize: 14,
//     color: '#4caf50',
//     fontWeight: 'bold',
//   },
//   reviews: {
//     fontSize: 14,
//     color: '#999',
//     marginLeft: 4,
//   },
//   description: {
//     fontSize: 14,
//     color: '#666',
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     resizeMode: 'cover',
//   },
//   addButton: {
//     backgroundColor: '#87CEFA',
//     borderRadius: 4,
//     paddingVertical: 6,
//     paddingHorizontal: 16,
//     position: 'absolute',
//     right: 16,
//     bottom: 16,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 20,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   label: {
//     alignSelf: 'flex-start',
//     fontSize: 14,
//     color: '#666',
//   },
//   picker: {
//     width: '100%',
//     height: 50,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginTop: 20,
//   },
//   dateText: {
//     fontSize: 16,
//     color: '#007BFF',
//     marginBottom: 20,
//   },
//   timeText: {
//     fontSize: 16,
//     color: '#007BFF',
//     marginBottom: 20,
//   },
// });

// export default AttendedScreen;



import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput, Button } from 'react-native';
import Header from '../components/Header';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const GaruduianKidsData = [
  {
    id: '1',
    title: 'Dropping School, Tuition',
    price: '₹130 per trip',
    rating: 5.0,
    reviews: 19,
    description: 'Safe and reliable transportation for your child to and from school and tuition classes.',
    imageUrl: 'https://via.placeholder.com/150',
    },
  {
    id: '2',
    title: 'Shopping and Market Assistance',
    price: '₹180 per hour',
    rating: 4.7,
    reviews: 28,
    description: 'Assistance with grocery shopping and errands while keeping your child engaged and safe.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    title: 'Travelling with Kids',
    price: '₹120 per trip',
    rating: 4.0,
    reviews: 95,
    description: 'Careful attention and fun activities during trips to keep your child entertained and comfortable.',
    imageUrl: null,
  },
  {
    id: '4',
    title: 'Night Shift Job Support for Kids',
    price: '₹200 per night',
    rating: 4.0,
    reviews: 95,
    description: 'Overnight child care and support for parents working night shifts, ensuring your child’s comfort and safety.',
    imageUrl: null,
  },
  {
    id: '5',
    title: 'Baby Sitter',
    price: '₹150 per hour',
    rating: 4.0,
    reviews: 95,
    description: 'Professional babysitting service that ensures your child is in safe hands.',
    imageUrl: null,
  },
];

const AttendedData = [
  {
    id: '1',
    title: 'For Hospital Visit',
    price: '₹130 per visit',
    rating: 5.0,
    reviews: 19,
    description: 'Assistance for hospital visits, ensuring comfort and support during medical appointments or check-ups.',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqfTyX5pLoDbfu9A_IZ1ersMNV0bSG0CeFA&s",
  },
  {
    id: '2',
    title: 'For Shopping Assistance',
    price: '₹180 per hour',
    rating: 4.7,
    reviews: 28,
    description: 'Companion service for shopping, helping with errands while ensuring convenience and assistance throughout.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    title: 'For Official Work',
    price: '₹120 per hour',
    rating: 4.0,
    reviews: 95,
    description: 'Professional support for official tasks or work meetings, providing companionship and logistical assistance.',
    imageUrl: null,
  },
  {
    id: '4',
    title: 'For Travelling with Parents',
    price: '₹120 per trip',
    rating: 4.0,
    reviews: 95,
    description: 'Travel assistance to ensure safe and enjoyable trips, offering help with navigation and comfort for parents.',
    imageUrl: null,
  },
  {
    id: '5',
    title: 'Baby Sitter',
    price: '₹150 per hour',
    rating: 4.0,
    reviews: 95,
    description: 'Experienced babysitting service to care for your child in a safe and nurturing environment.',
    imageUrl: null,
  },
];


const placeholderImage = 'https://via.placeholder.com/150';

const MenuItem = ({ item, onAddPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{item.rating} ⭐</Text>
          <Text style={styles.reviews}>({item.reviews})</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Image source={{ uri: item.imageUrl || placeholderImage }} style={styles.image} />
      <TouchableOpacity style={styles.addButton} onPress={() => onAddPress(item)}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const AttendedScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [address, setAddress] = useState('');
  const [dropAddress, setDropAddress] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleAdd = async () => {
    const bookingDetails = {
      title: selectedItem.title,
      pickupAddress: address,
      dropAddress: dropAddress,
      date: date.toLocaleDateString(),
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      price: selectedItem.price,
    };

    try {
      const response = await fetch('http://your-backend-url/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });

      const data = await response.json();
      console.log('Booking Response:', data);
      // Optionally reset fields after successful booking
      setModalVisible(false);
      setAddress('');
      setDropAddress('');
    } catch (error) {
      console.error('Error adding booking:', error);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (selectedDate) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (selectedTime) => {
    setTime(selectedTime);
    hideTimePicker();
  };

  return (
    <>
      <Header />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Book Garuduian for Kids</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={GaruduianKidsData}
          renderItem={({ item }) => <MenuItem item={item} onAddPress={openModal} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Book Attended For Parents</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={AttendedData}
          renderItem={({ item }) => <MenuItem item={item} onAddPress={openModal} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Modal for Address and Time Slot Selection */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Details for {selectedItem?.title}</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter PickUp Address"
              value={address}
              onChangeText={(text) => setAddress(text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Enter Drop Address"
              value={dropAddress}
              onChangeText={(text) => setDropAddress(text)}
            />

            <TouchableOpacity onPress={showDatePicker}>
              <Text style={styles.dateText}>
                Select Date: {date.toLocaleDateString()}
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirmDate}
              onCancel={hideDatePicker}
            />

            <TouchableOpacity onPress={showTimePicker}>
              <Text style={styles.timeText}>
                Select Time: {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleConfirmTime}
              onCancel={hideTimePicker}
            />

            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} color="#FF6347" />
              <Button title="Book" onPress={handleAdd} color="#4CAF50" />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    marginLeft: 40,
    marginTop: 40,
    color: '#00b0ff',
  },
  textContainer: {
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  cardContent: {
    flex: 1,
    paddingRight: 8,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#4caf50',
    fontWeight: 'bold',
  },
  reviews: {
    fontSize: 14,
    color: '#999',
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  addButton: {
    backgroundColor: '#87CEFA',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 16,
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
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
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    color: '#666',
  },
  picker: {
    width: '100%',
    height: 50,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  dateText: {
    fontSize: 16,
    color: '#007BFF',
    marginBottom: 20,
  },
  timeText: {
    fontSize: 16,
    color: '#007BFF',
    marginBottom: 20,
  },
});
export default AttendedScreen;
