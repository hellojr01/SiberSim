import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { color } from "@constants/Colors";

interface Props {
    title: string;
    viewAllButton?: boolean;
    onPress?: () => void;
}

const SectionHeading: React.FC<Props> = ({
    title,
    viewAllButton = false,
    onPress = () => undefined,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {viewAllButton && (
                <TouchableOpacity onPress={onPress}>
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
                </TouchableOpacity>
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
