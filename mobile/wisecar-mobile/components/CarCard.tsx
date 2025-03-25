import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CarCardProps {
  car: {
    id: string;
    name: string;
    category: string;
    price: number;
    image: any;
    rating?: number;
    seats?: number;
    transmission?: string;
  };
  onPress?: () => void;
  style?: object;
}

const CarCard = ({ car, onPress, style }: CarCardProps) => {
  return (
    <TouchableOpacity 
      style={[styles.carCard, style]} 
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Image 
        source={car.image} 
        style={styles.carImage} 
        resizeMode="cover" 
      />
      <View style={styles.carInfo}>
        <View style={styles.carHeader}>
          <Text style={styles.carName}>{car.name}</Text>
          {car.rating && (
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={14} color="#FFD700" />
              <Text style={styles.ratingText}>{car.rating}</Text>
            </View>
          )}
        </View>
        <Text style={styles.carCategory}>{car.category}</Text>
        
        {(car.seats || car.transmission) && (
          <View style={styles.carDetails}>
            {car.seats && (
              <View style={styles.detailItem}>
                <Ionicons name="people-outline" size={16} color="#00b8a9" />
                <Text style={styles.detailText}>{car.seats} seats</Text>
              </View>
            )}
            {car.transmission && (
              <View style={styles.detailItem}>
                <Ionicons name="hardware-chip-outline" size={16} color="#00b8a9" />
                <Text style={styles.detailText}>{car.transmission}</Text>
              </View>
            )}
          </View>
        )}
        
        <View style={styles.priceRow}>
          <Text style={styles.price}>${car.price}<Text style={styles.perDay}>/day</Text></Text>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  carCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  carImage: {
    width: '100%',
    height: 160,
  },
  carInfo: {
    padding: 15,
  },
  carHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#ffffff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  carCategory: {
    color: '#a0a0a0',
    marginBottom: 10,
  },
  carDetails: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  detailText: {
    color: '#a0a0a0',
    marginLeft: 5,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00b8a9',
  },
  perDay: {
    fontSize: 14,
    color: '#a0a0a0',
    fontWeight: 'normal',
  },
  bookButton: {
    backgroundColor: '#00b8a9',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  bookButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default CarCard; 