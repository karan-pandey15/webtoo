 


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RazorpayCheckout from 'react-native-razorpay'; // Import RazorpayCheckout
import Header from '../components/Header';

const ReorderScreen = () => {
  const [amount, setAmount] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [balance, setBalance] = useState(0); // New state for balance

  const handleAmountChange = (value) => {
    setAmount(value);
  };

  const handlePresetAmount = (preset) => {
    setAmount(preset.replace('₹', ''));
  };

  const handlePayment = () => {
    const paymentAmount = parseFloat(amount);

    if (!paymentAmount || paymentAmount <= 0) {
      Alert.alert("Invalid Amount", "Please enter a valid amount to proceed.");
      return;
    }

    // Create options for Razorpay
    const options = {
      description: 'Add Money to Wallet',
      currency: 'INR',
      key: 'rzp_live_5PPrr1z0Y5RqDP', // Razorpay Key ID
      amount: paymentAmount * 100, // Convert to paisa
      name: 'MARAS',
      prefill: {
        email: 'forpradeepmishra@gmail.com',
        contact: '9999781282',
        name: 'Pradeep Mishra',
      },
      theme: { color: '#007BFF' },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        // Payment successful, add amount to balance
        setBalance((prevBalance) => prevBalance + paymentAmount);
        Alert.alert("Payment Successful", `Transaction ID: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        Alert.alert("Payment Failed",);
      });
  };

  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Balance Information */}
        <View style={styles.balanceBox}>
          <View style={styles.balanceRow}>
            <Icon name="info-circle" size={18} color="#007BFF" />
            <Text style={styles.balanceText}>Your Balance</Text>
          </View>
          <Text style={styles.balanceAmount}>₹ {balance.toFixed(2)}</Text>
          <Text style={styles.balanceSubText}>You can add up to ₹ 50,000</Text>
        </View>

        {/* Top-Up Deals Section */}
        <View style={styles.topUpSection}>
          <Text style={styles.topUpTitle}>Top-Up Deals (2)</Text>
          <View style={styles.dealsRow}>
            <View style={styles.dealBox}>
              <Text style={styles.cashbackText}>Get ₹50 cashback</Text>
              <Text style={styles.dealSubText}>Pay With Wallet and get ₹50 Cashback on your Order above 200.</Text>
            </View>
            <View style={styles.dealBox}>
              <Text style={styles.cashbackText}>Get ₹10 to₹50 cashback</Text>
              <Text style={styles.dealSubText}>Get Sure Cashback on Your first order with maras.</Text>
            </View>
          </View>
        </View>

        {/* Enter Amount Section */}
        <Text style={styles.enterAmountText}>Please enter an amount</Text>
        <TextInput
          style={styles.amountInput}
          value={amount}
          onChangeText={handleAmountChange}
          placeholder="₹ 500"
          keyboardType="numeric"
        />

        {/* Preset Amount Buttons */}
        <View style={styles.presetAmounts}>
          {['₹750', '₹1,000', '₹1,500', '₹2,000'].map((preset, index) => (
            <TouchableOpacity key={index} style={styles.presetButton} onPress={() => handlePresetAmount(preset)}>
              <Text style={styles.presetText}>{preset}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Proceed Button */}
        <TouchableOpacity style={styles.proceedButton} onPress={handlePayment}>
          <Text style={styles.proceedButtonText}>Proceed to Add Money</Text>
        </TouchableOpacity>

        {/* Promo Code Section */}
        <View style={styles.promoCodeSection}>
          <TextInput
            style={styles.promoCodeInput}
            placeholder="Enter Promo Code"
            value={promoCode}
            onChangeText={setPromoCode}
          />
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

// StyleSheet
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  balanceBox: {
    backgroundColor: '#EAF5FF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 80,
    marginTop: 40,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  balanceText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#007BFF',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  balanceSubText: {
    color: '#777',
    marginTop: 5,
  },
  topUpSection: {
    marginBottom: 20,
  },
  topUpTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dealsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dealBox: {
    width: '48%',
    backgroundColor: '#EAF5FF',
    padding: 10,
    borderRadius: 10,
  },
  cashbackText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  dealSubText: {
    color: '#777',
    marginTop: 5,
    fontSize: 12,
  },
  enterAmountText: {
    fontSize: 16,
    marginBottom: 10,
  },
  amountInput: {
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  presetAmounts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  presetButton: {
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  presetText: {
    fontSize: 16,
    color: '#007BFF',
  },
  proceedButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  proceedButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  promoCodeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  promoCodeInput: {
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flex: 1,
    marginRight: 10,
    backgroundColor: '#FFF',
  },
  applyButton: {
    backgroundColor: '#CCC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  applyText: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default ReorderScreen;
