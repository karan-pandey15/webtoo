


import React, { useState, useEffect, useContext } from "react";
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
import { CartContext, CartProvider } from "./src/context/CartContext";
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
import OTPScreen from "./src/components/OTPScreen";
import MehndiScreen from "./src/BookingScreen/MehndiScreen";
import CricketScreen from "./src/SportsScreen/CricektScreen";
import HokeyScreen from "./src/SportsScreen/HokeyScreen";
import FoodballScreen from "./src/SportsScreen/FoodballScreen";
import TennisScreen from "./src/SportsScreen/TennisScreen"; 
import BasketballScreen from "./src/SportsScreen/basketballScreen";
import DroppingSchool from "./src/AttendantScreenPage/DroppingSchool";
import ShoppingMarket from "./src/AttendantScreenPage/ShoppingMarket";
import TravellingwithKids from "./src/AttendantScreenPage/TravellingwithKids";
import NightShiftSupport from "./src/AttendantScreenPage/NightShiftSupport";
import BabySitter from "./src/AttendantScreenPage/BabySitter";
import ForHospitalVisit from "./src/AttendantScreenPage/ForHospitalVisit";
import ShoppingAssistance from "./src/AttendantScreenPage/ShoppingAssistance";
import OfficialWork from "./src/AttendantScreenPage/OfficialWork";
import TravellingWithParents from "./src/AttendantScreenPage/TravellingWithParents";
import MehndiDisplayScreen from "./src/BookingScreen/MehndiDisplayScreen";
import FirstPage from "./src/components/FirstPage";
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
      <Stack.Screen name="MehndiScreen" component={MehndiScreen} /> 

      <Stack.Screen name="MehndiDisplayScreen" component={MehndiDisplayScreen} />


      {/* SportS screen page  */}
 
      <Stack.Screen name="CricketScreen" component={CricketScreen} /> 
      <Stack.Screen name="HokeyScreen" component={HokeyScreen} /> 
      <Stack.Screen name="FoodballScreen" component={FoodballScreen} /> 
      <Stack.Screen name="TennisScreen" component={TennisScreen} /> 
      <Stack.Screen name="basketballScreen" component={BasketballScreen} /> 




      {/* Attemdant category screen page  */}
 
      <Stack.Screen name="DroppingSchool" component={DroppingSchool} />  
      <Stack.Screen name="ShoppingMarket" component={ShoppingMarket} />  
      <Stack.Screen name="TravellingwithKids" component={TravellingwithKids} />  
      <Stack.Screen name="NightShiftSupport" component={NightShiftSupport} />  
      <Stack.Screen name="BabySitter" component={BabySitter} />  


      <Stack.Screen name="ForHospitalVisit" component={ForHospitalVisit} />  
      <Stack.Screen name="ShoppingAssistance" component={ShoppingAssistance} />  
      <Stack.Screen name="OfficialWork" component={OfficialWork} />  
      <Stack.Screen name="TravellingWithParents" component={TravellingWithParents} />  
      
      

       
      

       

       
      



       
      
      

       

       
      
      
       

       



       
      
       
    </Stack.Navigator>
  );
};
const MyTabs = () => {
  const { cartItems } = useContext(CartContext); // Access cart items from context

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
              {/* Display Badge for CART icon */}
              {route.name === "CART" && cartItems.length > 0 && (
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>{cartItems.length}</Text>
                </View>
              )}
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
          <Stack.Screen name="FirstScreen" component={FirstPage} />
          <Stack.Screen name="HOMESCREEN" component={WelcomeScreen} />


          {/* After WelcomeScreen, navigate to the main content */}
          <Stack.Screen name="MainFlow" component={MainFlow} />
          
          {/* <Stack.Screen name="OTPScreen" component={OTPScreen} /> */}
          
           
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
  iconContainer: {
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeContainer: {
    position: "absolute",
    right: -8,
    top: -3,
    backgroundColor: "#007BFF",
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});
