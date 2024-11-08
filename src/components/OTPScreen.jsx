

// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import axios from 'axios';
// import { useNavigation, useRoute } from '@react-navigation/native';

// const OTPScreen = () => {
//   const [otp, setOtp] = useState(Array(6).fill('')); // Array to hold each OTP digit
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { phoneNumber } = route.params;

//   const handleInputChange = (text, index) => {
//     if (text.length > 1) return; // Only allow a single character
//     const updatedOtp = [...otp];
//     updatedOtp[index] = text;
//     setOtp(updatedOtp);

//     // Move to the next input if the current one is filled
//     if (text && index < 5) {
//       const nextInput = `input-${index + 1}`;
//       const inputRef = textInputRefs[nextInput];
//       inputRef && inputRef.focus();
//     } else if (!text && index > 0) {
//       const prevInput = `input-${index - 1}`;
//       const inputRef = textInputRefs[prevInput];
//       inputRef && inputRef.focus();
//     }
//   };

//   const verifyOTP = async () => {
//     const fullOtp = otp.join(''); // Combine the OTP digits into a single string
//     try {
//       const response = await axios.post('https://api.marasimpex.com/api/otp/verify', {
//         phoneNumber,
//         code: fullOtp,
//       });
//       Alert.alert('Success', 'OTP verified successfully');
//       navigation.replace('MainFlow');
//     } catch (error) {
//       Alert.alert('Error', 'Invalid OTP');
//     }
//   };

//   const textInputRefs = {};

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Enter OTP</Text>
//       <Text style={styles.subtitle}>Enter the 6-digit code sent to {phoneNumber}</Text>
//       <View style={styles.otpInputContainer}>
//         {Array.from({ length: 6 }).map((_, index) => (
//           <TextInput
//             key={index}
//             style={styles.otpInputBox}
//             keyboardType="number-pad"
//             maxLength={1}
//             ref={(ref) => (textInputRefs[`input-${index}`] = ref)}
//             onChangeText={(text) => handleInputChange(text, index)}
//             value={otp[index]}
//           />
//         ))}
//       </View>
//       <TouchableOpacity onPress={verifyOTP} style={styles.button}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

 
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OTPScreen = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber } = route.params;

  const handleInputChange = (text, index) => {
    if (text.length > 1) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);

    if (text && index < 5) {
      const nextInput = `input-${index + 1}`;
      const inputRef = textInputRefs[nextInput];
      inputRef && inputRef.focus();
    } else if (!text && index > 0) {
      const prevInput = `input-${index - 1}`;
      const inputRef = textInputRefs[prevInput];
      inputRef && inputRef.focus();
    }
  };

  const generateToken = () => {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
  };

  const verifyOTP = async () => {
    const fullOtp = otp.join('');
    try {
      await axios.post('https://api.marasimpex.com/api/otp/verify', {
        phoneNumber,
        code: fullOtp,
      });

      const token = generateToken();
      await AsyncStorage.setItem('otpToken', token);

      Alert.alert('Success', 'OTP verified successfully');
      navigation.replace('MainFlow');
    } catch (error) {
      Alert.alert('Error', 'OTP verification failed');
    }
  };

  const textInputRefs = {};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>Enter the 6-digit code sent to {phoneNumber}</Text>
      <View style={styles.otpInputContainer}>
        {Array.from({ length: 6 }).map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInputBox}
            keyboardType="number-pad"
            maxLength={1}
            ref={(ref) => (textInputRefs[`input-${index}`] = ref)}
            onChangeText={(text) => handleInputChange(text, index)}
            value={otp[index]}
          />
        ))}
      </View>
      <TouchableOpacity onPress={verifyOTP} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00b0ff',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  otpInputBox: {
    width: 40,
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00b0ff',
    textAlign: 'center',
    fontSize: 18,
    color: '#333',
    margin: 5,
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
