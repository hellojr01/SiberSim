import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Redirect, useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Icon from "@expo/vector-icons/AntDesign";

import Logo1 from "../../../assets/images/wc2.svg";
import Logo2 from "../../../assets/images/wc3.svg";
import Logo3 from "../../../assets/images/wc4.svg";
import Logo404 from "../../../assets/images/missing404.svg";
import { instances } from "../../../constants/onboardData";
import { color } from "../../../constants/Colors";

const OnboardScreen = () => {
    const router = useRouter();
    const [pressB1, setPressB1] = useState(false);
    const [pressB2, setPressB2] = useState(false);

    const togglePress = (button: String) => {
        if (button === "B1") setPressB1(!pressB1);
        else if (button === "B2") setPressB2(!pressB2);
    };

    const { onboardId } = useLocalSearchParams();
    let value = 404;
    if (onboardId !== undefined)
        if (!Array.isArray(onboardId))
            if (!Boolean((value = Number(onboardId))))
                return <Redirect href="/onboard" />;

    let Logo = Logo404;
    switch (value) {
        case 1:
            Logo = Logo1;
            break;
        case 2:
            Logo = Logo2;
            break;
        case 3:
            Logo = Logo3;
            break;
    }

    const onboardPage = instances.find((instance) => instance.id == value);

    return (
        <SafeAreaView style={styles.base}>
            <StatusBar translucent={false} />
            <View style={styles.top}>
                <Text style={{ ...styles.header, ...styles.common }}>
                    {onboardPage
                        ? onboardPage.header
                        : "Unknown: Title Not Found!"}
                </Text>
            </View>
            <View style={styles.middle}>
                <Logo
                    width="100%"
                    style={{ ...styles.customSvg, ...styles.common }}
                />
                <Text style={styles.subheader}>
                    {onboardPage
                        ? onboardPage.subheader
                        : "Unknown: Description Not Found!"}
                </Text>
            </View>
            <View style={styles.bottom}>
                <Pressable
                    onPressIn={() => togglePress("B1")}
                    onPressOut={() => togglePress("B1")}
                    onPress={() => {
                        if (value >= 1 && value < instances.length)
                            router.replace(`/onboard/${value + 1}`);
                        else router.replace("/register");
                    }}
                >
                    <Icon
                        name="arrowright"
                        style={{
                            opacity: pressB1 ? 0.75 : 1,
                            ...styles.iconButton,
                        }}
                    />
                </Pressable>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 20,
                        marginBottom: 10,
                        ...styles.common,
                    }}
                >
                    <Text
                        style={{
                            backgroundColor:
                                value >= 1 ? color.americanBlue : color.white,
                            ...styles.emptyBorder,
                        }}
                    >
                        {" "}
                    </Text>
                    <Text
                        style={{
                            backgroundColor:
                                value >= 2 ? color.americanBlue : color.white,
                            ...styles.emptyBorder,
                        }}
                    >
                        {" "}
                    </Text>
                    <Text
                        style={{
                            backgroundColor:
                                value >= 3 ? color.americanBlue : color.white,
                            ...styles.emptyBorder,
                        }}
                    >
                        {" "}
                    </Text>
                </View>
                <Pressable
                    onPressIn={() => togglePress("B2")}
                    onPressOut={() => togglePress("B2")}
                    onPress={() => router.replace("/register")}
                    disabled={
                        value >= 1 && value < instances.length ? false : true
                    }
                >
                    <Text
                        style={{
                            backgroundColor: pressB2 ? color.black : undefined,
                            color: pressB2 ? color.white : undefined,
                            opacity: pressB2 ? 0.75 : 1,
                            ...styles.skipText,
                        }}
                    >
                        {value >= 1 && value < instances.length
                            ? "Skip Intro"
                            : " "}
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default OnboardScreen;

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: "space-between",
        aligntems: "center",
        backgroundColor: color.lavender,
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    top: {
        flex: 1,
        justifyContent: "center",
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
        justifyContent: "center",
        alignItems: "center",
    },
    common: {
        alignSelf: "center",
    },
    customSvg: {
        flexShrink: 1,
        minHeight: "35%",
        maxHeight: "60%",
        marginVertical: 10,
    },
    header: {
        fontFamily: "NotoSansBold",
        fontSize: 30,
        textAlign: "center",
        color: color.americanBlue,
        paddingHorizontal: 15,
    },
    subheader: {
        flexShrink: 1,
        fontFamily: "NotoSans",
        fontSize: 16,
        textAlign: "center",
        color: color.americanBlue,
        paddingHorizontal: 25,
        marginVertical: 15,
    },
    iconButton: {
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: color.americanBlue,
        borderColor: color.americanBlue,
        borderRadius: 20,
        borderWidth: 3,
        fontSize: 40,
        textAlign: "center",
        color: color.white,
        width: 100,
        aspectRatio: 1,
        lineHeight: 100,
    },
    emptyBorder: {
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: color.americanBlue,
        fontSize: 4,
        marginHorizontal: 5,
        width: 60,
    },
    skipText: {
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 20,
        fontFamily: "NotoSansSemiBold",
        fontSize: 14,
        textAlign: "center",
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
});
