 


import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import axios from 'axios';

const WelcomeScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState(Array(10).fill(''));
  const navigation = useNavigation();

  const sendOTP = async () => {
    const fullPhoneNumber = '+91' + phoneNumber.join(''); // Combine +91 prefix and the entered digits
    if (fullPhoneNumber.length !== 13) {
      Alert.alert('Error', 'Please enter a valid 10-digit phone number');
      return;
    }
    try {
      await axios.post('https://api.marasimpex.com/api/otp/send', {
        phoneNumber: fullPhoneNumber,
      });
      Alert.alert('Success', 'OTP sent to your phone');
      navigation.navigate('OTPScreen', { phoneNumber: fullPhoneNumber });
    } catch (error) {
      Alert.alert('Error', 'Failed to send OTP');
    }
  };

  const handleInputChange = (text, index) => {
    if (text.length > 1) return; // Allow only one digit in each box
    const updatedPhoneNumber = [...phoneNumber];
    updatedPhoneNumber[index] = text;
    setPhoneNumber(updatedPhoneNumber);

    // Move to the next box if user types a digit
    if (text && index < 9) {
      const nextInput = `input-${index + 1}`;
      const inputRef = textInputRefs[nextInput];
      inputRef && inputRef.focus();
    }
  };

  const textInputRefs = {};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <View style={styles.imageContainer}>
        <Image source={require('./../assets/images/firstscreenimg.jpg')} style={styles.image} />
      </View> 
      <Text style={styles.subtitle}>Enter your 10-digit phone number</Text>
      <View style={styles.phoneInputContainer}>
        {Array.from({ length: 10 }).map((_, index) => (
          <TextInput
            key={index}
            style={styles.phoneInputBox}
            keyboardType="phone-pad"
            maxLength={1}
            ref={(ref) => (textInputRefs[`input-${index}`] = ref)}
            onChangeText={(text) => handleInputChange(text, index)}
            value={phoneNumber[index]}
          />
        ))}
      </View>
      <TouchableOpacity onPress={sendOTP} style={styles.button}>
        <Text style={styles.buttonText}>Verify With OTP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 350,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',  
    color:'#00b0ff',
    marginTop:10
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  phoneInputBox: {
    width: 30,
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00b0ff',
    textAlign: 'center',
    fontSize: 18,
    color: '#333',
    margin:4,
  },
  button: {
    backgroundColor: '#00b0ff',
    paddingVertical: 15,
    borderRadius: 50,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
