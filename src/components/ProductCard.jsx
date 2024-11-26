 

// import React, { useState, useContext } from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import { CartContext } from "../context/CartContext";
// import { useNavigation } from "@react-navigation/native";
// import Modal from "react-native-modal";

// const ProductCard = ({ item, handleProductClick, toggleFavorite }) => {
//   const { addToCartItem } = useContext(CartContext);
//   const [isModalVisible, setModalVisible] = useState(false);

//   const handleAddToCart = () => {
//     addToCartItem(item);
//     setModalVisible(true);
//     setTimeout(() => {
//       setModalVisible(false);
//     }, 1000);
//   };

//   return (
//     <LinearGradient colors={["#fff", "#f8f9fb"]} style={styles.card}>
//       <TouchableOpacity onPress={() => handleProductClick(item)}>
//         <Image source={{ uri: item.image }} style={styles.productImage} />
//       </TouchableOpacity>

//       <Text style={styles.productName}>{item.title}</Text>
//       <Text style={styles.productPrice}>₹{item.price}</Text>

//       <View style={styles.actionContainer}>
//         <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
//           <Text style={styles.addButtonText}>+ Add</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => toggleFavorite(item)}>
//           <Image
//             source={
//               item.isFavorite
//                 ? require("../assets/favoriteFilled.png")
//                 : require("../assets/favorite.png")
//             }
//             style={styles.favoriteIcon}
//           />
//         </TouchableOpacity>
//       </View>

//       <Modal
//         isVisible={isModalVisible}
//         animationIn="fadeInUp"
//         animationOut="fadeOutDown"
//         backdropOpacity={0.3}
//         style={styles.modal}
//       >
//         <View style={styles.modalContent}>
//           <Text style={styles.modalText}>{item.title} Added Successfully!</Text>
//         </View>
//       </Modal>
//     </LinearGradient>
//   );
// };

// export default ProductCard;

// const styles = StyleSheet.create({
//   card: {
//     width: 140,
//     height: 200,
//     backgroundColor: "#FFFFFF",
//     borderRadius: 12,
//     padding: 10,
//     marginBottom: 12,
//     alignItems: "center",
//     justifyContent: "space-between",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   productImage: {
//     width: 80,
//     height: 80,
//     resizeMode: "contain",
//     marginBottom: 8,
//   },
//   productName: {
//     fontSize: 14,
//     fontFamily: "Poppins-SemiBold",
//     color: "#333",
//     textAlign: "center",
//   },
//   productPrice: {
//     fontSize: 14,
//     fontFamily: "Poppins-Bold",
//     color: "#007AFF",
//     textAlign: "center",
//   },
//   actionContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "100%",
//   },
//   addButton: {
//     backgroundColor: "#007AFF",
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 6,
//   },
//   addButtonText: {
//     color: "#FFFFFF",
//     fontFamily: "Poppins-SemiBold",
//     fontSize: 12,
//   },
//   favoriteIcon: {
//     width: 24,
//     height: 24,
//     marginLeft: 8,
//   },
//   modal: {
//     justifyContent: "flex-end",
//     margin: 0,
//   },
//   modalContent: {
//     backgroundColor: "#007AFF",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     margin: 10,
//   },
//   modalText: {
//     color: "#FFFFFF",
//     fontFamily: "Poppins-Bold",
//     fontSize: 16,
//     textAlign: "center",
//   },
// });


// import React, { useState, useContext } from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import { CartContext } from "../context/CartContext";
// import Modal from "react-native-modal";

// const ProductCard = ({ item, handleProductClick }) => {
//   const { addToCartItem, updateCartItemQuantity, getCartItemQuantity } = useContext(CartContext);
//   const [isModalVisible, setModalVisible] = useState(false);
//   const quantity = getCartItemQuantity(item.id); // Retrieve quantity for the item in cart

//   const handleAddToCart = () => {
//     addToCartItem(item);
//     setModalVisible(true);
//     setTimeout(() => {
//       setModalVisible(false);
//     }, 1000);
//   };

