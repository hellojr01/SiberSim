import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { simulations } from '@constants/simulationData';
import Quiz from '@components/Quiz';
import { color } from "@constants/Colors";

const Learn = () => {
  const { id } = useLocalSearchParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  let value: number | undefined = Number(id);

  if (!id || !Number.isInteger(value)) {
    return <Redirect href="/learn" />;
  }

  const learningDetails = simulations.find((simulations) => simulations.id === value);

  const handleIndexChanged = (index: number) => {
    setCurrentIndex(index);
  };

  const handleAnswerSelected = (selectedAnswerIndex: number) => {
    // Handle the answer selection logic here
    console.log(`Selected answer index: ${selectedAnswerIndex}`);
  };

  const quizData = learningDetails?.content[currentIndex];

  return (
    <View style={styles.container}>
      <Swiper loop={false} onIndexChanged={handleIndexChanged} showsButtons={true} showsPagination={true}>
        {learningDetails
          ? learningDetails.content.map((image, index) => (
              <View key={index} style={styles.slide}>
                <Image source={image} style={styles.image} />
              </View>
            ))
          : "Unknown: Report Not Available!"}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lavender
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Learn;
