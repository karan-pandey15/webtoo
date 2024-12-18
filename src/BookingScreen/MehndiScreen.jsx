

import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Hook for navigation 
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DateTimePickerModal from "react-native-modal-datetime-picker";

const MehndiData = [
  {
    id: '1',
    title: 'Mehndi Artist',
    price: '₹199 for 1 hand',
    rating: 4.9,
    reviews: 45,
    description: 'Expert in intricate and traditional bridal Mehndi designs to make your special day unforgettable.',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiT2BafSpIxZD0VH-Oc0Z4PU85oy1Sp-1C-Q&s",
  },
  {
    id: '2',
    title: 'Party Mehndi Artist',
    price: '₹300 per person',
    rating: 4.7,
    reviews: 60,
    description: 'Skilled Mehndi artists for parties and gatherings, offering a variety of trendy and classic designs.',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiT2BafSpIxZD0VH-Oc0Z4PU85oy1Sp-1C-Q&s",
  },
  {
    id: '3',
    title: 'Bridal Mehndi Artist',
    price: '₹199 for 1 hand',
    rating: 4.9,
    reviews: 45,
    description: 'Expert in intricate and traditional bridal Mehndi designs to make your special day unforgettable.',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiT2BafSpIxZD0VH-Oc0Z4PU85oy1Sp-1C-Q&s",
  },
  {
    id: '4',
    title: 'Festive Mehndi Artist',
    price: '₹199 for 1 hand',
    rating: 4.8,
    reviews: 35,
    description: 'Celebrate festivals with beautiful Mehndi designs, customized to add joy to your celebrations.',
    imageUrl: "https://example.com/festive-mehndi.jpg",
  },
  {
    id: '5',
    title: 'Corporate Event Mehndi Artist',
    price: '₹400 per person',
    rating: 4.6,
    reviews: 20,
    description: 'Add a unique touch to corporate events with professional Mehndi services, perfect for team-building and cultural events.',
    imageUrl: "https://example.com/corporate-mehndi.jpg",
  },
  {
    id: '6',
    title: 'Kids Mehndi Artist',
    price: '₹200 per hour',
    rating: 4.5,
    reviews: 25,
    description: 'Specialized Mehndi designs for kids, using skin-friendly and safe materials for a fun experience.',
    imageUrl: "https://example.com/kids-mehndi.jpg",
  }
];

const placeholderImage = 'https://via.placeholder.com/150';

const MenuItem = ({ item, onAddPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to MehndiDisplayScreen and pass the selected item
    navigation.navigate('MehndiDisplayScreen', { item });
  };

  const handleImagePress = () => {
    // Navigate to MehndiDisplayScreen when the image is clicked
    navigation.navigate('MehndiDisplayScreen', { item });
  };

  const handleTitlePress = () => {
    // Navigate to MehndiDisplayScreen when the title is clicked
    navigation.navigate('MehndiDisplayScreen', { item });
  };

  const handleDescriptionPress = () => {
    // Navigate to MehndiDisplayScreen when the description is clicked
    navigation.navigate('MehndiDisplayScreen', { item });
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <TouchableOpacity onPress={handleTitlePress}>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{item.rating} ⭐</Text>
          <Text style={styles.reviews}>({item.reviews})</Text>
        </View>
        <TouchableOpacity onPress={handleDescriptionPress}>
          <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
      </View>

      {/* Image Clickable */}
      <TouchableOpacity onPress={handleImagePress}>
        <Image source={{ uri: item.imageUrl || placeholderImage }} style={styles.image} />
      </TouchableOpacity>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => onAddPress(item)}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const MehndiScreen = () => {

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
        const response = await fetch('https://api.marasimpex.com/api/crewbookings', {
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

  useEffect(() => {
    const fetchAddressFromStorage = async () => {
      try {
        const storedAddress = await AsyncStorage.getItem('address');
        if (storedAddress) setAddress(storedAddress);
      } catch (error) {
        Alert.alert('Error', 'Failed to load address from storage');
      }
    };
    fetchAddressFromStorage();
  }, []);


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
      <View style={styles.container}>
        <FlatList
          data={MehndiData}
          // renderItem={({ item }) => <MenuItem item={item} />}
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
            {/* <TextInput
              style={styles.input}
              placeholder="Enter Full Address"
              value={address}
              onChangeText={(text) => setAddress(text)}
            /> */}

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

export default MehndiScreen;

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
