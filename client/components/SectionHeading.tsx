import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { color } from "../constants/Colors";

interface Props {
  title: string;
  viewAllButton?: boolean;
  // onPress: () => void;
}

const SectionHeading: React.FC<Props> = ({ title, viewAllButton = false, /*onPress*/ }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {viewAllButton && (
        // <TouchableOpacity onPress={onPress}>
          <Text style={styles.button}>View All</Text>
        // </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 15,
    color: color.americanBlue,
    fontFamily: "NotoSansBold", 
  },
  button: {
    fontSize: 11,
    color: '#rgba(69, 60, 103, 0.60)',
  },
});

export default SectionHeading;
