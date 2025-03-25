import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const HowItWorksScreen = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: 'Browse & Select',
      description: 'Browse through our extensive collection of premium vehicles and select the one that fits your needs and style.',
      icon: 'car-outline'
    },
    {
      id: 2,
      title: 'Book & Pay',
      description: 'Choose your rental dates, add any extras, and securely pay for your booking through our app.',
      icon: 'calendar-outline'
    },
    {
      id: 3,
      title: 'Verify ID',
      description: 'Upload your driving license and ID for verification. This process is quick and secure.',
      icon: 'id-card-outline'
    },
    {
      id: 4,
      title: 'Pickup Car',
      description: 'Collect your car from our designated location or opt for our convenient delivery service.',
      icon: 'key-outline'
    },
    {
      id: 5,
      title: 'Enjoy Your Ride',
      description: 'Hit the road and enjoy your premium driving experience with our well-maintained vehicles.',
      icon: 'navigate-outline'
    },
    {
      id: 6,
      title: 'Return Car',
      description: 'Return the car at the agreed location, or use our pickup service for maximum convenience.',
      icon: 'arrow-undo-outline'
    }
  ];

  const faqs = [
    {
      question: 'What documents do I need to rent a car?',
      answer: 'You will need a valid driving license, photo ID, and a credit card for the security deposit.'
    },
    {
      question: 'Is there a security deposit?',
      answer: 'Yes, we require a security deposit which is refunded upon return of the car in its original condition.'
    },
    {
      question: 'Can I extend my rental period?',
      answer: 'Yes, you can extend your rental through the app, subject to availability and prior notice.'
    },
    {
      question: 'What happens if I return the car late?',
      answer: 'Late returns incur additional charges calculated at the standard daily rate plus a late fee.'
    },
    {
      question: 'Is insurance included?',
      answer: 'Basic insurance is included, with options to upgrade for comprehensive coverage.'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>How It Works</Text>
          <Text style={styles.subtitle}>Renting with WiseCar is simple and convenient</Text>
        </View>

        {/* Process Steps */}
        <View style={styles.stepsContainer}>
          {steps.map((step) => (
            <View key={step.id} style={styles.stepCard}>
              <View style={styles.stepNumberContainer}>
                <Text style={styles.stepNumber}>{step.id}</Text>
              </View>
              <View style={styles.stepIcon}>
                <Ionicons name={step.icon as any} size={30} color="#00b8a9" />
              </View>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepDescription}>{step.description}</Text>
            </View>
          ))}
        </View>

        {/* Frequently Asked Questions */}
        <View style={styles.faqContainer}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          {faqs.map((faq, index) => (
            <View key={index} style={styles.faqItem}>
              <Text style={styles.faqQuestion}>{faq.question}</Text>
              <Text style={styles.faqAnswer}>{faq.answer}</Text>
            </View>
          ))}
        </View>

        {/* Additional Info */}
        <View style={styles.additionalInfo}>
          <Text style={styles.sectionTitle}>Still Have Questions?</Text>
          <Text style={styles.infoText}>
            Our customer support team is available 24/7 to assist you. Contact us through the app or call our support line.
          </Text>
          <View style={styles.contactInfo}>
            <View style={styles.contactItem}>
              <Ionicons name="call-outline" size={20} color="#00b8a9" />
              <Text style={styles.contactText}>+1 (555) 123-4567</Text>
            </View>
            <View style={styles.contactItem}>
              <Ionicons name="mail-outline" size={20} color="#00b8a9" />
              <Text style={styles.contactText}>support@wisecar.com</Text>
            </View>
          </View>
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
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#a0a0a0',
    marginBottom: 20,
  },
  stepsContainer: {
    paddingHorizontal: 20,
  },
  stepCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
    position: 'relative',
  },
  stepNumberContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 184, 169, 0.2)',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumber: {
    color: '#00b8a9',
    fontWeight: 'bold',
    fontSize: 14,
  },
  stepIcon: {
    marginBottom: 15,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 14,
    color: '#a0a0a0',
    lineHeight: 20,
  },
  faqContainer: {
    padding: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  faqItem: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#a0a0a0',
    lineHeight: 20,
  },
  additionalInfo: {
    padding: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  infoText: {
    fontSize: 14,
    color: '#a0a0a0',
    lineHeight: 20,
    marginBottom: 20,
  },
  contactInfo: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    color: '#ffffff',
    marginLeft: 10,
    fontSize: 14,
  },
});

export default HowItWorksScreen; 