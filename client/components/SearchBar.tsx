import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { color } from "@constants/Colors";

interface SearchBarProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder,
    value,
    onChangeText,
}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        backgroundColor: color.white,
        borderColor: color.americanBlue,
        borderRadius: 5,
        color: color.americanBlue,
        fontFamily: "NotoSansMedium",
        padding: 10,
    },
});

export default SearchBar;
