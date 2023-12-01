import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../../src/constants/Colors';

const DateRangeComponent = () => {
  const dateRanges = ["Last 7 Days", "Last 30 Days", "Last 90 Days", "All Time"];
  const [currentIndex, setCurrentIndex] = useState(3);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dateRanges.length) % dateRanges.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dateRanges.length);
  };

  return (
    <>
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePrevClick} style={styles.button}>
      <MaterialCommunityIcons name="arrow-left-circle" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.dateText}>{dateRanges[currentIndex]}</Text>
      
      <TouchableOpacity onPress={handleNextClick} style={styles.button}>
      <MaterialCommunityIcons name="arrow-right-circle" size={24} color="black" />
      </TouchableOpacity>      
    </View>
    <View style={styles.dotsContainer}>
        {dateRanges.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentIndex ? styles.activeDot : null]}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 36,
    borderTopWidth: 1,
    borderColor: GlobalStyles.colors.primary800,
    paddingTop: 16,
    marginHorizontal: 24,
  },
  button: {
    padding: 8,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,  
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'blue', // You can customize the color for the active dot
  },
  dateText: {
    fontSize: 18,
  },
});

export default DateRangeComponent;