import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { color } from "../constants/Colors";
import { Link, Route, router } from "expo-router";
interface Props {
  title: string;
  viewAllButton?: boolean;
  path: string;
  narrowPadding?: boolean;
  onPress?: () => void;
}

const SectionHeading: React.FC<Props> = ({
    title, 
    path,
    viewAllButton = false,
    onPress = () => undefined,
    narrowPadding = false,
}) => {
    return (
        <View style={narrowPadding ? styles.narrowContainer : styles.container}>
            <Text style={styles.title}>{title}</Text>
            {viewAllButton && (
                <Link href={path as any}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.textButton}>View All</Text>
                        <View>
                            <FontAwesome5
                                name="angle-right"
                                size={16}
                                color={color.mediumSlateBlue}
                            />
                        </View>
                    </View>
                </Link>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
        fontFamily: "NotoSansBold",
        fontSize: 16,
        color: color.americanBlue,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        fontFamily: "NotoSansBold",
        fontSize: 14,
        color: color.mediumSlateBlue,
        marginRight: 5,
    },
});

export default SectionHeading;
