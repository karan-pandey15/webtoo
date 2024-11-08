import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native"; // Import useRoute for getting the current route
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons for icons
import SearchHeader from "../CategoryPrd/SearchHeader";

const Header = ({ isCart }) => {
  const navigation = useNavigation(); // Hook to access navigation
  const route = useRoute(); // Hook to access the current route

  const handleBack = () => {
    navigation.navigate("HOME");
  };

  const handleCartNavigate = () => {
    navigation.navigate("#"); // Navigate to Cart screen
  };

  const handleFavoritesNavigate = () => {
    navigation.navigate("isfav"); // Navigate to Favorites/Wishlist screen
  };

  const handleProfileNavigate = () => {
    navigation.navigate("ACCOUNT"); // Navigate to Profile screen
  };

  return (
    <View style={styles.headercontainer}>
      <View style={styles.header}>
        {/* Back button, only shown if isCart is true */}
        {isCart ? (
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Ionicons name="arrow-back" size={24} color="#007BFF" />
          </TouchableOpacity>
        ) : (
          <Text style={styles.applogo}>MARAS</Text>
        )}

        {/* Centered title, only shown if isCart is true */}
        {isCart ? <Text style={styles.titleText}>My Cart</Text> : <View style={{ flex: 1 }} />}

        {/* Right side icons (Cart, Wishlist, Profile) */}
        <View style={styles.rightIconsContainer}>
          {/* Cart Icon */}
          <TouchableOpacity style={styles.iconButton} onPress={handleCartNavigate}>
            <Ionicons name="notifications-outline" size={24} color="#007BFF" />
          </TouchableOpacity>

          {/* Favorites/Wishlist Icon */}
          <TouchableOpacity style={styles.iconButton} onPress={handleFavoritesNavigate}>
            <Ionicons name="heart-outline" size={24} color="#007BFF" />
          </TouchableOpacity>

          {/* Profile Icon */}
          <TouchableOpacity style={styles.iconButton} onPress={handleProfileNavigate}>
            <Ionicons name="person-outline" size={24} color="#007BFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Conditionally render the SearchHeader if the current route is HOME */}
      {route.name === "HOME" && <SearchHeader />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headercontainer: {
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  backButton: {
    backgroundColor: "#F0F0F0",
    height: 44,
    width: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  applogo: {
    color: "#007BFF",
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 1,
    textShadowColor: "#D0D0D0",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  titleText: {
    flex: 1,
    fontSize: 24,
    fontWeight: "600",
    color: "#007BFF",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  rightIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    backgroundColor: "#F0F0F0",
    height: 44,
    width: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderColor: "#007BFF",
    borderWidth: 1,
  },
});
