import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Mock data for car listings
const CARS = [
  {
    id: '1',
    name: 'Tesla Model S',
    category: 'Electric',
    price: 150,
    image: require('../assets/placeholder-car.png'),
    rating: 4.9,
    seats: 5,
    transmission: 'Auto',
  },
  {
    id: '2',
    name: 'BMW X5',
    category: 'SUV',
    price: 120,
    image: require('../assets/placeholder-car.png'),
    rating: 4.7,
    seats: 7,
    transmission: 'Auto',
  },
  {
    id: '3',
    name: 'Mercedes C-Class',
    category: 'Sedan',
    price: 100,
    image: require('../assets/placeholder-car.png'),
    rating: 4.8,
    seats: 5,
    transmission: 'Auto',
  },
  {
    id: '4',
    name: 'Porsche 911',
    category: 'Sports',
    price: 200,
    image: require('../assets/placeholder-car.png'),
    rating: 5.0,
    seats: 2,
    transmission: 'Manual',
  },
  {
    id: '5',
    name: 'Range Rover Sport',
    category: 'SUV',
    price: 180,
    image: require('../assets/placeholder-car.png'),
    rating: 4.8,
    seats: 5,
    transmission: 'Auto',
  },
];

// Filter options
const CATEGORIES = ['All', 'Electric', 'SUV', 'Sedan', 'Sports', 'Luxury'];

interface CarItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: any;
  rating: number;
  seats: number;
  transmission: string;
}

const CarsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter cars based on search and category
  const filteredCars = CARS.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderCarItem = ({ item }: { item: CarItem }) => (
    <TouchableOpacity style={styles.carCard}>
      <Image source={item.image} style={styles.carImage} resizeMode="cover" />
      <View style={styles.carInfo}>
        <View style={styles.carHeader}>
          <Text style={styles.carName}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
        <Text style={styles.carCategory}>{item.category}</Text>
        <View style={styles.carDetails}>
          <View style={styles.detailItem}>
            <Ionicons name="people-outline" size={16} color="#00b8a9" />
            <Text style={styles.detailText}>{item.seats} seats</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="hardware-chip-outline" size={16} color="#00b8a9" />
            <Text style={styles.detailText}>{item.transmission}</Text>
          </View>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.price}>${item.price}<Text style={styles.perDay}>/day</Text></Text>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Available Cars</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#a0a0a0" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search cars..."
            placeholderTextColor="#a0a0a0"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === item && styles.selectedCategoryButton
              ]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item && styles.selectedCategoryText
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      <FlatList
        data={filteredCars}
        renderItem={renderCarItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.carsList}
      />
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
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
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
  categoriesContainer: {
    marginBottom: 10,
  },
  categoriesList: {
    paddingHorizontal: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#1a1a1a',
  },
  selectedCategoryButton: {
    backgroundColor: '#00b8a9',
  },
  categoryText: {
    color: '#a0a0a0',
    fontWeight: '500',
  },
  selectedCategoryText: {
    color: '#ffffff',
  },
  carsList: {
    padding: 20,
  },
  carCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  carImage: {
    width: '100%',
    height: 180,
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

export default CarsScreen; 