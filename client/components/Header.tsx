import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

type HeaderProps = {
    title: string;
};

const Header = ({ title }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <Ionicons name="ios-menu" size={32} style={styles.menuIcon} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: 50,
        paddingTop: 20,
        paddingLeft: 10,
    },
    menuIcon: {
        color: color.americanBlue,
    },
    title: {
        color: color.americanBlue,
        fontFamily: "NotoSansBold",
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 10,
    },
});

export default Header;
