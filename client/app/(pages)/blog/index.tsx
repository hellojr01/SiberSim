import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { color } from '../../../constants/Colors';
import Icon from "@expo/vector-icons/AntDesign";
import Header from '../../../components/Header';
import Advertisement from '../../../components/Advertisement';
import SectionHeading from '../../../components/SectionHeading';
import Carousel from '../../../components/HorizontalCarousel';

const Blog = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cyberblog" />

    </SafeAreaView>
  );
}
export default Blog;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.lavender,
  }
});
