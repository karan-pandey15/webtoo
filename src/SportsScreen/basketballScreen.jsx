import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BasketballScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to basket ball Academy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#fff', // Optional: set a background color
  },
  welcomeText: {
    color: '#00b0f0', // Light blue color
    fontSize: 24, // Larger font size
    fontWeight: 'bold', // Bold text
    textAlign: 'center', // Center the text
  },
});

export default BasketballScreen;
