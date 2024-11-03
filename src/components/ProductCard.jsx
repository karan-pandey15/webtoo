// import React, { useContext } from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import { CartContext } from "../context/CartContext";
// import { useNavigation, useRoute } from "@react-navigation/native";

// const ProductCard = ({ item: propItem, handleProductClick, toggleFavorite }) => {
//   const { addToCartItem } = useContext(CartContext);  // Access the cart context
//   const navigation = useNavigation();
//   const route = useRoute();

//   // Fallback to `propItem` if `route.params.item` doesn't exist (useful for reusability)
//   const item = route.params?.item || propItem;

//   // If `item` is still undefined, exit early
//   if (!item) {
//     return (
//       <View style={styles.errorContainer}>
//         <Text style={styles.errorText}>Product not found.</Text>
//       </View>
//     );
//   }

//   const handleAddToCart = () => {
//     addToCartItem(item);  // Add the item to the cart
//     // navigation.navigate("CART");  // Navigate to cart screen
//   };

//   return (
//     <LinearGradient colors={["#fff", "#FFF"]} style={styles.card}>
//       <TouchableOpacity onPress={() => handleProductClick(item)}>
//         <Image source={{ uri: item.image }} style={styles.productImage} />
//       </TouchableOpacity>

//       <Text style={styles.productName}>{item.title}</Text>
//       <Text style={styles.productPrice}>₹{item.price}</Text>

//       <View style={styles.actionContainer}>
//         {/* Add to Cart Button */}
//         <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
//           <Text style={styles.addButtonText}>+ Add</Text>
//         </TouchableOpacity>

//         {/* Favorite Button */}
//         <TouchableOpacity onPress={() => toggleFavorite(item)}>
//           <Image
//             source={
//               item.isFavorite
//                 ? require("../assets/favoriteFilled.png")  // Use filled heart icon
//                 : require("../assets/favorite.png")  // Use empty heart icon
//             }
//             style={styles.favoriteIcon}
//           />
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// };

// export default ProductCard;


// const styles = StyleSheet.create({
//   card: {
//     width: 140,  // Make the card width and height smaller
//     height: 200,  // Maintain a fixed height for consistency
//     backgroundColor: "#FFFFFF",  // White background for the product card
//     borderRadius: 12,  // Rounded corners
//     padding: 12,  // Padding inside the card
//     marginBottom: 16,  // Space between cards
//     marginHorizontal: 25,  // Space on sides
//     alignItems: "center",  // Center contents horizontally
//     justifyContent: "space-between",  // Space between contents
//     shadowColor: "#000",  // Shadow color
//     shadowOffset: { width: 0, height: 4 },  // Shadow offset
//     shadowOpacity: 0.2,  // Shadow opacity
//     shadowRadius: 6,  // Shadow blur radius
//     elevation: 2,  // Android elevation for shadow
//   },
//   productImage: {
//     width: 80,  // Smaller image
//     height: 80,  // Same height as width
//     resizeMode: "contain",  // Contain image within the box
//     marginBottom: 8,  // Space below the image
//   },
//   productName: {
//     fontSize: 14,  // Smaller font size
//     fontFamily: "Poppins-Regular",  // Regular font style
//     color: "#000",  // Black text for product name
//     marginBottom: 4,  // Space below product name
//     textAlign: "center",  // Center text
//   },
//   productPrice: {
//     fontSize: 14,  // Smaller price text
//     fontFamily: "Poppins-SemiBold",  // Semi-bold for emphasis
//     color: "#007AFF",  // Blue color for the price
//     marginBottom: 10,  // Space below price
//     textAlign: "center",  // Center text
//   },
//   actionContainer: {
//     flexDirection: "row",  // Layout buttons side by side
//     justifyContent: "space-between",  // Space between buttons
//     alignItems: "center",  // Center items vertically
//     width: "100%",  // Full width for buttons
//   },
//   addButton: {
//     backgroundColor: "#007AFF",  // Blue background for Add button
//     paddingHorizontal: 12,  // Horizontal padding
//     paddingVertical: 6,  // Vertical padding
//     borderRadius: 6,  // Rounded button corners
//   },
//   addButtonText: {
//     color: "#FFFFFF",  // White text for Add button
//     fontFamily: "Poppins-SemiBold",  // Semi-bold font for button text
//     fontSize: 14,  // Font size for button text
//   },
//   favoriteIcon: {
//     width: 24,  // Smaller favorite icon
//     height: 24,  // Same height as width
//     marginLeft: 10,  // Space between Add button and favorite icon
//   },
//   errorContainer: {
//     flex: 1,  // Full screen in case of error
//     justifyContent: "center",  // Center content vertically
//     alignItems: "center",  // Center content horizontally
//   },
//   errorText: {
//     fontSize: 18,  // Larger error text size
//     color: "red",  // Red error text color
//     fontFamily: "Poppins-Regular",  // Regular font style for error
//   },
// });



