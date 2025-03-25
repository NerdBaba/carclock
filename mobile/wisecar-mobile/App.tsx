import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, ViewProps, TextProps } from 'react-native';
// Correct import for NativeWind v2
import { StyledComponent } from 'nativewind';

// Define styled components for NativeWind v2 with proper types
interface StyledViewProps extends ViewProps {
  className?: string;
}

interface StyledTextProps extends TextProps {
  className?: string;
}

const StyledView: React.FC<StyledViewProps> = ({ className, ...props }) => (
  <StyledComponent component={View} className={className} {...props} />
);

const StyledText: React.FC<StyledTextProps> = ({ className, ...props }) => (
  <StyledComponent component={Text} className={className} {...props} />
);

// Import screens
import HomeScreen from './app/HomeScreen';
import CarsScreen from './app/CarsScreen';
import ProfileScreen from './app/ProfileScreen';
import HowItWorksScreen from './app/HowItWorksScreen';
import LocationsScreen from './app/LocationsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Main tab navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#00b8a9',
        tabBarInactiveTintColor: '#a0a0a0',
        tabBarStyle: {
          backgroundColor: '#1a1a1a',
          borderTopColor: '#2a2a2a',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        headerStyle: {
          backgroundColor: '#1a1a1a',
        },
        headerTintColor: '#f5f5f5',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Cars" 
        component={CarsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="How It Works" 
        component={HowItWorksScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Locations" 
        component={LocationsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#121212' }
          }}
        >
          <Stack.Screen name="Main" component={MainTabs} />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
