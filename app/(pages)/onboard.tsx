import Icon from "@expo/vector-icons/AntDesign";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from "react-native";
import Logo1 from "../../assets/images/wc2.svg";
import Logo2 from "../../assets/images/wc3.svg";
import Logo3 from "../../assets/images/wc4.svg";
import { color } from "../../constants/Colors";

const OnboardScreen = () => {
    const router = useRouter();
    const Logo = Logo2;

    return (
        <View style={styles.base}>
            <View style={styles.top}>
                <Text style={[styles.header, styles.common]}>
                    Stay One Step Ahead With SiberSim
                </Text>
            </View>
            <View style={styles.middle}>
                <Logo style={[styles.customSvg, styles.common]} />
                <Text style={styles.subheader}>
                    Learn to spot scams and protect your hard-earned money. Your
                    digital safety matters!
                </Text>
            </View>
            <View style={styles.bottom}>
                <TouchableHighlight
                    activeOpacity={0.75}
                    underlayColor="tranparent"
                >
                    <Pressable onPress={() => router.push("/welcome")}>
                        <Icon name="arrowright" style={styles.icon} />
                    </Pressable>
                </TouchableHighlight>

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
        justifyContent: "flex-end",
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
        fontSize: 30,
        color: color.americanBlue,
        textAlign: "center",
    },
    subheader: {
        fontFamily: "NotoSans",
        fontSize: 16,
        color: color.americanBlue,
        textAlign: "center",
        paddingHorizontal: 40,
        marginBottom: 20,
        marginTop: 20,
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
    iconOld: {
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
