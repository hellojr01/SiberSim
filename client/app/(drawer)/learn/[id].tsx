import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { simulations } from '@constants/simulationData';
import { router } from "expo-router";
import { color } from "@constants/Colors";

type Props = {
  redirect?: boolean;
};

const Learn = (redirect : Props) => {
  const { id } = useLocalSearchParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  let value: number | undefined = Number(id);

  if (!id || !Number.isInteger(value)) {
    return <Redirect href="/learn" />;
  }

  const learningDetails = simulations.find((simulations) => simulations.id === value);

  const handleIndexChanged = (index: number) => {
    setCurrentIndex(index);
  };

  const handleAnswerSelected = (selectedAnswerIndex: number) => {
    const correctAnswerIndex = learningDetails?.correctAnswer || 0;
    const isCorrect = selectedAnswerIndex === correctAnswerIndex;

    setIsAnswerCorrect(isCorrect);
    setModalVisible(true);
  };

  let swiperContent: (JSX.Element | string)[] = [];

  if (learningDetails) {
    swiperContent = learningDetails.content.map((image, index) => (
      <View key={index} style={styles.slide}>
        <Image source={image} style={styles.image} />
      </View>
    ));

    swiperContent.push(
      <View key="additionalContent" style={styles.slide}>
        <Text style={styles.question}>{learningDetails.question}</Text>
        {learningDetails.choices.map((choice, index) => (
          <TouchableOpacity key={index} onPress={() => handleAnswerSelected(index)}
          style={styles.choiceButton}>
            <Text  style={styles.choiceButtonText}>{choice}</Text>
          </TouchableOpacity>
        ))}
        
        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Knowledge Check Result</Text>
            {isAnswerCorrect ? (
              <Text style={[styles.statusText, styles.correctStatus]}>Completed</Text>
            ) : (
              <Text style={[styles.statusText, styles.incorrectStatus]}>Failed</Text>
            )}
            <Text style={styles.explanationText}>
              {isAnswerCorrect
                ? "Congratulations! You have successfully completed the knowledge check."
                : "Unfortunately, your answer is incorrect. Here's an explanation of why:"}
            </Text>
            <Text style={styles.explanationDetails}>
              {learningDetails.knowledgeCheck}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                router.push("/learn");
                redirect
                  ? setTimeout(() => router.replace("/learn"), 5)
                  : setTimeout(() => router.push("/learn"), 5);
              }}
              style={styles.returnButton}
            >
              <Text style={styles.returnButtonText}>Return to Main Page</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  } else {
    swiperContent = ["Unknown: Report Not Available!"];
  }

  return (
    <View style={styles.container}>
      <Swiper loop={false} onIndexChanged={handleIndexChanged} showsButtons={true}>
        {swiperContent}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.lavender,
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
  modalContainer: {
    backgroundColor: color.purple,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  question: {
    fontSize: 20,
    width:'80%',
    color: color.americanBlue,
    fontFamily: 'NotoSansBold',
    textAlign: 'center',
    marginVertical: 20,
  },
  choiceButton: {
    backgroundColor: color.purple,
    padding: 10,
    width: 200,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  choiceButtonText: {
    color: 'white',
    fontFamily: 'NotoSansBold'
  },
  modalTitle: {
    fontSize: 20,
    color: color.white,
    fontFamily: 'NotoSansBold',
    marginBottom: 10,
  },
  statusText: {
    fontSize: 40,
    fontFamily: 'NotoSansBold',
    marginBottom: 10,
  },
  correctStatus: {
    color: '#00FF57',
  },
  incorrectStatus: {
    color: 'red',
  },
  explanationText: {
    fontSize: 13,
    marginBottom: 10,
    color: color.white,
    fontFamily: 'NotoSansBold',
  },
  explanationDetails: {
    fontFamily: 'NotoSansBold',
    color: color.white,
    fontSize: 13,
    marginTop: 10,
  },
  returnButton: {
    backgroundColor: color.americanBlue,
    padding: 10,
    borderRadius: 10,
    marginVertical: 15,
    alignItems: 'center',
  },
  returnButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Learn;
