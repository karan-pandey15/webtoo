
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
// import Header from '../components/Header';

// const UserRegister = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [address, setAddress] = useState('');
//     const [city, setCity] = useState('');
//     const [state, setState] = useState('');
//     const [pin, setPin] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigation = useNavigation();

//     const register = async () => {

//         if (!name || !email || !phone || !address || !city || !state || !pin || !password) {
//             Alert.alert("Missing Fields", "Please fill all the fields before registering.");
//             return;
//         }


//         try {
//             const response = await axios.post('https://api.marasimpex.com/api/users/register', {
//                 name, email, phone, address, city, pin, password,
//             });
//             const { userId } = response.data;

//             await AsyncStorage.setItem('userId', userId);
//             await AsyncStorage.setItem('address', address);
            
//             Alert.alert('Registration Successful', `Your User ID: ${userId}`);
//             navigation.navigate('UserSignin');
//         } catch (error) {
//             setError(error.response ? error.response.data.message : 'Registration Failed');
//             console.log('Error during registration:', error.response ? error.response.data.message : error.message);
//         }
//     };

//     // Function to fetch city, state, and address based on PIN code
//     const fetchLocationData = async (pincode) => {
//         try {
//             const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
//             const data = response.data;

//             if (data[0].Status === "Success") {
//                 const postOffice = data[0].PostOffice[0];
//                 setCity(postOffice.District);
//                 setState(postOffice.State);
//                 setAddress(postOffice.Name); // Assuming Name is used for address (you can customize this if needed)
//             } else {
//                 Alert.alert("Invalid PIN", "Please enter a valid Indian PIN code.");
//                 setCity('');
//                 setState('');
//                 setAddress('');
//             }
//         } catch (error) {
//             console.error("Error fetching location data:", error);
//             Alert.alert("Error", "Could not fetch location data. Please try again.");
//         }
//     };

//     // Effect to trigger location fetch when pin changes
//     useEffect(() => {
//         if (pin.length === 6) {
//             fetchLocationData(pin);
//         }
//     }, [pin]);

//     return (
//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//             <Header />
//             <KeyboardAvoidingView
//                 style={styles.container}
//                 behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//             >
//                 <View style={styles.formContainer}>
//                     <Text style={styles.header}>User Register</Text>
//                     {error ? <Text style={styles.errorText}>{error}</Text> : null}

//                     <TextInput
//                         placeholder="Name"
//                         value={name}
//                         onChangeText={setName}
//                         style={styles.input}
//                     />
//                     <TextInput
//                         placeholder="Email"
//                         value={email}
//                         onChangeText={setEmail}
//                         keyboardType="email-address"
//                         style={styles.input}
//                     />
//                     <TextInput
//                         placeholder="Phone"
//                         value={phone}
//                         onChangeText={setPhone}
//                         keyboardType="phone-pad"
//                         style={styles.input}
//                     />

//                     <TextInput
//                         placeholder="PIN Code"
//                         value={pin}
//                         onChangeText={setPin}
//                         keyboardType="numeric"
//                         style={styles.input}
//                         maxLength={6} // Limit input length to 6
//                     />
//                     <TextInput
//                         placeholder="Address"
//                         value={address}
//                         onChangeText={setAddress}
//                         style={styles.input}
//                     />
//                     <TextInput
//                         placeholder="City"
//                         value={city}
//                         onChangeText={setCity}
//                         style={styles.input}

//                     />


//                     <TextInput
//                         placeholder="State"
//                         value={state}
//                         onChangeText={setState}
//                         style={styles.input}

//                     />

//                     <TextInput
//                         placeholder="Password"
//                         value={password}
//                         onChangeText={setPassword}
//                         secureTextEntry
//                         style={styles.input}
//                     />

//                     <TouchableOpacity style={styles.button} onPress={register}>
//                         <Text style={styles.buttonText}>Register</Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity onPress={() => navigation.navigate('UserSignin')}>
//                         <Text style={styles.linkText}>
//                             Already have an account? Sign In
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//             </KeyboardAvoidingView>
//         </ScrollView>
//     );
// };



// export default UserRegister;
// const styles = StyleSheet.create({
//     scrollContainer: {
//         flexGrow: 1,
//         justifyContent: 'center',
//         backgroundColor: '#f8f8f8',
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     formContainer: {
//         width: '100%',
//         height: '100%',
//         backgroundColor: '#ffffff',
//         padding: 20,
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8,
//         shadowRadius: 2,
//         elevation: 5,
//     },
//     header: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         textAlign: 'center',
//         color: '#333',
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 12,
//         borderRadius: 5,
//         marginBottom: 15,
//         backgroundColor: '#f8f8f8',
//     },
//     button: {
//         backgroundColor: '#007bff',
//         paddingVertical: 15,
//         borderRadius: 5,
//         alignItems: 'center',
//         marginTop: 10,
//     },
//     buttonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 16,
//     },
//     linkText: {
//         marginTop: 20,
//         color: '#007bff',
//         textAlign: 'center',
//     },
//     errorText: {
//         color: 'red',
//         textAlign: 'center',
//         marginBottom: 10,
//     },
// });
 















import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const UserRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pin, setPin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigation = useNavigation();

    const register = async () => {
        if (!name || !email || !phone || !address || !city || !state || !pin || !password) {
            Alert.alert("Missing Fields", "Please fill all the fields before registering.");
            return;
        }

        try {
            const response = await axios.post('https://api.marasimpex.com/api/users/register', {
                name, email, phone, address, city, pin, password,
            });
            const { userId } = response.data;

            await AsyncStorage.setItem('userId', userId);
            await AsyncStorage.setItem('address', address);
            await AsyncStorage.setItem('city', city);
            await AsyncStorage.setItem('pincode', pin);
            

            Alert.alert('Registration Successful', `Your User ID: ${userId}`);
            navigation.navigate('UserSignin');
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Registration Failed');
            console.log('Error during registration:', error.response ? error.response.data.message : error.message);
        }
    };

    const fetchLocationData = async (pincode) => {
        try {
            const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
            const data = response.data;

            if (data[0].Status === "Success") {
                const postOffice = data[0].PostOffice[0];
                setCity(postOffice.District);
                setState(postOffice.State);
                setAddress(postOffice.Name);
            } else {
                Alert.alert("Invalid PIN", "Please enter a valid Indian PIN code.");
                setCity('');
                setState('');
                setAddress('');
            }
        } catch (error) {
            console.error("Error fetching location data:", error);
            Alert.alert("Error", "Could not fetch location data. Please try again.");
        }
    };

    useEffect(() => {
        if (pin.length === 6) {
            fetchLocationData(pin);
        }
    }, [pin]);

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Header />
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.formContainer}>
                    <Text style={styles.header}>User Register</Text>
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}

                    <TextInput
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Phone"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="PIN Code"
                        value={pin}
                        onChangeText={setPin}
                        keyboardType="numeric"
                        style={styles.input}
                        maxLength={6}
                    />
                    <TextInput
                        placeholder="Address"
                        value={address}
                        onChangeText={setAddress}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="City"
                        value={city}
                        onChangeText={setCity}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="State"
                        value={state}
                        onChangeText={setState}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.button} onPress={register}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('UserSignin')}>
                        <Text style={styles.linkText}>
                            Already have an account? Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

 

export default UserRegister;


const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: '#f8f8f8',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    linkText: {
        marginTop: 20,
        color: '#007bff',
        textAlign: 'center',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 10,
    },
});
 