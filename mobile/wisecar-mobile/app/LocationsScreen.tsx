import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  hours: string;
  image: any;
  cars: number;
}

const LocationsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock locations data
  const locations: Location[] = [
    {
      id: '1',
      name: 'Downtown Center',
      address: '123 Main Street',
      city: 'San Francisco, CA',
      hours: 'Mon-Sat: 8AM-8PM, Sun: 10AM-6PM',
      image: require('../assets/placeholder-location.png'),
      cars: 15
    },
    {
      id: '2',
      name: 'Airport Terminal',
      address: 'SFO International Airport, Terminal 2',
      city: 'San Francisco, CA',
      hours: 'Open 24/7',
      image: require('../assets/placeholder-location.png'),
      cars: 23
    },
    {
      id: '3',
      name: 'Marina District',
      address: '456 Beach Avenue',
      city: 'San Francisco, CA',
      hours: 'Mon-Sun: 9AM-7PM',
      image: require('../assets/placeholder-location.png'),
      cars: 12
    },
    {
      id: '4',
      name: 'Financial District',
      address: '789 Market Street',
      city: 'San Francisco, CA',
      hours: 'Mon-Fri: 7AM-9PM, Sat-Sun: 9AM-6PM',
      image: require('../assets/placeholder-location.png'),
      cars: 18
    },
    {
      id: '5',
      name: 'Silicon Valley',
      address: '1010 Tech Boulevard',
      city: 'Palo Alto, CA',
      hours: 'Mon-Sun: 8AM-8PM',
      image: require('../assets/placeholder-location.png'),
      cars: 20
    }
  ];

  // Filter locations based on search query
  const filteredLocations = locations.filter(location => 
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    location.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our Locations</Text>
        <Text style={styles.subtitle}>Find WiseCar rental locations near you</Text>
        
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#a0a0a0" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by city or location name..."
            placeholderTextColor="#a0a0a0"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.locationsContainer}
      >
        {filteredLocations.map((location) => (
          <TouchableOpacity key={location.id} style={styles.locationCard}>
            <Image 
              source={location.image} 
              style={styles.locationImage}
              resizeMode="cover"
            />
            <View style={styles.carsAvailableBadge}>
              <Text style={styles.carsAvailableText}>{location.cars} Cars Available</Text>
            </View>
            <View style={styles.locationInfo}>
              <Text style={styles.locationName}>{location.name}</Text>
              <View style={styles.locationAddress}>
                <Ionicons name="location-outline" size={16} color="#a0a0a0" />
                <Text style={styles.addressText}>{location.address}</Text>
              </View>
              <Text style={styles.cityText}>{location.city}</Text>
              <View style={styles.locationHours}>
                <Ionicons name="time-outline" size={16} color="#00b8a9" />
                <Text style={styles.hoursText}>{location.hours}</Text>
              </View>
              <TouchableOpacity style={styles.directionsButton}>
                <Ionicons name="navigate-outline" size={16} color="#ffffff" />
                <Text style={styles.directionsText}>Get Directions</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}

        {filteredLocations.length === 0 && (
          <View style={styles.noResults}>
            <Ionicons name="location-outline" size={60} color="#a0a0a0" />
            <Text style={styles.noResultsText}>No locations found matching "{searchQuery}"</Text>
            <Text style={styles.noResultsSubtext}>Try a different search term or browse all locations</Text>
          </View>
        )}

        <View style={styles.helpSection}>
          <Text style={styles.helpTitle}>Need Help Finding a Location?</Text>
          <Text style={styles.helpText}>
            Call our customer support team for assistance in finding the nearest WiseCar location.
          </Text>
          <TouchableOpacity style={styles.helpButton}>
            <Ionicons name="call-outline" size={16} color="#ffffff" />
            <Text style={styles.helpButtonText}>Contact Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#a0a0a0',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 45,
    color: '#ffffff',
    fontSize: 16,
  },
  locationsContainer: {
    padding: 20,
    paddingTop: 10,
  },
  locationCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  locationImage: {
    width: '100%',
    height: 150,
  },
  carsAvailableBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(0, 184, 169, 0.8)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  carsAvailableText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  locationInfo: {
    padding: 15,
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  locationAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  addressText: {
    color: '#a0a0a0',
    marginLeft: 5,
    fontSize: 14,
  },
  cityText: {
    color: '#a0a0a0',
    marginLeft: 21,
    marginBottom: 10,
    fontSize: 14,
  },
  locationHours: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  hoursText: {
    color: '#00b8a9',
    marginLeft: 5,
    fontSize: 14,
  },
  directionsButton: {
    backgroundColor: '#00b8a9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 6,
  },
  directionsText: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  noResults: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  noResultsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  noResultsSubtext: {
    fontSize: 14,
    color: '#a0a0a0',
    textAlign: 'center',
  },
  helpSection: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
    marginBottom: 20,
  },
  helpTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  helpText: {
    fontSize: 14,
    color: '#a0a0a0',
    marginBottom: 15,
  },
  helpButton: {
    backgroundColor: '#ff7e67',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 6,
  },
  helpButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default LocationsScreen; 