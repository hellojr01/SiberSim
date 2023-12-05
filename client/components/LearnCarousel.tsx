import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { simulations } from "@constants/simulationData";
import { color } from "@constants/Colors";

type Props = {
  carouselDesign: "simulation";
  redirect?: boolean;
};

const LearnCarousel = ({ carouselDesign, redirect }: Props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {carouselDesign === 'simulation' &&
        simulations.map((simulation) => (
          <View key={simulation.id} style={styles.simulation}>
            {/* First Column: Image */}
            <Image source={simulation.image} style={styles.simImage} />

            {/* Second Column: Label, Description, and Difficulty */}
            <View style={styles.simDetails}>
              <Text style={styles.simLabel}>{simulation.type}</Text>
              <Text style={styles.simtitle}>{simulation.title}</Text>
              <Text style={styles.simDescription}>{simulation.desc}</Text>
              <Text style={styles.simDifficulty}>{simulation.diff}</Text>
            </View>

            {/* Third Column: Play Button */}
            <TouchableHighlight
              style={styles.playButton}
              onPress={() => {
                router.push("/learn");
                redirect
                  ? setTimeout(
                      () => router.replace(simulation.path as any),
                      5
                    )
                  : setTimeout(() => router.push(simulation.path as any), 5);
              }}
              underlayColor="transparent"
            >
              <Ionicons name="md-play" size={15} color="white" />
            </TouchableHighlight>
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  simulation: {
    flexDirection: 'row', // Display items in a row
    alignItems: 'center', // Center items vertically
    padding: 10,
    marginVertical: 5 // Add your background color
  },
  simImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  simDetails: {
    flex: 2,
    marginHorizontal: 15
  },
  simLabel: {
    color: color.white,
    backgroundColor: color.purple,
    borderRadius: 10,
    fontSize: 12,
    padding: 2,
    textAlign: "center",
    fontFamily: "NotoSansSemiBold",
    flex: 1,
  },
  simtitle: {
    fontSize: 14,
    fontFamily: "NotoSansBold",
    color: color.americanBlue,
    marginTop: 10,
  },
  simDescription: {
    fontSize: 12,
    marginBottom: 5,
    paddingVertical: 5,
    fontFamily: "NotoSansBold",
    color: color.purple,
  },
  simDifficulty: {
    fontSize: 12,
    color: 'rgba(69, 60, 103, 0.80)',
    fontFamily: "NotoSansBold",
  },
  playButton: {
    backgroundColor: color.purple,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default LearnCarousel;
