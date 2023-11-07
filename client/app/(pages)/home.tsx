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
      <View style={styles.sectionContainer}>
        <SectionHeading title="Simulation Available" viewAllButton={true}/>
        <Carousel carouselDesign='simulation' />
      </View>
      <View style={styles.sectionContainer}>
        <SectionHeading title="Trending Cyberblogs" viewAllButton={true}/>
        <Carousel carouselDesign='cyberblog' />
      </View>
      <View style={styles.sectionContainer}>
        <SectionHeading title="Trending Reported Scammers" viewAllButton={true}/>
        <Carousel carouselDesign='scammer' />
      </View>
    </SafeAreaView>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.lavender,
  },
  sectionContainer: {
    marginVertical: 10
  },
});
