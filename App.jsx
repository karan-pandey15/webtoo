// import { View ,StyleSheet,Text, Image} from "react-native";
// import React, { useContext, useState, useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "./src/screen/HomeScreen";
// import ProductDetailsScreen from "./src/screen/ProductDetailsScreen";
// import CartScreen from "./src/screen/CartScreen";
// import ReorderScreen from "./src/screen/ReorderScreen";
// import AccountScreen from "./src/screen/AccountScreen";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { CartContext, CartProvider } from "./src/context/CartContext";
// import SkinCareProducts from "./src/screen/SkinCareProducts";
// import IsFav from "./src/screen/IsFav";
// import ReferShare from "./src/components/RefShare";
// import Signup from "./src/screen/Signup";
// import Signin from "./src/screen/Signin";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import DailuUsePrd from "./src/CategoryPrd/DailuUsePrd";
// import ProductDetail from "./src/ProductView/ProductDetail";
// import MilkPrd from "./src/CategoryPrd/MilkPrd";
// import UserRegister from "./src/CategoryPrd/UserRegister";
// import VegePrd from "./src/CategoryPrd/VegePrd";
// import NoodlesPrd from "./src/CategoryPrd/NoodlesPrd";
// import BreakFastPrd from "./src/CategoryPrd/BreakFastPrd";
// import FoodOil from "./src/CategoryPrd/FoodOil";
// import UserSignin from "./src/CategoryPrd/UserSignin";
// import UserDashboard from "./src/CategoryPrd/UserDashboard";
// import FirstScreen from "./src/CategoryPrd/FirstScreen";
// import AttendedRegister from "./src/CategoryPrd/AttendedSignUp";
// import Icon from "react-native-vector-icons/FontAwesome";
// import TrainerScreen from "./src/BookingScreen/TrainerScreen";
// import DrivingTeacherScreen from "./src/BookingScreen/DrivingTeacherScreen";
// import SkatingTrainerScreen from "./src/BookingScreen/SkatingTrainerScreen";
// import BoxingCoachScreen from "./src/BookingScreen/BoxingCoachScreen";
// import DanceTeacherScreen from "./src/BookingScreen/DanceTeacherScreen";
// import SolarEnquiryScreen from "./src/BookingScreen/SolarEnquiryScreen";
// import MilkBreadScreen from "./src/BookingScreen/MilkBreadScreen";
// import GrceryScreen from "./src/BookingScreen/GrceryScreen";
// import KidsLunchScreen from "./src/BookingScreen/KidsLunchScreen";
// import DriverScreen from "./src/BookingScreen/DriverScreen";
// import TeacherScreen from "./src/BookingScreen/TeacherScreen";
// import NurseScreen from "./src/BookingScreen/NurseScreen";
// import PhysioScreen from "./src/BookingScreen/PhysioScreen";
// import EventCrewsScreen from "./src/BookingScreen/EventCrewsScreen";
// import WelcomeScreen from "./src/components/FirstScreen"; 
// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const MyHomeStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
      // <Stack.Screen name="HOMESCREEN" component={WelcomeScreen} />
      // <Stack.Screen name="HOME" component={HomeScreen} />

      // <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
      // <Stack.Screen name="skincare" component={SkinCareProducts} />
      // <Stack.Screen name="isfav" component={IsFav} />
      // <Stack.Screen name="ReferShare" component={ReferShare} />
      // <Stack.Screen name="signup" component={Signup} />
      // <Stack.Screen name="signin" component={Signin} />
      // <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      // <Stack.Screen name="DailuUsePrd" component={DailuUsePrd} />
      // <Stack.Screen name="UserRegister" component={UserRegister} />
      // <Stack.Screen name="UserSignin" component={UserSignin} />
      // <Stack.Screen name="UserDashboard" component={UserDashboard} /> 
      // {/* <Stack.Screen name="AttendedRegister" component={AttendedRegister} /> // use  it  */}
      // <Stack.Screen name="VegePrd" component={VegePrd} />
      // <Stack.Screen name="NoodlesPrd" component={NoodlesPrd} />
      // <Stack.Screen name="BreakFastPrd" component={BreakFastPrd} />
      // <Stack.Screen name="FoodOil" component={FoodOil} />
      // <Stack.Screen name="ProductDetail" component={ProductDetail} />



      // {/* BookingScreen page  */}

      // <Stack.Screen name="TrainerScreen" component={TrainerScreen} />
      // <Stack.Screen name="DrivingTeacherScreen" component={DrivingTeacherScreen} />
      // <Stack.Screen name="SkatingTrainerScreen" component={SkatingTrainerScreen} />
      // <Stack.Screen name="BoxingCoachScreen" component={BoxingCoachScreen} />
      // <Stack.Screen name="DanceTeacherScreen" component={DanceTeacherScreen} />
      // <Stack.Screen name="SolarEnquiryScreen" component={SolarEnquiryScreen} />
      // <Stack.Screen name="MilkBreadScreen" component={MilkBreadScreen} />
      // <Stack.Screen name="GrceryScreen" component={GrceryScreen} />
      // <Stack.Screen name="KidsLunchScreen" component={KidsLunchScreen} />
      // <Stack.Screen name="DriverScreen" component={DriverScreen} />
      // <Stack.Screen name="TeacherScreen" component={TeacherScreen} />
      // <Stack.Screen name="NurseScreen" component={NurseScreen} />
      // <Stack.Screen name="PhysioScreen" component={PhysioScreen} /> 
      // <Stack.Screen name="EventCrewsScreen" component={EventCrewsScreen} /> 
