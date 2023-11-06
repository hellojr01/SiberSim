import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { color } from '../../constants/Colors';
import Icon from "@expo/vector-icons/AntDesign";
import Header from '../../components/Header';
import Advertisement from '../../components/Advertisement';
import SectionHeading from '../../components/SectionHeading';
import Carousel from '../../components/HorizontalCarousel';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <Advertisement />
      <SectionHeading title="Simulation Available" viewAllButton={true}/>
      <Carousel carouselDesign='simulation' />
      <SectionHeading title="Trending Cyberblogs" viewAllButton={true}/>
      <Carousel carouselDesign='cyberblog' />
      <SectionHeading title="Trending Reported Scammers" viewAllButton={true}/>
      <Carousel carouselDesign='scammer' />
    </SafeAreaView>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.lavender,
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'NotoSansBold',
    color: color.americanBlue,
    marginLeft: 10,
    marginBottom: 16,
  },
  header: {
    color: '#666',
  },
});
