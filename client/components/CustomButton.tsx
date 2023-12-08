import { Text, View, TouchableOpacity } from "react-native";

interface ButtonProps {
    onPress: () => void;
    buttonStyle?: object;
    textStyle?: object;
    title: string;
    icon?: any;
    disabled?: boolean;
}

const Button = ({
    onPress,
    buttonStyle,
    textStyle,
    title,
    icon,
    disabled,
}: ButtonProps) => (
    <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={buttonStyle}
        disabled={disabled}
    >
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
