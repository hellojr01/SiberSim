import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { color } from '../../../constants/Colors';
import Icon from "@expo/vector-icons/AntDesign";
import Header from '../../../components/Header';
import Advertisement from '../../../components/Advertisement';
import SectionHeading from '../../../components/SectionHeading';
import Carousel from '../../../components/HorizontalCarousel';
import SearchComponent from '../../../components/SearchComponent';

const Blog = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cyberblog" />
      <SearchComponent />
      <View style={styles.sectionContainer}>
        <SectionHeading title="Trending Now" viewAllButton={false}/>
        <Carousel carouselDesign='cyberblog' />
      </View>
    </SafeAreaView>
  );
}
export default Blog;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.lavender,
  },
  sectionContainer: {
    marginVertical: 10
  },
});
