import React from "react";
import { Dimensions, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useRouter, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Icon from "@expo/vector-icons/AntDesign";
import Logo from "../../assets/images/wc1.svg";
import { color } from "../../constants/Colors";

const WelcomeScreen = () => {
    const router = useRouter();
    const windowWidth = Dimensions.get("window").width;

    return (
        <SafeAreaView style={styles.base}>
            <Stack.Screen
                options={{
                    title: "Welcome Page",
                    presentation: "modal",
                    headerShown: false,
                }}
            />
            <StatusBar translucent={false} />
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
                            width: windowWidth > 480 ? 300 : windowWidth * 0.7,
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
                            width: windowWidth > 480 ? 300 : windowWidth * 0.7,
                            ...styles.buttonText,
                        }}
                    >
                        Login
                    </Text>
                </Icon.Button>
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
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
        flex: 3,
        flexGrow: 3,
        flexShrink: 1,
        minHeight: "40%",
        maxHeight: "65%",
        marginVertical: 10,
    },
    header: {
        fontFamily: "NotoSansBold",
        fontSize: 36,
        textAlign: "center",
        color: color.americanBlue,
        marginTop: -5,
    },
    subheader: {
        flex: 1,
        flexGrow: 1,
        flexShrink: 1,
        fontFamily: "NotoSans",
        fontSize: 18,
        textAlign: "center",
        color: color.americanBlue,
        paddingHorizontal: 40,
        marginTop: 20,
    },
    rightIcon: {
        right: 5,
        position: "absolute",
    },
    baseButton: {
        justifyContent: "center",
        alignSelf: "center",
        marginVertical: 10,
    },
    buttonOne: {
        color: color.white,
        backgroundColor: color.americanBlue,
        borderColor: color.americanBlue,
        borderWidth: 3,
    },
    buttonTwo: {
        color: color.americanBlue,
        backgroundColor: color.white,
        borderColor: color.americanBlue,
        borderWidth: 3,
    },
    buttonText: {
        fontFamily: "NotoSansSemiBold",
        fontSize: 16,
        textAlign: "center",
    },
});
