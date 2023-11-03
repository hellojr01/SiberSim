import Icon from "@expo/vector-icons/AntDesign";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Logo1 from "../../../assets/images/wc2.svg";
import Logo2 from "../../../assets/images/wc3.svg";
import Logo3 from "../../../assets/images/wc4.svg";
import { color } from "../../../constants/Colors";
import { instances } from "../../../constants/onboardData";

const OnboardScreen = () => {
    const router = useRouter();
    const [pressed, setPressed] = useState(false);
    const { onboardId } = useLocalSearchParams();
    let value = 1;

    if (onboardId !== undefined)
        if (Array.isArray(onboardId)) {
            parseInt(onboardId.join());
        } else {
            parseInt(onboardId);
        }

    // if (value < 1 || value > instances.length);

    let Logo = Logo1;
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
            <View style={styles.top}>
                <Text style={[styles.header, styles.common]}>
                    {onboardPage ? onboardPage.header : "Title Not Found!"}
                </Text>
            </View>
            <View style={styles.middle}>
                <Logo style={[styles.customSvg, styles.common]} />
                <Text style={styles.subheader}>
                    {onboardPage
                        ? onboardPage.subheader
                        : "Description Not Found!"}
                </Text>
            </View>
            <View style={styles.bottom}>
                <Pressable
                    onPressIn={() => {
                        setPressed(!pressed);
                    }}
                    onPressOut={() => {
                        setPressed(!pressed);
                    }}
                    onPress={() => {
                        if (value >= 1 && value < 3)
                            router.replace(`/onboard/${value + 1}`);
                        else router.replace("/welcome");
                    }}
                    hitSlop={{ top: -10, left: -100, bottom: -10, right: -100 }}
                >
                    <Icon
                        name="arrowright"
                        style={[
                            styles.icon,
                            {
                                opacity: pressed ? 0.75 : 1,
                            },
                        ]}
                    />
                </Pressable>
                <View
                    style={[
                        styles.common,
                        { flexDirection: "row", marginTop: 20 },
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
                <Link
                    replace
                    href="/(pages)/onboard/3"
                    style={{ alignSelf: "center", marginTop: 10 }}
                >
                    <Text style={styles.skipText}>Skip Intro</Text>
                </Link>
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
        paddingVertical: 40,
    },
    top: {
        flex: 1,
        justifyContent: "center",
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
        marginBottom: 15,
        marginTop: 15,
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
        fontFamily: "NotoSansSemiBold",
        fontSize: 14,
    },
});