import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { CartContext } from "../context/CartContext";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ item, handleProductClick, toggleFavorite }) => {
    const { addToCartItem } = useContext(CartContext);
    const navigation = useNavigation();

    const handleAddToCart = () => {
        addToCartItem(item);
    };

    return (
        <LinearGradient colors={["#fff", "#f8f9fb"]} style={styles.card}>
            <TouchableOpacity onPress={() => handleProductClick(item)}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
            </TouchableOpacity>

            <Text style={styles.productName}>{item.title}</Text>
            <Text style={styles.productPrice}>₹{item.price}</Text>

            <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
                    <Text style={styles.addButtonText}>+ Add</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleFavorite(item)}>
                    <Image
                        source={
                            item.isFavorite
                                ? require("../assets/favoriteFilled.png")
                                : require("../assets/favorite.png")
                        }
                        style={styles.favoriteIcon}
                    />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    card: {
        width: 160,  // Increase the card width for more space
        height: 240,  // Adjust height accordingly
        backgroundColor: "#FFFFFF",  // White background for the product card
        borderRadius: 16,  // More rounded corners for a modern look
        padding: 16,  // Increased padding inside the card
        marginBottom: 16,  // Space between cards
        alignItems: "center",  // Center contents horizontally
        justifyContent: "space-between",  // Space between contents
        shadowColor: "#000",  // Shadow color for card
        shadowOffset: { width: 0, height: 4 },  // Shadow offset
        shadowOpacity: 0.3,  // Increased shadow opacity for depth
        shadowRadius: 6,  // Shadow blur radius
        elevation: 4,  // Increase Android elevation for shadow
    },
    productImage: {
        width: 100,  // Larger image for better product visibility
        height: 100,  // Same height as width
        resizeMode: "contain",
        marginBottom: 10,  // Space below the image
    },
    productName: {
        fontSize: 16,  // Slightly larger font for product name
        fontFamily: "Poppins-SemiBold",  // Use semi-bold for better readability
        color: "#333",  // Darker color for text
        textAlign: "center",
    },
    productPrice: {
        fontSize: 16,  // Larger price text
        fontFamily: "Poppins-Bold",  // Bold for emphasis
        color: "#007AFF",  // Blue color for price
        textAlign: "center",
    },
    actionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    addButton: {
        backgroundColor: "#007AFF",  // Blue background for Add button
        paddingHorizontal: 14,  // Increase padding for a more clickable button
        paddingVertical: 8,
        borderRadius: 8,  // More rounded corners
    },
    addButtonText: {
        color: "#FFFFFF",  // White text for Add button
        fontFamily: "Poppins-SemiBold",
        fontSize: 14,
    },
    favoriteIcon: {
        width: 28,  // Larger favorite icon for better visibility
        height: 28,
        marginLeft: 12,  // Space between Add button and favorite icon
    },
});
