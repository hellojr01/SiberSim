import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { color } from "../constants/Colors";

interface ButtonFilterProps {
  activeFilter: string;
  filters: string[];
  onFilterChange: (filter: string) => void;
}

const ButtonFilter: React.FC<ButtonFilterProps> = ({ activeFilter, filters, onFilterChange }) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {filters.map((filter) => (
        <Button
          key={filter}
          mode="contained"
          style={[
            styles.button,
            activeFilter === filter && styles.activeButton,
          ]}
          onPress={() => onFilterChange(filter)}
          labelStyle={activeFilter === filter ? styles.activeButtonText : styles.buttonText}
        >
          {filter}
        </Button>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    alignSelf: 'flex-start'
  },
  button: {
    marginRight: 10,
    backgroundColor: color.white,
    height: 30,
    marginL: 0
  },
  buttonText: {
    color: color.americanBlue,
    fontFamily: "NotoSansMedium",
    fontSize: 12,
    marginVertical: 0,
    padding:5
  },
  activeButton: {
    backgroundColor: color.americanBlue, // Active background color
  },
  activeButtonText: {
    color: color.white,
    fontFamily: "NotoSansMedium",
    fontSize: 12,
    marginVertical: 0,
    padding:5
  },
});

export default ButtonFilter;
