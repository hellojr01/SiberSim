import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { color } from "../constants/Colors";
import { Link } from "expo-router";
interface Props {
  title: string;
  viewAllButton?: boolean;
  path: string;
  narrowPadding?: boolean;
}

const SectionHeading: React.FC<Props> = ({ title, narrowPadding=false, viewAllButton = false, path }) => {
  return (
    <View style={narrowPadding ? styles.narrowContainer : styles.container}>
      <Text style={styles.title}>{title}</Text>
      {viewAllButton && (
        <Link href={path as any}>
          <Text style={styles.button}>View All</Text>
        </Link>
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
  narrowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
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
