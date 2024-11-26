 

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Modal, TextInput, Button, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const services = [
  {
    id: '1',
    type: 'Wound Dressing',
    price: '₹300',
    time: '30 min',
    description: 'Expert dressing service for cuts, wounds, or post-surgical dressings, ensuring proper care and hygiene.',
    imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISERESEhAQEg8TFRUVEhcVEg8XEBUSFhIXFhUVFRUYHjQgGBolGxgWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGysmICItLSsuNS8rLS03LS0tLS0tLS0vLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABJEAABAwIDBQMHCAcFCQEAAAABAAIDBBEFEiEGMUFRYRMicQcygZGxwdEjQlJigpKh8BQzQ1RysuFTg5OioxYXJDRjc5TC0hX/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QALhEAAgIBBAADBgYDAAAAAAAAAAECAxEEEiExBRNBFCIjUXGRMmGBweHwFTOh/9oADAMBAAIRAxEAPwDuKIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiLG6Zo4j2oDIi1zVDgD6dFE1m1lJE8skqoGPbo5pddwPIgbkbS7JQhKbxBNv8AJZJ5FBUm1tHI5rGVcDnuNmjMQSeQvxUyJOi4mn0dnXODxNNfVYMiLyHhel0gEREAREQBERAEREAREQBERAEREAREQBERAERY55gxpcd3tQHtzgBcmwWlLiI3NF+p3KLqaxzzru4DgF9jKlghuNwyudvJ93qWOpq44ml0j2MYN5c4NaPSV8Y5c58rcxP6Oy/dzudbhcNsD+J9ajOW2OTTpafOujW3jLLfVbY0QBtVQk9HA+xcSrJM8sj73zPc6/O7ibrwGr0AsFlrn2fdeHeF1aOTnGTbaxzgz4dLkljcTYNexx6ZXg+5duo9tKEtANVEDbi63tXDAvQXK7XDo74j4XXrJKUm1j5H6Poa6KZueKRkjDxY5rm3G/ULYsub+SB/cnHDOD6SwD3LpVluhLdFM+F1dCpulWnnDAcvoK8kL5dTM5kRfAV9XDoREQBERAEREAREQBERAEREAREQBQOO1Pey8B7VOvdYE8ALqlV1RmeT1UokJMzRuW1G5RsT1txvUmRRvtcub+VTz4PtewLoLHqubY7NGsDMsnZuYbg2BGosQQq7ItxaRs0dqqujOXSOVtavuVWtvk3qP3sf4Q+K9jya1H75/pN+KxeRM+rXj2nXq/sVAtXxXH/dnUfvv+k34r0PJlUfvjf8FvxXPImT/wA/pvm/sWDySx2bIfpZT7R7l0pU7YjZ00UbmulMr3OzE2AA0AsANw0/Eq1CRbK4tRSZ8nrLY23ynHpszFYyV5Mi8lymZTKwrItZrlsNKMI+oiLh0IiIAiIgCIiAIiIAiIgCIiA1MVlyxOPoVElk1Ktm1E1owOdyqNLNZWR6K5dkhHMtmOoVVqsZYze4evRQtTtgNzLu8B7yuSnFdslCucvwo6W2pHNZP01o3uA9K47PtJUu3Cw6uPsC8QSTTGwmyu+iQL+i+9Uyvgi/2Wz1OxnGIhvkYPtBfBtBT/20f3guXw7KVT/2x9dvYFmGwtV/avP97J8VU9XAktNL5nTmY/Tn9tH95q2osViO6Rh8HBcrZsJUcZpR4SSH3rdi2ClO6seD1aHe1c9riPZn8zqDKpp3ELM2dcv/ANjMQj1jqmO8Wlv8pWRkOLxfRkHST3OHvUlqoHHp5eh04TL12i5mNsqmD/mad7RzLSG/ebceuyn8L2xp5bd/KTuzWsfBw0V0bIy6ZVKuUe0W4PW1A66iIqkHcbqQoXXKmyCN1ERRJBERAEREAREQBERAEREAREQFR26qgzLc6ZfeVzGerkndlj0Zxdw0325lX3yl0UkstJFHoZ3GMHgCDdzj4NJd9krSgwqOPusHdDgxvPKwZnH12CruscY8E6q1KWWUTGsK7Nrb3LjqSd+q1aXD+is21er2jmfwCxUMIXnRm2ss9euGEaEWEX4LDVYUW8D0I3g9CrTFNGNC9gPVzVsvha8cCOmq7vLMFbwraKWAgSgyR/SHnjxHzvb4q8YXjkcrQ5jmuHQ7uhHAqn1+FcgoV9K5js8bnRv5tNvWNx9K44KXRVKB2GKpaeSy5GnoVymj2plj0mZmH049/pZ8FY8P2na/Vjw8cRucPEHVVuLXZU4l0Y9zeoW1G5r+hVcpMeY7QuseRUiycHUFcUiLib09C14Ic0EHoqli+wMDiXRgwvPFmgPi3cfSFb6WqB0PrW65gIsfz1VsVnoqcnF8nKHx1uHd4uEtODqRewF7d5vzfEadAr5sjjzKgXbvOjhxa4C62KqBrg6ORoLXAhwO4tIsfwVQ2QwaSkxXsQSYTE+Rp+oHZWgnmHG3gQtenucvdkVXVrG5HT0RFqM4REQBERAEREAREQBERAEREBpYrGzJnc0F0d3MPFrixzCR9lzh6VTr+b0Zc/xSEuP4WVp2kfaEji7T16e8KrynWU/WIHg0BvuWLWSxE1adclH2nnd2hysL3MbcNBAJcTuud24KDjwGqqdaip7Np/ZxgloHIm4B9ObxUvWSZp5T9a3qACz/AKcyMXc4NHXoLn8AVRW3GKwejKtPsiW+TuI7qiUfZit7Fry7AVEZLqeqbm4aSRO+8wn3Kz0uOQu3SsPg4HQ7lLU9UHbiCpO2a7I+RW+iB2XNeHuiq4iYwCWy54jr9E5Tdw6kX01U3VYYHcFIRuWdrVU5ZeSyMcLGclMrMJI4Kq47QzAt7GMlx3uDmtLeW8j8hdblpweCh6/CwdwU42YZyUNywc/w+rrYx8s6OUcjfP8AfHwKmqHagsOj3MPJ/m+h25e62my71B1bouLm+sKTipehXsUVgv8Ah+2A07QZfrDVqvGFYqyVgLXB1t1jvHEL89wjf2UmnEA3Hq3KQoMUqoDnjNiNTa4BtzG4qHluLyiLr3HeayUOF76jd1C3sNY1wbJlGfLlzccpIuPC7QfQuTbNbSz1MmWTKABfu31XVMAd3CORU9PL4vJnvhiBKIiL0jCEREAREQBERAEREAREQBERAQu0Z/Vjm4fzNPuVZb+rJ5lzvW4lWLaN3fi8Qfwcq80f8O0/Uv8AgvO1jNumRzeSe3bPsTZ0jrDebEnRQeEYTPiznPL+xpIzv3ku0OnC4HzuF+OqnKAZg4HcXPB9LirD5LKUf/nT0/7Vj6iJ445je3rDgrtKk+y3xByjjHRy6vwSCPvgTZT5gv8AKOaPnu3AX0NtLbtbLJguISxu/wCHleSNeyl1DgN+Vw3K2+UaLszG9tuwkjAYbaZgXEt6GxBt48iqXsxC59XFlGjCXvPAMDTe/ju9K9CUIuezHB4kbZwqdu7nGf4OsbMYw2piD2ghwOV7T5zHjeD7fSrJCFU8Bw0wOpHgWFXBNI7X+zqQYXemOUa8gFcKdq8e+tVzcUfQ6a121Kb7ZkyLRxioZDFJLIcsbGlzj0HTieilmsUVjND201FC63ZunD5AdzhFG6Ro++GH7KrhHdJInOe2LZx/HK6eoa6eV7qWlLi2ONo+WeeR+tbU8BxUXhmBMqXtYztBI49ztD3XnUkAg77Ddp0UxtthskcNKS05YnSxTG3mzXY03PUsIv8AVUbs3LK+opmRfrGyxyDQEN7ORry8g6WFr6r23XGuSjFfyfNq6VtbsnL5/pgmK/YeppKYYhTudJA0Ht43j5WLK4h4NvOaDfW27VWHZxrKqlMoYW3D2623gWNuYv7F0NmIk4XX1FQ8vjc2oc3Na3ZtiEeVo5FzX2H1uqrGymFmnw2njcLP7LM4HeHPu8g9RmWHWpR+uT1fC7JWJP0aT+5XtgR8qOrfguy4Gd48PYVyDYBnyjf4fcF17B/O9Cx1P4qNOqWE0TKIi9Y8oIiIAiIgCIiAIiIAiIgCIiAru0/nx/ng9REbL0w/7Y/lUxtUNYj19/8AVR+HsvTgfUt6hZedq1ybdO+DlGFnzuj3fzFT+GRyxTfpFNYueGieEnKJQ3zXsd82QDTXQjQ23iuUhyzTM5OJ9enuViw6exUISceUelbCNiwzdxfsahrgXups+ssVRA4wlx1JB80EnUlpcL62uSThwXAKRnnzwvivcw0sR755Pc25LegA8eCsVBVXClo3jotS8QsSweVLwmhy3Nf36df8IupD5phM5nZsYwxwt0zBpILnOA0F8rQG8A3rYbVO8A2XuvlDWk8gqxhNfnqBmPd1sscpOTyz0oQUY4ReYg0jVY67DHODHxlokidnjv5pNi0tJ4XaXC/C4Otl77uUEHVZoai7LcipQeGZZptcFV2gp4Z8zi80k7haVssWaCTQDvi+UusAMzXbrXBsLQeFYHSxEg1MOQ+fHRQu7WToXsu4DhoL8iF0cEcQCvRmaB3WtHoC2x1tijjJgn4dRKW5x5f959H9isV9K+sbHE+H9Gw2IsLYSGiScxkGNrmjSOFpDTl3usLhtrH1jDw2N55NJ9QUtUS3VT2xq8sDxxd3R9o2P4XXn22Obyz2NLUo8IivJ3Ta35C34BdRwsd5UvYWiyxXI1KvGHDvfnkVynmxfUo1LzuJNEReweWEREAREQBERAEREAREQBERAQO1o7jDyP8A7NWhgesduReP8xUptW28BPI+4/BQ2AP0eOTz+IB96w6pcmujo5NtIzsK1x3AuIPpOn4+1b9PNuK2/Knh9pS63nC6qWEYn8x57w3Hn/VUR6PRhPKwy+4fW9VYKer03qgwz21CncOrQ4WJXJImbe0GJXbkafFVB9U+M3F7g3BCkMQa6NxNjI0ngQHDprovkOMUjLGaNzf43Rt/BxCklwdwbWFbSVTyGNjLuoBt6Ve6ORzWAu0PFVvD9t6BtmxxFzuAY6AuPgA7VS7MSfU91tM+Bp+dK5odbmI2m/rsoSjjkjzLjHH6EoyrB4r4+oURFAYtC8u6la9ViAHFRyFBEhVVYA3qjY3V/pFTHC3UNOZ3juA9V/Wse0W0wYC1pzSHcPeeiweT6mMkrpHG7idT14rjXGSW5RWEdWwSmyRtHRTOHjvH88lrUrLNW5hw3n871dp4++jzLpZTN1EReoYgiIgCIiAIiIAiIgCIiAIiICN2hbeB/wCeBVW2ffq/7J/y29ytuNfqX+CpeAu77v4W+0rFqjVR0anlLpc0bXrjdVBqu87XxZ6Y9Fxati1KzQfJrj0alLiz49Hd5v8Am/qpyhxZjvNfZ3I6H1KsVLdV47LS6twTU2joTKsSd1ykKOnqmC0UjXM+jI3M34rneEVL7luYkWuL6qz0mOTxiwII6qLi/QujPKyXKmjrToZIYm8eyjAd6yStp1Q2BvnXO8km5J5k8VTJNqqkiwyD0G6rOP4jM4DNI67jztp6FDY32dc8IuWMbVsbfva8hvVQxHaSSS4Z3Rz4qDhbfxWSMaqexIp8xsyRsJNzck77710/ycQWF/SudQRrqPk/bZhVdhx9HQYfNW5hw0/PMrQjPdUhh/m/nmVdp/8AYjFb+Fm0iIvRMgREQBERAEREAREQBERAEREBH4660EngfYVSsD88/wAI9qt+1D7Uz+unrVTwVurj4LDqnya9P0SeMC8DguL4k2zneJXacRPyLvBcZxNjnzOYxpc8k6Aa/wBAslfLNS4RATC7gFmjpXSvbHGLk6nkGjiVMQ7J1JOZwYwdSSfUNPxUrgOEmnmJe4OEgDRpaxvccePwW2FUm+UUWXRS4fJXmYd2MoBJJIPQbxwUxFDdWjFtlXSs7SPV7dQPpDiFrYVhl7FRvWxmjSy3w/M0KTCS7hoseLbNtllp4u+3NnsW2393eCNV0LD6Bgb3jZZMAwwSzmot8my7Iuuvfd4aADwKrqTlNE75qNbOM7Q7NTUErWSWdFJcxSAWDrb2kfNcLjTr42iXizgu4bf4Ca9scDHhhif2hdlzAHI5oba43h19/AKgYt5OauMZmOjkA/iafVr7VfOp54Mld6x7z5K/ShdM2D/Vu8VzPsJIXBsrCw8L7j4EaLpOwjvk3+I9ix2Jrs0NprgvcZ0Unhx7v55lRMR0Unhh0Knpn8RGa5e4byIi9QxBERAEREAREQBERAEREAREQFe2zltExv0nexQuEss0nmVn2yqgZms+iPbqvFK4BoF15uplmRupjiJ7xiXLC8ngFVNhaEOZJK5ozvkdc79AdAPD23UhtvXZaV4B7zhlHi4ho9q3tjqfJAwGxNruO67jqTbqSVPRR5ciOplhJG06hatWv2fztOXet7Hpez7Mg6udYeIBPuUnQSZmg816JiK9gOKmBwgqu6DoyQ+b4PPDx3KSxTCxFJnaPk5DfTcH7z6Dv9al6igjlbZ7Q4HmFHRURhH6PmLqaS4iDjd0MgBc0NP0NN3A2todKbq98cF1Frrnn0NFlKZniJpIB1kI3tZ06ncPSeCmqirEYFPThpkADXW/VxC2mbrb5u/w3rSwhjnRAMcWOlLnSPHnhgeWMYw8Lhp14XNtTcV7bTHzRZaanYGucwuMml2G43NIsSbnUquqKqryzTJT1V6rh9F+7Lrh9CGjmTq4neSd5KkDTttYhc22B2unlmbTzfKXDndoSA7TW2UNsrxUV3yrGX1IJHgLX9oV0JKSyinVaaens2T7KT5RcCaASBo4adCobydzXY8HeLX8QSCugbZxZ6Yni3Vcu2LqRHUzRk2BcbekB3xWfVxzHJ3TS5aOpQO0UlhjtSFCUs4tvUhQVADhrvWCqWJpmiyOYtE8iIvZPOCIiAIiIAiIgCIiAIiIAiIgIvEdn6ac5pI7u55nh3rBWgdi6X/rjwqJvirGii4RfaJKUl0ysv2FonecyR/8cj3ajcRmW5Bs1CwWY6Zo6P8AiFNIupJdHG2+yDq9mIpcueSd2U3b326GxF9ByJX2LZ0NFm1E4H90fa1TaLpwiRg7v3qb1Q//ACvj8FcbXqZtCHDuw7x9lS6ICFpsALAA2plAAsO7DuzF30ebitDFNh4ahwfNLK9wFgbRXt91WlFzC6JKTTynyVTDNhKenf2kUkrX2IvaK4B32u1SbtnmF7ZDLOXtBAOZgsDa+gbbgFMIiSXQlOUnmTyRc2CNe0tfLM5p3jM33NUV/sBQXJ7Jwcd5DyHH071aURrPZxNrorrNjKUbjUf+RP8AFbdJs3TRuDmscXDcXSSOIPMZjopdFxQivRHXOT9QiIpEQiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID/2Q==',
  },
  {
    id: '2',
    type: 'Injection Service',
    price: '₹400',
    time: '30 min',
    description: 'Professional injection administration at your home for prescribed medications or vaccinations.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDm3TlC7xsEACgFTFJ4rpSxuNa15jPdVLWRw&s',
  },
  {
    id: '3',
    type: 'Major Dressing',
    price: '₹500',
    time: '60 min',
    description: 'Professional injection administration at your home for prescribed Dressing .',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbjggbmQ-pPDjy_9De9nk1v4b46K_cZdFbQ&s',
  },
];

const NurseScreen = () => {

  
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

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [urgent, setUrgent] = useState(false);
  const [slotModalVisible, setSlotModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [address, setAddress] = useState('');

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
        throw new Error('Please Fill All the Details ');
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
          <TouchableOpacity
            style={styles.urgentButton}
            onPress={() => checkAuthentication(true)}
          >
            <Text style={styles.addButtonText}>Urgent</Text>
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
            {/* <TextInput
              style={styles.input}
              placeholder="Complete Address"
              value={addressDetails.landmark}
              onChangeText={(text) => setAddressDetails({ ...addressDetails, landmark: text })}
            /> */}

<TextInput
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
              style={styles.input}
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

export default NurseScreen;


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
  
   
 