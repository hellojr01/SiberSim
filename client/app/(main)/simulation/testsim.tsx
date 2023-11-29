import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

import {
    FontAwesome,
    FontAwesome5,
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import ApplicationItem from "@components/simulation/ApplicationItem";
import Header from "@components/Header";
import { color } from "@constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

// Intended file for testing purposes only
const TestSimulation = () => {
    const [hideHeader, setHideHeader] = useState(false);

    return (
        <View style={style.base}>
            <StatusBar translucent={false} />
            <Header
                // IconLeft={
                //     <MaterialCommunityIcons
                //         color={color.sunglow}
                //         size={40}
                //         name="lightbulb"
                //     />
                // }
                title={`Simulation:\nTest Simulation 1`}
                IconRight={
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{
                            backgroundColor: color.red,
                            borderRadius: 8,
                            padding: 10,
                        }}
                    >
                        <Text
                            style={{
                                color: color.white,
                            }}
                        >
                            End Simulation
                        </Text>
                    </TouchableOpacity>
                }
                // IconRight={
                //     <MaterialCommunityIcons
                //         color={color.sunglow}
                //         size={40}
                //         name="lightbulb-variant"
                //     />
                // }
            />
            <ImageBackground
                source={require("../../../assets/images/phone-background.jpg")}
                resizeMode="cover"
                style={{
                    flex: 1,
                    width: "auto",
                    height: "auto",
                    paddingVertical: 30,
                }}
            >
                <View
                    style={{
                        ...style.appItemContainer,
                        // marginTop: 30,
                    }}
                >
                    <ApplicationItem
                        Icon={FontAwesome}
                        iconName="globe"
                        color={color.white}
                        backgroundColor={color.steelBlue}
                        title="Browser"
                        locked
                    />
                    <ApplicationItem
                        Icon={MaterialIcons}
                        iconName="email"
                        color={color.white}
                        backgroundColor={color.indigo}
                        title="Email"
                    />
                    <ApplicationItem
                        Icon={FontAwesome}
                        iconName="bank"
                        color={color.white}
                        backgroundColor={color.gold}
                        title="Bank App"
                        locked
                    />
                    <ApplicationItem
                        Icon={Ionicons}
                        iconName="chatbubble-ellipses"
                        color={color.white}
                        backgroundColor={color.emeraldGreen}
                        title="Social Media"
                        locked
                    />
                </View>
                <View
                    style={{
                        ...style.appItemContainer,
                        ...style.botAppItemContainer,
                    }}
                >
                    <ApplicationItem
                        Icon={MaterialCommunityIcons}
                        iconName="phone"
                        color={color.white}
                        backgroundColor={color.emeraldGreen}
                        title="Contacts"
                        locked
                    />
                    <ApplicationItem
                        Icon={MaterialIcons}
                        iconName="message"
                        color={color.white}
                        backgroundColor={color.tangerine}
                        title="SMS"
                        locked
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

export default TestSimulation;

const style = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: color.lavender,
    },
    appItemContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        columnGap: 20,
        rowGap: 10,
    },
    botAppItemContainer: {
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
        marginHorizontal: 20,
    },
});
