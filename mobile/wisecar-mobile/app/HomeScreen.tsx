import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Premium Car Rental</Text>
          <Text style={styles.heroSubtitle}>Drive your dreams, one ride at a time</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Find Your Car</Text>
          </TouchableOpacity>
          <Image 
            source={require('../assets/placeholder-car.png')} 
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        {/* Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose Us</Text>
          <View style={styles.featuresGrid}>
            <View style={styles.featureCard}>
              <Ionicons name="car-outline" size={32} color="#00b8a9" />
              <Text style={styles.featureTitle}>Premium Selection</Text>
              <Text style={styles.featureDescription}>Choose from our wide selection of premium vehicles</Text>
            </View>
            <View style={styles.featureCard}>
              <Ionicons name="shield-checkmark-outline" size={32} color="#00b8a9" />
              <Text style={styles.featureTitle}>Safe & Secure</Text>
              <Text style={styles.featureDescription}>All cars are regularly maintained and sanitized</Text>
            </View>
            <View style={styles.featureCard}>
              <Ionicons name="wallet-outline" size={32} color="#00b8a9" />
              <Text style={styles.featureTitle}>Competitive Pricing</Text>
              <Text style={styles.featureDescription}>Get the best deals with our transparent pricing</Text>
            </View>
            <View style={styles.featureCard}>
              <Ionicons name="time-outline" size={32} color="#00b8a9" />
              <Text style={styles.featureTitle}>24/7 Support</Text>
              <Text style={styles.featureDescription}>Our customer service team is always available</Text>
            </View>
          </View>
        </View>

        {/* Popular Cars Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Cars</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.carScroll}>
            {[1, 2, 3, 4].map((item) => (
              <TouchableOpacity key={item} style={styles.carCard}>
                <Image 
                  source={require('../assets/placeholder-car.png')} 
                  style={styles.carImage}
                  resizeMode="cover"
                />
                <View style={styles.carInfo}>
                  <Text style={styles.carName}>Tesla Model S</Text>
                  <Text style={styles.carPrice}>$150/day</Text>
                  <View style={styles.carDetails}>
                    <Ionicons name="flash-outline" size={16} color="#00b8a9" />
                    <Text style={styles.carDetailText}>Electric</Text>
                    <Ionicons name="speedometer-outline" size={16} color="#00b8a9" />
                    <Text style={styles.carDetailText}>155 mph</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  hero: {
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#a0a0a0',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00b8a9',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  heroImage: {
    width: '100%',
    height: 200,
  },
  section: {
    padding: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '48%',
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#a0a0a0',
    textAlign: 'center',
  },
  carScroll: {
    flexDirection: 'row',
  },
  carCard: {
    width: 250,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 15,
  },
  carImage: {
    width: '100%',
    height: 150,
  },
  carInfo: {
    padding: 15,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  carPrice: {
    fontSize: 16,
    color: '#00b8a9',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carDetailText: {
    color: '#a0a0a0',
    marginRight: 15,
    marginLeft: 5,
  },
});

export default HomeScreen; 