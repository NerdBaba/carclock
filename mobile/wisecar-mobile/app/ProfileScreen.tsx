import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface MenuItem {
  icon: string;
  title: string;
  subtitle: string;
}

const ProfileScreen = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    image: require('../assets/placeholder-avatar.png'),
    memberSince: 'March 2023',
  };

  // Menu sections
  const accountItems: MenuItem[] = [
    { icon: 'person-outline', title: 'Personal Information', subtitle: 'View and edit your details' },
    { icon: 'card-outline', title: 'Payment Methods', subtitle: 'Manage your payment options' },
    { icon: 'document-text-outline', title: 'Documents', subtitle: 'IDs and driving licenses' },
  ];

  const activityItems: MenuItem[] = [
    { icon: 'time-outline', title: 'Booking History', subtitle: 'View your past rentals' },
    { icon: 'calendar-outline', title: 'Upcoming Bookings', subtitle: 'Check your planned rentals' },
    { icon: 'heart-outline', title: 'Saved Cars', subtitle: 'Your favorite vehicles' },
  ];

  const supportItems: MenuItem[] = [
    { icon: 'help-circle-outline', title: 'Help Center', subtitle: 'FAQ and support resources' },
    { icon: 'chatbubble-outline', title: 'Contact Support', subtitle: 'Get in touch with our team' },
    { icon: 'settings-outline', title: 'Settings', subtitle: 'App preferences and options' },
  ];

  const renderMenuItem = ({ icon, title, subtitle }: MenuItem) => (
    <TouchableOpacity style={styles.menuItem} key={title}>
      <View style={styles.menuIcon}>
        <Ionicons name={icon as any} size={24} color="#00b8a9" />
      </View>
      <View style={styles.menuContent}>
        <Text style={styles.menuTitle}>{title}</Text>
        <Text style={styles.menuSubtitle}>{subtitle}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#a0a0a0" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <Image source={user.image} style={styles.profileImage} />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{user.name}</Text>
              <Text style={styles.profileEmail}>{user.email}</Text>
              <Text style={styles.memberSince}>Member since {user.memberSince}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          {accountItems.map(renderMenuItem)}
        </View>

        {/* Activity Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Activity</Text>
          {activityItems.map(renderMenuItem)}
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          {supportItems.map(renderMenuItem)}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={20} color="#ff7e67" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        {/* App Version */}
        <Text style={styles.version}>WiseCar Mobile v1.0.0</Text>
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
    backgroundColor: '#1a1a1a',
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 2,
  },
  profileEmail: {
    fontSize: 14,
    color: '#a0a0a0',
    marginBottom: 5,
  },
  memberSince: {
    fontSize: 12,
    color: '#00b8a9',
  },
  editButton: {
    backgroundColor: '#00b8a9',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  menuIcon: {
    width: 40,
    alignItems: 'center',
  },
  menuContent: {
    flex: 1,
    marginLeft: 10,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 3,
  },
  menuSubtitle: {
    fontSize: 13,
    color: '#a0a0a0',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    margin: 20,
    padding: 15,
  },
  logoutText: {
    color: '#ff7e67',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  version: {
    textAlign: 'center',
    color: '#a0a0a0',
    fontSize: 12,
    marginBottom: 20,
  },
});

export default ProfileScreen; 