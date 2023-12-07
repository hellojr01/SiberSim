import { Text, View, TouchableOpacity } from "react-native";

interface ButtonProps {
    onPress: () => void;
    buttonStyle?: object;
    textStyle?: object;
    title: string;
    icon?: any;
}

const Button = ({
    onPress,
    buttonStyle,
    textStyle,
    title,
    icon,
}: ButtonProps) => (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={buttonStyle}>
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                columnGap: 10,
            }}
        >
            {icon}
            <Text
                style={{
                    ...textStyle,
                    textAlign: "center",
                }}
            >
                {title}
            </Text>
        </View>
    </TouchableOpacity>
);

export default Button;