//     </Stack.Navigator>
//   );
// };

// const App = () => {
//   const [favorites, setFavorites] = useState([]);
//   useEffect(() => {
//     loadFavorites();
//   }, []);

//   const loadFavorites = async () => {
//     try {
//       const storedFavorites = await AsyncStorage.getItem('favorites');
//       if (storedFavorites !== null) {
//         setFavorites(JSON.parse(storedFavorites));
//       }
//     } catch (error) {
//       console.error("Error loading favorites from AsyncStorage:", error);
//     }
//   };

//   return (
 
 

//     <NavigationContainer>
//     <CartProvider>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           headerShown: false,
//           tabBarShowLabel: false,
//           tabBarStyle: {
//             backgroundColor: "#fff", 
//             borderTopWidth: 0,  
//             height: 60, 
//           },
//           tabBarIcon: ({ focused, size }) => {
//             let iconName;
//             let iconSize = 25;
//             let iconColor = focused ? "#007BFF" : "#A9A9A9"; // Blue when active, gray when inactive
//             let backgroundColor = focused ? "#D3D3D3" : "#F0F0F0"; // Light gray background for icons

//             // Set the icon names for different tabs
//             if (route.name === "HOME_STACK") {
//               iconName = "home";
//             } else if (route.name === "CATEGORIES") {
//               iconName = "th-list";
//             } else if (route.name === "isfav") {
//               iconName = "shopping-basket";
//             } else if (route.name === "REORDER") {
//               iconName = "credit-card";
//             } else if (route.name === "ACCOUNT") {
//               iconName = "user";
//             }

//             return (
//               <View style={[styles.iconContainer, { backgroundColor }]}>
//                 <Icon name={iconName} size={iconSize} color={iconColor} />
//                 {route.name === "isfav" && (
//                   <CartBadge focused={focused} />
//                 )}
//               </View>
//             );
//           },
//         })}
//       >
//         <Tab.Screen name="HOME_STACK" component={MyHomeStack} />
//         <Tab.Screen name="CATEGORIES" component={MyHomeStack} />

