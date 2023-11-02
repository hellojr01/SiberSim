import Icon from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo1 from "../../assets/images/wc2.svg";
import { color } from "../../constants/Colors";

const OnboardScreen = () => {
    return (
        <View style={styles.base}>
            <Text style={[styles.header, styles.common]}>
                Stay One Step Ahead With SiberSim
            </Text>
            <Logo1
                width="80%"
                height="80%"
                style={[styles.customSvg, styles.common]}
            />
            <Text style={styles.subheader}>
                Learn to spot scams and protect your hard-earned money. Your
                digital safety matters!
            </Text>
            <Icon
                name="arrowright"
                style={{
                    borderRadius: 20,
                    borderWidth: 3,
                    borderColor: color.americanBlue,
                    justifyContent: "center",
                    alignSelf: "center",
                    width: 100,
                    lineHeight: 100,
                    aspectRatio: 1,
                    backgroundColor: color.americanBlue,
                    textAlign: "center",
                    fontSize: 44,
                    color: color.white,
                }}
            />

            {/* <Icon.Button
                color={color.gray}
                backgroundColor="transparent"
                style={styles.buttonOne}
                iconStyle={styles.icon}
                borderRadius={20}
                name="arrowright"
                onPress={undefined}
            >
            </Icon.Button> */}
            <Link href="/(pages)/onboard" style={{ alignSelf: "center" }}>
                <Text style={styles.skipText}>Skip Intro</Text>
            </Link>
        </View>
    );
};

export default OnboardScreen;

const styles = StyleSheet.create({
    base: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: color.lavender,
        paddingHorizontal: 10,
        paddingVertical: "5%",
    },
    common: {
        alignSelf: "center",
    },
    customSvg: {
        minHeight: "35%",
        maxHeight: "40%",
        marginVertical: 15,
    },
    header: {
        fontFamily: "NotoSansBold",
        fontSize: 30,
        color: color.americanBlue,
        textAlign: "center",
    },
    subheader: {
        fontFamily: "NotoSans",
        fontSize: 16,
        color: color.americanBlue,
        textAlign: "center",
        paddingHorizontal: 50,
        marginBottom: 20,
    },
    icon: {
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 30,
        color: color.white,
    },
    buttonOne: {
        color: color.white,
        backgroundColor: color.americanBlue,
        borderWidth: 3,
        borderColor: color.americanBlue,
        justifyContent: "center",
        alignSelf: "center",
        paddingHorizontal: 50,
        marginVertical: 10,
        marginHorizontal: 20,
        width: 50,
        aspectRatio: "1/2",
    },
    skipText: {
        justifyContent: "center",
        alignSelf: "center",
        fontFamily: "NotoSansSemiBold",
        fontSize: 14,
    },
});
