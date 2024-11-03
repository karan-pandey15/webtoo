 


// import React, { useContext } from "react";
// import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"; 
// import Header from "../components/Header";
// import CartCard from "../components/CartCard";
// import { fonts } from "../utils/fonts";
// import { CartContext } from "../context/CartContext";
// import { useNavigation } from "@react-navigation/native";

// const CartScreen = () => {
//   const { cartItems, deleteCartItem, clearCart } = useContext(CartContext);
//   const navigation = useNavigation(); 
//   const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0); 
//   const gstPercentage = 0.18; 
//   const gstAmount = totalPrice * gstPercentage; 
//   const totalAmount = totalPrice + gstAmount;

//   const handleDeleteItem = async (id) => {
//     await deleteCartItem(id);
//   };

//   const checkoutbtn = async () => {
//     try {
//       const response = await fetch('http://172.18.80.1:5000/api/orders/checkout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           items: cartItems.map(item => ({
//             itemname: item.title,
//             productId: item.id,
//             name: item.title,
//             price: item.price,
//             quantity: item.quantity || 1,
//           })),
//           totalPrice,
//           gstAmount,
//           grandTotal: totalAmount,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         Alert.alert('Success', data.message);
//         await clearCart(); // Clear the cart after successful checkout
//         navigation.navigate("HOME"); // Navigate back to shop/home
//       } else {
//         Alert.alert('Error', data.message || 'Failed to place order');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Could not complete checkout. Please try again.');
//       console.error(error);
//     }
//   };

//   const gotoShop = () => {
//     navigation.navigate("HOME");
//   };

//   return (
//     <>
//       <Header />
//       <View style={styles.container}> 
//         {cartItems.length === 0 ? (
//           <View>
//             <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <Text style={styles.emptyCartText}>Oops! Your Cart is Empty</Text>
//               <TouchableOpacity style={styles.cartbutton} onPress={gotoShop} >
//                 <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>Goto Shop</Text>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.bottomContentContainer}>
//               <View style={styles.flexRowContainer}>
//                 <Text style={styles.titleText}>Total:</Text>
//                 <Text style={styles.priceText}>₹{totalPrice.toFixed(2)}</Text>
//               </View>
//               <View style={styles.flexRowContainer}>
//                 <Text style={styles.titleText}>GST:</Text>
//                 <Text style={styles.priceText}>₹{gstAmount.toFixed(2)}</Text>
//               </View>
//               <View style={styles.divider} />
//               <View style={styles.flexRowContainer}>
//                 <Text style={styles.titleText}>Grand Total:</Text>
//                 <Text style={[styles.priceText, styles.grandPriceText]}>₹{totalAmount.toFixed(2)}</Text>
//               </View>
//             </View>
//           </View>
//         ) : (
//           <> 
//             <FlatList
//               data={cartItems}
//               renderItem={({ item }) => (
//                 <CartCard item={item} handleDelete={handleDeleteItem} />
//               )}
//               showsVerticalScrollIndicator={false}
//               contentContainerStyle={{ marginTop: 40, paddingBottom: 200 }}
//               ListFooterComponent={
//                 <>
//                   <View style={styles.bottomContentContainer}> 
//                     <View style={styles.divider} />
//                     <View style={styles.flexRowContainer}>
//                       <Text style={styles.titleText}>Grand Total:</Text>
//                       <Text style={[styles.priceText, styles.grandPriceText]}>₹{totalPrice.toFixed(2)}</Text>
//                     </View>
//                   </View>
//                   <TouchableOpacity style={styles.button} onPress={checkoutbtn}>
//                     <Text style={styles.buttonText}>Checkout</Text>
//                   </TouchableOpacity>
//                 </>
//               }
//             />
//           </>
//         )}
//       </View>
//     </>
//   );
// };

// export default CartScreen;

// const styles = StyleSheet.create({ 
//   container: {
//     padding: 15,
//     backgroundColor: "#fff"
//   },
//   flexRowContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginVertical: 5,
//   },
//   bottomContentContainer: {
//     marginHorizontal: 10,
//     marginTop: 30,
//   },
//   titleText: {
//     fontSize: 18,
//     color: "#757575",
//     fontWeight: "500",
//   },
//   priceText: {
//     fontSize: 18,
//     color: "#757575",
//     fontWeight: "600",
//   },
//   cartbutton: { 
//     width: 200,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,   
//     backgroundColor: "#007AFF", 
//     borderRadius: 5,
//     color: '#fff',
//   },
//   divider: {
//     borderWidth: 1,
//     borderColor: "#C0C0C0",
//     marginTop: 10,
//     marginBottom: 5,
//   },
//   grandPriceText: {
//     color: "#3C3C3C",
//     fontWeight: "700",
//   },
//   button: {
//     backgroundColor: "#007AFF", 
//     height: 60,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 20,
//     marginTop: 30,
//   },
//   buttonText: {
//     fontSize: 24,
//     color: "#FFFFFF",
//     fontWeight: "700",
//     fontFamily: fonts.regular,
//   },
//   emptyCartText: {
//     fontSize: 24,
//     textAlign: "center",
//     marginTop: 50,
//     color: '#007AFF',
//     fontWeight: '500'
//   },
// });