//         <Tab.Screen
//             name="CART"
//             component={CartScreen}
//             options={{
//               tabBarIcon: ({ focused, size }) => {
//                 const { cartItems } = useContext(CartContext);
//                 if (focused) {
//                   return (
//                     <View style={{ position: "relative" }}>
//                       <Image
//                         source={require("./src/assets/focused/shopping_cart.png")}
//                         style={{
//                           height: size,
//                           width: size,
//                           resizeMode: "center",
//                         }}
//                       />
//                       <View
//                         style={{
//                           position: "absolute",
//                           right: -3,
//                           bottom: 22,
//                           height: 14,
//                           width: 14,
//                           backgroundColor: "#E96E6E",
//                           borderRadius: 7,
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <Text style={{ color: "white", fontSize: 10 }}>
//                           {cartItems.length}
//                         </Text>
//                       </View>
//                     </View>
//                   );
//                 } else {
//                   return (
//                     <View style={{ position: "relative" }}>
//                       <Image
//                         source={require("./src/assets/normal/shopping_cart.png")}
//                         style={{
//                           height: size,
//                           width: size,
//                           resizeMode: "center",
//                         }}
//                       />
//                       <View
//                         style={{
//                           position: "absolute",
//                           right: -3,
//                           bottom: 22,
//                           height: 14,
//                           width: 14,
//                           backgroundColor: "#C0C0C0",
//                           borderRadius: 7,
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <Text style={{ color: "white", fontSize: 10 }}>
//                           {cartItems.length}
//                         </Text>
//                       </View>
//                     </View>
//                   );
//                 }
//               },
//             }}
//           />
 
//         <Tab.Screen name="REORDER" component={ReorderScreen} />
//         <Tab.Screen name="ACCOUNT" component={AccountScreen} />


        
//       </Tab.Navigator>
//     </CartProvider>
//   </NavigationContainer>
//   );
// };


// function CartBadge({ focused }) {
//   const { favorites } = useContext(CartContext);

//   return (
//     <View
//       style={[
//         styles.badgeContainer,
//         { backgroundColor: focused ? "#ffff" : "#ffff" },
//       ]}
//     >
//       {/* <Text style={styles.badgeText}>{favorites.length}</Text> */}
//     </View>
//   );
// }
// export default App;
// const styles = StyleSheet.create({
//   iconContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     width: 50,
//     height: 50,
//     borderRadius: 25, // Make it circular
//   },
//   badgeContainer: {
//     position: "absolute",
//     right: -8,
//     bottom: 18,
//     height: 16,
//     width: 16,
//     borderRadius: 8, // Make the badge circular
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   badgeText: {
//     color: "white",
//     fontSize: 10,
//     fontWeight: "bold",
//   },
// }); 



import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HomeScreen from "./src/screen/HomeScreen";
import ProductDetailsScreen from "./src/screen/ProductDetailsScreen";
import CartScreen from "./src/screen/CartScreen";
import ReorderScreen from "./src/screen/ReorderScreen";
import AccountScreen from "./src/screen/AccountScreen"; 
import { CartProvider } from "./src/context/CartContext";
import { Text } from "react-native";
import SkinCareProducts from "./src/screen/SkinCareProducts";
import ReferShare from "./src/components/RefShare";
import Signup from "./src/screen/Signup";
import Signin from "./src/screen/Signin";
import DailuUsePrd from "./src/CategoryPrd/DailuUsePrd";
import UserRegister from "./src/CategoryPrd/UserRegister";
import UserSignin from "./src/CategoryPrd/UserSignin";
import UserDashboard from "./src/CategoryPrd/UserDashboard";
import VegePrd from "./src/CategoryPrd/VegePrd";
import NoodlesPrd from "./src/CategoryPrd/NoodlesPrd";
import BreakFastPrd from "./src/CategoryPrd/BreakFastPrd";
import FoodOil from "./src/CategoryPrd/FoodOil";
import ProductDetail from "./src/ProductView/ProductDetail";
import TrainerScreen from "./src/BookingScreen/TrainerScreen";
import DrivingTeacherScreen from "./src/BookingScreen/DrivingTeacherScreen";
import SkatingTrainerScreen from "./src/BookingScreen/SkatingTrainerScreen";
import BoxingCoachScreen from "./src/BookingScreen/BoxingCoachScreen";
import DanceTeacherScreen from "./src/BookingScreen/DanceTeacherScreen";
import SolarEnquiryScreen from "./src/BookingScreen/SolarEnquiryScreen";
import MilkBreadScreen from "./src/BookingScreen/MilkBreadScreen";
import EventCrewsScreen from "./src/BookingScreen/EventCrewsScreen";
import PhysioScreen from "./src/BookingScreen/PhysioScreen";
import NurseScreen from "./src/BookingScreen/NurseScreen";
import TeacherScreen from "./src/BookingScreen/TeacherScreen";
import DriverScreen from "./src/BookingScreen/DriverScreen";
import KidsLunchScreen from "./src/BookingScreen/KidsLunchScreen";
import GrceryScreen from "./src/BookingScreen/GrceryScreen";

import IsFav from "./src/screen/IsFav";
import WelcomeScreen from "./src/components/FirstScreen";
import AttendedScreen from "./src/BookingScreen/AttendedScreen";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Home Stack (Main App Navigation Stack)
const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} /> */}

      <Stack.Screen name="HOME" component={HomeScreen} />

      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
      <Stack.Screen name="skincare" component={SkinCareProducts} />
      <Stack.Screen name="isfav" component={IsFav} />
      <Stack.Screen name="ReferShare" component={ReferShare} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="signin" component={Signin} />
      <Stack.Screen name="DailuUsePrd" component={DailuUsePrd} />
      <Stack.Screen name="UserRegister" component={UserRegister} />
      <Stack.Screen name="UserSignin" component={UserSignin} />
      <Stack.Screen name="UserDashboard" component={UserDashboard} /> 
      {/* <Stack.Screen name="AttendedRegister" component={AttendedRegister} /> // use  it  */}
      <Stack.Screen name="VegePrd" component={VegePrd} />
      <Stack.Screen name="NoodlesPrd" component={NoodlesPrd} />
      <Stack.Screen name="BreakFastPrd" component={BreakFastPrd} />
      <Stack.Screen name="FoodOil" component={FoodOil} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
 
      <Stack.Screen name="AttendedScreen" component={AttendedScreen} /> 
      <Stack.Screen name="TrainerScreen" component={TrainerScreen} />

      <Stack.Screen name="DrivingTeacherScreen" component={DrivingTeacherScreen} />
      <Stack.Screen name="SkatingTrainerScreen" component={SkatingTrainerScreen} />
      <Stack.Screen name="BoxingCoachScreen" component={BoxingCoachScreen} />
      <Stack.Screen name="DanceTeacherScreen" component={DanceTeacherScreen} />
      <Stack.Screen name="SolarEnquiryScreen" component={SolarEnquiryScreen} />
      <Stack.Screen name="MilkBreadScreen" component={MilkBreadScreen} />
      <Stack.Screen name="GrceryScreen" component={GrceryScreen} />
      <Stack.Screen name="KidsLunchScreen" component={KidsLunchScreen} />
      <Stack.Screen name="DriverScreen" component={DriverScreen} />
      <Stack.Screen name="TeacherScreen" component={TeacherScreen} />
      <Stack.Screen name="NurseScreen" component={NurseScreen} />
      <Stack.Screen name="PhysioScreen" component={PhysioScreen} /> 
      <Stack.Screen name="EventCrewsScreen" component={EventCrewsScreen} /> 
    </Stack.Navigator>
  );
};

