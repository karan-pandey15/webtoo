 



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
} from 'react-native';

const WelcomeScreen = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container}>
      {/* Illustration / Image */}
      <View style={styles.imageContainer}>
        {/* Placeholder Image (or any SVG/Image) */}
        <Image
          source={require("./../assets/images/firstscreenimg.jpg")} // You can replace this with your actual illustration
          style={styles.image}
        />
      </View>

      {/* OTP Verification Text */}
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>Enter phone number to send one-time Password</Text>
      {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="+91"
          placeholderTextColor="#999"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity  onPress={() => navigation.replace("MainFlow")}  style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

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
    width: 350, // Adjust based on your illustration size
    height: 450,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00b0ff', // border color matching the design
    padding: 10,
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#00b0ff', // Blue with #b0 transparency as you requested
    paddingVertical: 15,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
