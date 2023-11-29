import React from "react";
import {
    View,
    TouchableHighlight,
    Text,
    StyleSheet,
    Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { color as colorlist } from "@constants/Colors";

type Props = {
    Icon: any;
    iconName: string;
    color: string;
    backgroundColor?: string;
    title: string;
    locked?: boolean;
    onPress?: () => void;
};

function ApplicationItem({
    Icon,
    iconName,
    color,
    backgroundColor,
    title,
    locked = false,
    onPress = undefined,
}: Props) {
    return (
        <View>
            {locked && (
                <View style={{ ...style.baseButton, ...style.lock }}>
                    <FontAwesome
                        name="lock"
                        size={50}
                        color={colorlist.white}
                    />
                </View>
            )}
            <TouchableHighlight
                onPress={onPress}
                style={{
                    ...style.baseButton,
                    backgroundColor: backgroundColor,
                }}
                disabled={locked}
                activeOpacity={0.5}
                underlayColor={colorlist.charcoal}
            >
                <View style={style.container}>
                    <Icon name={iconName} size={50} color={color} />
                    <Text style={[style.title, { color: color }]}>{title}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const style = StyleSheet.create({
    baseButton: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: 150,
        aspectRatio: 1.5,
    },
    lock: {
        backgroundColor: colorlist.charcoal,
        opacity: 0.8,
        position: "absolute",
        zIndex: 2,
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: 8,
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontFamily: "Roboto",
        textAlign: "center",
    },
});

export default ApplicationItem;