//   const handleIncreaseQuantity = () => {
//     updateCartItemQuantity(item.id, quantity + 1);
//   };

//   const handleDecreaseQuantity = () => {
//     if (quantity > 1) {
//       updateCartItemQuantity(item.id, quantity - 1);
//     }
//   };

//   return (
//     <LinearGradient colors={["#fff", "#f8f9fb"]} style={styles.card}>
//       <TouchableOpacity onPress={() => handleProductClick(item)}>
//         <Image source={{ uri: item.image }} style={styles.productImage} />
//       </TouchableOpacity>

//       <Text style={styles.productName}>{item.title}</Text>
//       <Text style={styles.productPrice}>₹{item.price}</Text>

//       <View style={styles.actionContainer}>
//         {quantity > 0 ? (
//           <View style={styles.quantityContainer}>
//             <TouchableOpacity onPress={handleDecreaseQuantity}>
//               <Text style={styles.quantityButton}>-</Text>
//             </TouchableOpacity>
//             <Text style={styles.quantityText}>{quantity}</Text>
//             <TouchableOpacity onPress={handleIncreaseQuantity}>
//               <Text style={styles.quantityButton}>+</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
//             <Text style={styles.addButtonText}>+ Add</Text>
//           </TouchableOpacity>
//         )}
//       </View>

//       <Modal
//         isVisible={isModalVisible}
//         animationIn="fadeInUp"
//         animationOut="fadeOutDown"
//         backdropOpacity={0.3}
//         style={styles.modal}
//       >
//         <View style={styles.modalContent}>
//           <Text style={styles.modalText}>{item.title} Added Successfully!</Text>
//         </View>
//       </Modal>
//     </LinearGradient>
//   );
// };

// export default ProductCard;

// const styles = StyleSheet.create({
//   card: {
//     width: 140,
//     height: 200,
//     backgroundColor: "#FFFFFF",
//     borderRadius: 12,
//     padding: 10,
//     marginBottom: 12,
//     alignItems: "center",
//     justifyContent: "space-between",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   productImage: {
//     width: 80,
//     height: 80,
//     resizeMode: "contain",
//     marginBottom: 8,
//   },
//   productName: {
//     fontSize: 14,
//     fontFamily: "Poppins-SemiBold",
//     color: "#333",
//     textAlign: "center",
//   },
//   productPrice: {
//     fontSize: 14,
//     fontFamily: "Poppins-Bold",
//     color: "#007AFF",
//     textAlign: "center",
//   },
//   actionContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "100%",
//   },
//   addButton: {
//     backgroundColor: "#007AFF",
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 6,
//   },
//   addButtonText: {
//     color: "#FFFFFF",
//     fontFamily: "Poppins-SemiBold",
//     fontSize: 12,
//   },
//   quantityContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   quantityButton: {
//     color: "#007AFF",
//     fontSize: 20,
//     paddingHorizontal: 10,
//   },
//   quantityText: {
//     fontSize: 16,
//     color: "#007AFF",
//     marginHorizontal: 5,
//   },
//   modal: {
//     justifyContent: "flex-end",
//     margin: 0,
//   },
//   modalContent: {
//     backgroundColor: "#007AFF",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     margin: 10,
//   },
//   modalText: {
//     color: "#FFFFFF",
//     fontFamily: "Poppins-Bold",
//     fontSize: 16,
//     textAlign: "center",
//   },
// });


import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const ProductCard = ({ item, handleProductClick, toggleFavorite }) => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => handleProductClick(item)}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>₹{item.price}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.favoriteButton, item.isFavorite && styles.favoriteSelected]}
        onPress={() => toggleFavorite(item)}
      >
        <Text style={styles.favoriteText}>
          {item.isFavorite ? "❤️" : "♡"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 10,
    margin: 8,
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    height: 100,
    width: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    color: "#007BFF",
    marginBottom: 8,
  },
  favoriteButton: {
    backgroundColor: "#F0F0F0",
    height: 32,
    width: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  favoriteSelected: {
    backgroundColor: "#FFD700",
  },
  favoriteText: {
    fontSize: 18,
  },
});
