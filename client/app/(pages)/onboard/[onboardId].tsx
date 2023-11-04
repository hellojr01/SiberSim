import Icon from "@expo/vector-icons/AntDesign";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Logo1 from "../../../assets/images/wc2.svg";
import Logo2 from "../../../assets/images/wc3.svg";
import Logo3 from "../../../assets/images/wc4.svg";
import Logo404 from "../../../assets/images/missing404.svg";
import { color } from "../../../constants/Colors";
import { instances } from "../../../constants/onboardData";

const OnboardScreen = () => {
    const router = useRouter();
    const [pressB1, setPressB1] = useState(false);
    const [pressB2, setPressB2] = useState(false);

    const { onboardId } = useLocalSearchParams();
    let value = 1;
    if (onboardId !== undefined)
        if (Array.isArray(onboardId)) {
            value = parseInt(onboardId.join());
        } else {
            value = parseInt(onboardId);
        }

    // if (value < 1 || value > instances.length);
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
        <View style={styles.base}>
            <StatusBar translucent={false} />
            <View style={styles.top}>
                <Text style={[styles.header, styles.common]}>
                    {onboardPage ? onboardPage.header : "Title Not Found!"}
                </Text>
            </View>
            <View style={styles.middle}>
                <Logo width="100%" style={[styles.customSvg, styles.common]} />
                <Text style={styles.subheader}>
                    {onboardPage
                        ? onboardPage.subheader
                        : "Description Not Found!"}
                </Text>
            </View>
            <View style={styles.bottom}>
                <Pressable
                    onPressIn={() => {
                        setPressB1(!pressB1);
                    }}
                    onPressOut={() => {
                        setPressB1(!pressB1);
                    }}
                    onPress={() => {
                        if (value >= 1 && value < instances.length)
                            router.replace(`/onboard/${value + 1}`);
                        else router.replace("/register");
                    }}
                >
                    <Icon
                        name="arrowright"
                        style={[
                            styles.icon,
                            {
                                opacity: pressB1 ? 0.75 : 1,
                            },
                        ]}
                    />
                </Pressable>
                <View
                    style={[
                        styles.common,
                        {
                            flexDirection: "row",
                            marginTop: 20,
                            marginBottom: 10,
                        },
                    ]}
                >
                    <Text
                        style={[
                            styles.emptyBorder,
                            {
                                backgroundColor:
                                    value >= 1
                                        ? color.americanBlue
                                        : color.white,
                            },
                        ]}
                    ></Text>
                    <Text
                        style={[
                            styles.emptyBorder,
                            {
                                backgroundColor:
                                    value >= 2
                                        ? color.americanBlue
                                        : color.white,
                            },
                        ]}
                    ></Text>
                    <Text
                        style={[
                            styles.emptyBorder,
                            {
                                backgroundColor:
                                    value >= 3
                                        ? color.americanBlue
                                        : color.white,
                            },
                        ]}
                    ></Text>
                </View>
                <Pressable
                    onPressIn={() => {
                        setPressB2(!pressB2);
                    }}
                    onPressOut={() => {
                        setPressB2(!pressB2);
                    }}
                    onPress={() => router.replace("/register")}
                    disabled={value >= instances.length ? true : false}
                >
                    <Text
                        style={[
                            styles.skipText,
                            {
                                backgroundColor: pressB2
                                    ? color.black
                                    : undefined,
                                color: pressB2 ? color.white : undefined,
                                opacity: pressB2 ? 0.75 : 1,
                            },
                        ]}
                    >
                        {value >= 1 && value < instances.length
                            ? "Skip Intro"
                            : " "}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default OnboardScreen;

const styles = StyleSheet.create({
    base: {
        flex: 1,
        alignContent: "center",
        justifyContent: "space-between",
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
        minHeight: "35%",
        maxHeight: "60%",
        marginVertical: 10,
        flex: 3,
        flexBasis: 300,
        flexGrow: 1,
        flexShrink: 0,
    },
    header: {
        fontFamily: "NotoSansBold",
        fontSize: 30,
        color: color.americanBlue,
        textAlign: "center",
        paddingHorizontal: 15,
    },
    subheader: {
        fontFamily: "NotoSans",
        fontSize: 16,
        color: color.americanBlue,
        textAlign: "center",
        paddingHorizontal: 25,
        marginVertical: 15,
        flex: 1,
        flexBasis: 100,
        flexGrow: 1,
        flexShrink: 0,
    },
    icon: {
        backgroundColor: color.americanBlue,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: color.americanBlue,
        justifyContent: "center",
        alignSelf: "center",
        width: 100,
        lineHeight: 100,
        aspectRatio: 1,
        textAlign: "center",
        fontSize: 40,
        color: color.white,
    },
    emptyBorder: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: color.americanBlue,
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 5,
        width: 60,
        fontSize: 4,
    },
    skipText: {
        justifyContent: "center",
        alignSelf: "center",
        textAlign: "center",
        fontFamily: "NotoSansSemiBold",
        fontSize: 14,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
});
