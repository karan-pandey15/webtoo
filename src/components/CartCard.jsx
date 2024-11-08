// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from "react";
// import { fonts } from "../utils/fonts";

// const CartCard = ({ item, handleDelete }) => {
//   const imageUrl =
//     "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png";
//   return (
//     <View style={styles.card}>
      
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <View style={styles.content}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.price}>₹{item.price}</Text>
        
//       </View>
//       <TouchableOpacity onPress={() => handleDelete(item.id)}>
//         <Image
//           source={require("../assets/deleteIcon.png")}
//           style={styles.deleteIcon}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default CartCard;

// const styles = StyleSheet.create({
//   card: {
//     flexDirection: "row",
//     marginVertical: 15,
//   },
//   image: {
//     height: 125,
//     width: "30%",
//     resizeMode: "contain",
//     borderRadius: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "700",
//     fontFamily: fonts.medium,
//     color: "#444444",
//   },
//   price: {
//     fontSize: 18,
//     fontFamily: fonts.medium,
//     color: "#797979",
//     marginVertical: 7,
//     fontWeight: "700",
//   },
//   content: {
//     flex: 1,
//     padding: 5,
//   },
//   circle: {
//     height: 32,
//     width: 32,
//     borderRadius: 16,
//   },
//   sizeContainer: {
//     backgroundColor: "#FFFFFF",
//     height: 32,
//     width: 32,
//     borderRadius: 16,
//     justifyContent: "center",
//     alignItems: "center",
//     marginHorizontal: 20,
//   },
//   sizeText: {
//     fontSize: 18,
//     fontWeight: "700",
//     fontFamily: fonts.medium,
//   },
//   textCircleContainer: {
//     flexDirection: "row",
//   },
//   deleteIcon: {
//     height: 30,
//     width: 30,
//     marginTop: 10,
//   },
// });



import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { fonts } from "../utils/fonts";

const CartCard = ({ item, handleDelete, handleIncreaseQuantity, handleDecreaseQuantity }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>₹{item.price}</Text>

        {/* Display the quantity below the price */}
        <Text style={styles.quantity}>Qty: {item.quantity}</Text>
      </View>
      
      {/* Increase and Decrease Quantity */}
      <View style={styles.quantityControl}>
        <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id, item.quantity)} style={styles.controlButton}>
          <Text style={styles.controlText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id, item.quantity)} style={styles.controlButton}>
          <Text style={styles.controlText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Delete Button */}
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Image source={require("../assets/deleteIcon.png")} style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginVertical: 15,
  },
  image: {
    height: 125,
    width: "30%",
    resizeMode: "contain",
    borderRadius: 20,
  },
  content: {
    flex: 1,
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: fonts.medium,
    color: "#444444",
  },
  price: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: "#797979",
    marginVertical: 7,
    fontWeight: "700",
  },
  quantity: {
    fontSize: 14,
    fontWeight: "500",
    color: "#444444",
    marginVertical: 5,
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
  },
  controlButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  controlText: {
    color: "#fff",
    fontSize: 18,
  },
  deleteIcon: {
    height: 30,
    width: 30,
    marginTop: 10,
  },
});
