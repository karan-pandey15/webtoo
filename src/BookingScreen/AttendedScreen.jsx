 

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
    imageUrl: 'data:image/jpeg;base64,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',
    },
  {
    id: '2',
    title: 'Shopping and Market Assistance',
    price: '₹180 per hour',
    rating: 4.7,
    reviews: 28,
    description: 'Assistance with grocery shopping and errands while keeping your child engaged and safe.',
    imageUrl: 'data:image/jpeg;base64,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',
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
    imageUrl: 'data:image/jpeg;base64,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',
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
      const response = await fetch('https://api.marasimpex.com/api/bookings', {
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
