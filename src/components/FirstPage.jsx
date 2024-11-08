import React, { useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  Linking, 
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient

const FirstPage = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('HOMESCREEN');
  };

  const handleSkipPress = () => {
    navigation.navigate('MainFlow');
  };

  const handleJoinPartnerPress = () => {
    Linking.openURL('https://play.google.com/store/apps/details?id=com.newappmaras');
  };

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('otpToken');
      if (token) {
        navigation.replace('MainFlow');
      }
    } catch (e) {
      console.log('Failed to fetch token', e);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <LinearGradient 
      colors={['#e0f7fa', '#80deea', '#26c6da']} 
      style={styles.container}
    >
      {/* Top Image */}
      <Image
        source={require('./../assets/images/appfirstlogo.png')}
        style={styles.image}
      />

      {/* Buttons Row */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={handleSkipPress}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Join as Partner Section */}
      <View style={styles.partnerRow}>
        <Text style={styles.partnerText}>Join As a Partner</Text>
        <TouchableOpacity onPress={handleJoinPartnerPress}>
          <Text style={styles.linkText}>Click Here</Text>
        </TouchableOpacity>
      </View>

      {/* Made in India Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Made in India by </Text>
        <Text style={styles.footerText}>
          <Icon name="heart" size={26} color="#1E90FF" />
        </Text>
      </View>
    </LinearGradient>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 80,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 100,
    resizeMode: 'contain',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#1E90FF', // Light blue color for button
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginHorizontal: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  partnerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  partnerText: {
    fontSize: 20,
    color: '#333',
    marginRight: 5,
    fontWeight: 'bold',
  },
  linkText: {
    fontSize: 22,
    color: '#1E90FF',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 400,
  },
  footerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 5,
    marginTop: 140,
  },
});