import React, { useContext } from "react";
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import CartCard from "../components/CartCard";
import RazorpayCheckout from 'react-native-razorpay';
import { fonts } from "../utils/fonts";
import { CartContext } from "../context/CartContext";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const { cartItems, deleteCartItem, clearCart } = useContext(CartContext);
  const navigation = useNavigation();
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);
  const gstPercentage = 0.18;
  const gstAmount = totalPrice * gstPercentage;
  const totalAmount = totalPrice + gstAmount;

  const handleDeleteItem = async (id) => {
    await deleteCartItem(id);
  };

   
  // Function to handle Razorpay payment
  const handleRazorpayPayment = async () => {
    try {
      const response = await fetch("http://172.18.80.1:5000/api/orders/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: totalAmount }),
      });
      const { order } = await response.json();

      var options = {
        description: "Order Payment",
        image: "null", // optional logo
        currency: "INR",
        key: "rzp_live_5PPrr1z0Y5RqDP",
        amount: order.amount,
        name: "MARAS",
        order_id: order.id,
        prefill: {
          email: "pradeepmishra@gmail.com",
          contact: "9999781282",
          name: "karan Pandey",
        },
        theme: { color: "#007AFF" },
      };

      RazorpayCheckout.open(options)
        .then(async (data) => {
          // Payment success
          Alert.alert("Payment Success", `Payment ID: ${data.razorpay_payment_id}`);
          
          await handleCheckout(); // Save order to DB
        })
        .catch((error) => {
          Alert.alert("Payment Failed Due To Some Reason");
        });
    } catch (error) {
      Alert.alert("Error", "Failed to initiate payment.");
     
    }
  };

  
  const checkoutbtn = async () => {
    try {
      const response = await fetch('http://172.18.80.1:5000/api/orders/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems.map(item => ({
            itemname: item.title,
            productId: item.id,
            name: item.title,
            price: item.price,
            quantity: item.quantity || 1,
          })),
          totalPrice,
          gstAmount,
          grandTotal: totalAmount,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', data.message);
        await clearCart(); // Clear the cart after successful checkout
        navigation.navigate("HOME"); // Navigate back to shop/home
      } else {
        Alert.alert('Error', data.message || 'Failed to place order');
      }
    } catch (error) {
      Alert.alert('Error', 'Could not complete checkout. Please try again.');
      console.error(error);
    }
  };
  const handleCheckout = async () => {
    try {
      const response = await fetch("http://172.18.80.1:5000/api/orders/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            itemname: item.title,
            productId: item.id,
            name: item.title,
            price: item.price,
            quantity: item.quantity || 1,
          })),
          totalPrice,
          gstAmount,
          grandTotal: totalAmount,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", data.message);
        await clearCart();
        navigation.navigate("HOME");
      } else {
        Alert.alert("Error", data.message || "Failed to place order");
      }
    } catch (error) {
      Alert.alert("Error", "Could not complete checkout. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        {cartItems.length === 0 ? (
          <View>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Text style={styles.emptyCartText}>Oops! Your Cart is Empty</Text>
              <TouchableOpacity style={styles.cartbutton} onPress={() => navigation.navigate("HOME")}>
                <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>Go to Shop</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <>
            <FlatList
              data={cartItems}
              renderItem={({ item }) => <CartCard item={item} handleDelete={handleDeleteItem} />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ marginTop: 40, paddingBottom: 200 }}
              ListFooterComponent={
                <>
                  <View style={styles.bottomContentContainer}> 
                    <View style={styles.divider} />
                    <View style={styles.flexRowContainer}>
                      <Text style={styles.titleText}>Grand Total:</Text>
                      <Text style={[styles.priceText, styles.grandPriceText]}>₹{totalPrice.toFixed(2)}</Text>
                    </View>
                  </View>
                  {/* <TouchableOpacity style={styles.button} onPress={checkoutbtn}>
                    <Text style={styles.buttonText}>Checkout</Text>
                  </TouchableOpacity> */}
                  <TouchableOpacity style={styles.button} onPress={handleRazorpayPayment}>
                    <Text style={styles.buttonText}>Pay Now</Text>
                  </TouchableOpacity> 
                </>
                
              }
            />
          </>
        )}
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
 
  container: {
    padding: 15,
    backgroundColor: "#fff"
  },
  flexRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  bottomContentContainer: {
    marginHorizontal: 10,
    marginTop: 30,
  },
  titleText: {
    fontSize: 18,
    color: "#757575",
    fontWeight: "500",
  },
  priceText: {
    fontSize: 18,
    color: "#757575",
    fontWeight: "600",
  },
  cartbutton: { 
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,   
    backgroundColor: "#007AFF", 
    borderRadius: 5,
    color: '#fff',
  },
  divider: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginTop: 10,
    marginBottom: 5,
  },
  grandPriceText: {
    color: "#3C3C3C",
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#007AFF", 
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "700",
    fontFamily: fonts.regular,
  },
  emptyCartText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 50,
    color: '#007AFF',
    fontWeight: '500'
  },
});
