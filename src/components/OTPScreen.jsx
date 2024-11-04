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
//   const [otp, setOtp] = useState('');
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { phoneNumber } = route.params;

//   const verifyOTP = async () => {
//     try {
//       const response = await axios.post('http://172.18.80.1:5000/api/otp/verify', {
//         phoneNumber,
//         code: otp,
//       });
//       Alert.alert('Success', 'OTP verified successfully');
//       navigation.replace('MainFlow');
//     } catch (error) {
//       Alert.alert('Error', 'Invalid OTP');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Enter OTP</Text>
//       <Text style={styles.subtitle}>Enter the 6-digit code sent to {phoneNumber}</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter OTP"
//         keyboardType="number-pad"
//         maxLength={6}
//         value={otp}
//         onChangeText={(text) => setOtp(text)}
//       />
//       <TouchableOpacity onPress={verifyOTP} style={styles.button}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// // Styles...
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   input: {
//     width: '100%',
//     fontSize: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#00b0ff',
//     color: '#333',
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#00b0ff',
//     paddingVertical: 15,
//     borderRadius: 50,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default OTPScreen;


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

const OTPScreen = () => {
  const [otp, setOtp] = useState(Array(6).fill('')); // Array to hold each OTP digit
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber } = route.params;

  const handleInputChange = (text, index) => {
    if (text.length > 1) return; // Only allow a single character
    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);

    // Move to the next input if the current one is filled
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

  const verifyOTP = async () => {
    const fullOtp = otp.join(''); // Combine the OTP digits into a single string
    try {
      const response = await axios.post('https://api.marasimpex.com/api/otp/verify', {
        phoneNumber,
        code: fullOtp,
      });
      Alert.alert('Success', 'OTP verified successfully');
      navigation.replace('MainFlow');
    } catch (error) {
      Alert.alert('Error', 'Invalid OTP');
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Light background for better contrast
  },
  title: {
    fontSize: 26, // Increased font size for title
    fontWeight: 'bold',
    color: '#00b0ff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16, // Slightly larger subtitle for better readability
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Take full width
    marginBottom: 20,
  },
  otpInputBox: {
    width: 50, // Adjust width for better fit
    height: 50, // Increased height for comfort
    borderRadius: 10, // Slightly rounder corners
    borderWidth: 2,
    borderColor: '#00b0ff',
    textAlign: 'center',
    fontSize: 24, // Larger font size for easier input
    color: '#333',
    backgroundColor: '#fff', // White background for input boxes
    marginHorizontal: 5, // Space between input boxes
  },
  button: {
    backgroundColor: '#00b0ff',
    paddingVertical: 15,
    borderRadius: 25, // Rounded button
    width: '100%',
    alignItems: 'center',
    elevation: 3, // Shadow effect for better depth
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OTPScreen;