// Tab Navigation for the main app
const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          height: 60,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconSize = 25;
          let iconColor = focused ? "#007BFF" : "#A9A9A9"; // Blue when active, gray when inactive
          let backgroundColor = focused ? "#D3D3D3" : "#F0F0F0";

          if (route.name === "HOME_STACK") {
            iconName = "home";
          } else if (route.name === "CATEGORIES") {
            iconName = "th-list";
          } else if (route.name === "CART") {
            iconName = "shopping-cart";
          } else if (route.name === "REORDER") {
            iconName = "credit-card";
          } else if (route.name === "ACCOUNT") {
            iconName = "user";
          }

          return (
            <View style={[styles.iconContainer, { backgroundColor }]}>
              <Icon name={iconName} size={iconSize} color={iconColor} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="HOME_STACK" component={MyHomeStack} />
      <Tab.Screen name="CATEGORIES" component={MyHomeStack} />
      <Tab.Screen name="CART" component={CartScreen} />
      <Tab.Screen name="REORDER" component={ReorderScreen} />
      <Tab.Screen name="ACCOUNT" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Welcome Screen shows first */}
          <Stack.Screen name="HOMESCREEN" component={WelcomeScreen} />

          {/* After WelcomeScreen, navigate to the main content */}
          <Stack.Screen name="MainFlow" component={MainFlow} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

// Main flow that contains tab navigation
const MainFlow = () => {
  return <MyTabs />;
};

 

export default App;

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
