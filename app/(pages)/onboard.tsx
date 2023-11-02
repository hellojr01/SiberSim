import Icon from "@expo/vector-icons/AntDesign";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/images/wc1.svg";
import { color } from "../../constants/Colors";

const WelcomeScreen = () => {
    return (
        <View style={styles.base}>
            <Text style={[styles.header, styles.common]}>Welcome To</Text>
            <Text style={[styles.header, styles.common]}>SiberSim</Text>
            <Logo style={[styles.customSvg, styles.common]} />
            <Text style={styles.subheader}>
                Your One Stop Solution To Protect Your Precious from Online
                Fraud
            </Text>
            <Icon.Button
                color={color.white}
                backgroundColor="transparent"
                style={styles.buttonOne}
                iconStyle={styles.rightIcon}
                borderRadius={20}
                name="arrowright"
                onPress={undefined}
            >
                <Text style={[styles.buttonText, { color: color.white }]}>
                    Get Started{" "}
                </Text>
            </Icon.Button>
            <Icon.Button
                color={color.americanBlue}
                backgroundColor="transparent"
                style={styles.buttonTwo}
                iconStyle={styles.rightIcon}
                borderRadius={20}
                name="arrowright"
                onPress={undefined}
            >
                <Text
                    style={[styles.buttonText, { color: color.americanBlue }]}
                >
                    Login
                </Text>
            </Icon.Button>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    base: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: color.lavender,
        paddingHorizontal: 10,
        paddingTop: "5%",
    },
    common: {
        alignSelf: "center",
    },
    customSvg: {
        minHeight: "40%",
        maxHeight: "45%",
        height: "40%",
        marginVertical: 20,
    },
    headerTop: {
        paddingTop: 30,
    },
    header: {
        fontFamily: "NotoSansBold",
        fontSize: 40,
        color: color.americanBlue,
        textAlign: "center",
        marginTop: -5,
    },
    subheader: {
        fontFamily: "NotoSans",
        fontSize: 20,
        color: color.americanBlue,
        textAlign: "center",
        paddingHorizontal: 50,
        marginBottom: 20,
    },
    rightIcon: {
        right: 5,
        position: "absolute",
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
        width: "80%",
        minWidth: "60%",
        maxWidth: "80%",
    },
    buttonTwo: {
        color: color.americanBlue,
        backgroundColor: color.white,
        borderWidth: 3,
        borderColor: color.americanBlue,
        justifyContent: "center",
        alignSelf: "center",
        paddingHorizontal: 50,
        marginVertical: 10,
        marginHorizontal: 20,
        width: "80%",
        minWidth: "60%",
        maxWidth: "80%",
    },
    buttonText: {
        fontFamily: "NotoSansSemiBold",
        fontSize: 16,
    },
});
