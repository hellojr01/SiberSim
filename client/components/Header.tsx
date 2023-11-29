import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { color } from "@constants/Colors";

type HeaderProps = {
    IconLeft?: any;
    IconRight?: any;
    title: string;
};

const Header = ({ IconLeft, title, IconRight }: HeaderProps) => {
    return (
        <View style={styles.header}>
            {IconLeft}
            {/* <Ionicons name="ios-menu" size={32} style={styles.menuIcon} /> */}
            <Text style={styles.title}>{title}</Text>
            {IconRight}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: color.americanBlue,
        height: 90,
        width: "100%",
        // position: "absolute",
        // opacity: 0.8,
        // top: 0,
        // zIndex: 2,
        //height: 120,
        paddingHorizontal: 20,
        // paddingTop: 20,
    },
    menuIcon: {
        color: color.white,
    },
    title: {
        color: color.white,
        fontFamily: "NotoSansSemiBold",
        fontSize: 22,
        marginHorizontal: 10,
        maxWidth: "70%",
    },
});

export default Header;
