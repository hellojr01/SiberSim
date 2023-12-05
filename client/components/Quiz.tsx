import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type QuizProps = {
  question: string;
  choices: string[];
  correctAnswerIndex: number;
  onAnswerSelected: (selectedAnswerIndex: number) => void;
};

const Quiz: React.FC<QuizProps> = ({
  question,
  choices,
  correctAnswerIndex,
  onAnswerSelected,
}) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);

  const handleAnswerSelection = (index: number) => {
    setSelectedAnswerIndex(index);
    onAnswerSelected(index); // Pass the correct type here
  };


  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.choicesContainer}>
        {choices.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.choiceButton,
              index === selectedAnswerIndex ? styles.selectedChoice : null,
            ]}
            onPress={() => handleAnswerSelection(index)}
            disabled={selectedAnswerIndex !== null}
          >
            <Text style={styles.choiceText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  choicesContainer: {
    flexDirection: 'column',
  },
  choiceButton: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  selectedChoice: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  choiceText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Quiz;
