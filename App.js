import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import LoginOptionsScreen from './src/screens/LoginOptionsScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import OTPVerificationScreen from './src/screens/OTPVerificationScreen';
import CreateNewPasswordScreen from './src/screens/CreateNewPasswordScreen';
import CreateLinkScreen from './src/screens/CreateLinkScreen';
import TellAboutBusinessScreen from './src/screens/TellAboutBusinessScreen';
import AddLocationScreen from './src/screens/AddLocationScreen';
import StoreCreatedScreen from './src/screens/StoreCreatedScreen';
import MainScreen from './src/screens/MainScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import DesignScreen from './src/screens/DesignScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import HomeIcon from './src/components/icons/HomeIcon';
import ProductsIcon from './src/components/icons/ProductsIcon';
import DesignIcon from './src/components/icons/DesignIcon';
import OrdersIcon from './src/components/icons/OrdersIcon';
import SettingsIcon from './src/components/icons/SettingsIcon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#8E8E93',
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Main" 
        component={MainScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Products" 
        component={ProductsScreen}
        options={{
          title: 'Products',
          tabBarIcon: ({ color, size }) => (
            <ProductsIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Design" 
        component={DesignScreen}
        options={{
          title: 'Design',
          tabBarIcon: ({ color, size }) => (
            <DesignIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Orders" 
        component={OrdersScreen}
        options={{
          title: 'Orders',
          tabBarIcon: ({ color, size }) => (
            <OrdersIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <SettingsIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="LoginOptions"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Auth Screens */}
        <Stack.Screen 
          name="LoginOptions" 
          component={LoginOptionsScreen}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen}
        />
        <Stack.Screen 
          name="OTPVerification" 
          component={OTPVerificationScreen}
        />
        <Stack.Screen 
          name="CreateNewPassword" 
          component={CreateNewPasswordScreen}
        />
        
        {/* Onboarding Screens */}
        <Stack.Screen 
          name="CreateLink" 
          component={CreateLinkScreen}
        />
        <Stack.Screen 
          name="TellAboutBusiness" 
          component={TellAboutBusinessScreen}
        />
        <Stack.Screen 
          name="AddLocation" 
          component={AddLocationScreen}
        />
        <Stack.Screen 
          name="StoreCreated" 
          component={StoreCreatedScreen}
        />
        
        {/* Main App with Bottom Tabs */}
        <Stack.Screen 
          name="Home" 
          component={HomeTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
