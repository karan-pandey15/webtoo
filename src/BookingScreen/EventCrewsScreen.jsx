 



// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput, Button } from 'react-native';
// import Header from '../components/Header'; 
// import DateTimePickerModal from "react-native-modal-datetime-picker";


// const EventCrewData = [
//   {
//     id: '1',
//     title: 'Event Setup Crew',
//     price: '₹500 per hour',
//     rating: 4.8,
//     reviews: 30,
//     description: 'Experienced crew for setting up stages, booths, and event decor to ensure a smooth start to your event.',
//     imageUrl: null,
//   } ,
  // {
  //   id: '2',
  //   title: 'Event Registration Support',
  //   price: '₹300 per hour',
  //   rating: 4.5,
  //   reviews: 40,
  //   description: 'Friendly and professional staff to handle guest registration and check-in processes.',
  //   imageUrl: null,
  // },
  // {
  //   id: '3',
  //   title: 'Cleaning and Maintenance Crew',
  //   price: '₹400 per hour',
  //   rating: 4.2,
  //   reviews: 25,
  //   description: 'Dedicated crew to maintain cleanliness and order throughout the event.',
  //   imageUrl: null,
  // },
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

// const EventCrewsScreen = () => {
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

//   const handleAdd = async () => {
    
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
//         <Text style={styles.text}>Book Event Crews</Text>
//       </View>
//       <View style={styles.container}>
//         <FlatList
//           data={EventCrewData}
//           renderItem={({ item }) => <MenuItem item={item} onAddPress={openModal} />}
//           keyExtractor={(item) => item.id}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>  
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
//               placeholder="Enter Full Address"
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

 
// export default EventCrewsScreen;
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



import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput, Button } from 'react-native';
import Header from '../components/Header';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const EventCrewData = [
  {
    id: '1',
    title: 'Event Setup Crew',
    price: '₹500 per hour',
    rating: 4.8,
    reviews: 30,
    description: 'Experienced crew for setting up stages, booths, and event decor to ensure a smooth start to your event.',
    imageUrl: null,
  },
  {
    id: '2',
    title: 'Event Registration Support',
    price: '₹300 per hour',
    rating: 4.5,
    reviews: 40,
    description: 'Friendly and professional staff to handle guest registration and check-in processes.',
    imageUrl: null,
  },
  {
    id: '3',
    title: 'Cleaning and Maintenance Crew',
    price: '₹400 per hour',
    rating: 4.2,
    reviews: 25,
    description: 'Dedicated crew to maintain cleanliness and order throughout the event.',
    imageUrl: null,
  },
];

const placeholderImage = 'https://via.placeholder.com/150';

const MenuItem = ({ item, onAddPress }) => (
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

const EventCrewsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleAdd = async () => {
    if (selectedItem && address) {
      try {
        const response = await fetch('http://172.18.80.1:5000/api/crewbookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: selectedItem.title,
            price: selectedItem.price,
            rating: selectedItem.rating,
            reviews: selectedItem.reviews,
            description: selectedItem.description,
            address,
            date,
            time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }),
        });
        
        if (response.ok) {
          alert('Booking created successfully!');
          setModalVisible(false);
          setAddress('');
        } else {
          alert('Failed to create booking.');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while creating the booking.');
      }
    } else {
      alert('Please fill in all fields.');
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
    <>
      <Header />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Book Event Crews</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={EventCrewData}
          renderItem={({ item }) => <MenuItem item={item} onAddPress={openModal} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
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
              placeholder="Enter Full Address"
              value={address}
              onChangeText={(text) => setAddress(text)}
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
              <Text style={styles.timeText}>Select Time: {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
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

export default EventCrewsScreen;

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