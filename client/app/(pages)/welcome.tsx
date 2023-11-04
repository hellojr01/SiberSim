import Icon from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/images/wc1.svg";
import { color } from "../../constants/Colors";

const WelcomeScreen = () => {
    const router = useRouter();
    const windowWidth = Dimensions.get("window").width;

    return (
        <View style={styles.base}>
            {/* <StatusBar translucent={false} /> */}
            <View style={styles.top}>
                <Text style={{ ...styles.header, ...styles.common }}>
                    Welcome To
                </Text>
                <Text style={{ ...styles.header, ...styles.common }}>
                    SiberSim
                </Text>
            </View>
            <View style={styles.middle}>
                <Logo style={{ ...styles.customSvg, ...styles.common }} />
                <Text style={styles.subheader}>
                    Your One Stop Solution To Protect Your Precious from Online
                    Fraud
                </Text>
            </View>
            <View style={styles.bottom}>
                <Icon.Button
                    color={color.white}
                    backgroundColor="transparent"
                    underlayColor="tranparent"
                    activeOpacity={0.75}
                    style={{ ...styles.buttonOne, ...styles.baseButton }}
                    iconStyle={styles.rightIcon}
                    borderRadius={20}
                    name="arrowright"
                    onPress={() => router.push("/onboard/1")}
                >
                    <Text
                        style={{
                            color: color.white,
                            width: windowWidth > 640 ? 300 : "100%",
                            ...styles.buttonText,
                        }}
                    >
                        Get Started
                    </Text>
                </Icon.Button>
                <Icon.Button
                    color={color.americanBlue}
                    backgroundColor="transparent"
                    underlayColor="tranparent"
                    activeOpacity={0.75}
                    style={{ ...styles.buttonTwo, ...styles.baseButton }}
                    iconStyle={styles.rightIcon}
                    borderRadius={20}
                    name="arrowright"
                    onPress={() => router.push("/login")}
                >
                    <Text
                        style={{
                            color: color.americanBlue,
                            width: windowWidth > 640 ? 300 : "100%",
                            ...styles.buttonText,
                        }}
                    >
                        Login
                    </Text>
                </Icon.Button>
            </View>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    base: {
        flex: 1,
        alignContent: "center",
        justifyContent: "space-between",
        backgroundColor: color.lavender,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    top: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    middle: {
        flex: 2,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
    },
    bottom: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    common: {
        alignSelf: "center",
    },
    customSvg: {
        minHeight: "40%",
        maxHeight: "65%",
        marginVertical: 10,
        flex: 3,
        flexBasis: 300,
        flexGrow: 1,
        flexShrink: 0,
    },
    header: {
        fontFamily: "NotoSansBold",
        fontSize: 36,
        color: color.americanBlue,
        textAlign: "center",
        marginTop: -5,
    },
    subheader: {
        fontFamily: "NotoSans",
        fontSize: 18,
        color: color.americanBlue,
        textAlign: "center",
        paddingHorizontal: 50,
        marginTop: 20,
        flex: 1,
        flexBasis: 100,
        flexGrow: 1,
        flexShrink: 0,
    },
    rightIcon: {
        right: 5,
        position: "absolute",
    },
    baseButton: {
        justifyContent: "center",
        alignSelf: "center",
        marginVertical: 10,
        maxWidth: "80%",
    },
    buttonOne: {
        color: color.white,
        backgroundColor: color.americanBlue,
        borderWidth: 3,
        borderColor: color.americanBlue,
    },
    buttonTwo: {
        color: color.americanBlue,
        backgroundColor: color.white,
        borderWidth: 3,
        borderColor: color.americanBlue,
    },
    buttonText: {
        fontFamily: "NotoSansSemiBold",
        fontSize: 16,
        textAlign: "center",
    },
});
