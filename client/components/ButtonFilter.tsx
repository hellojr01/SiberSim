import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button, IconButton } from "react-native-paper";

import { color } from "../constants/Colors";

interface ButtonFilterProps {
    activeFilter: string;
    filters: string[];
    onFilterChange: (filter: string) => void;
}

const ButtonFilter: React.FC<ButtonFilterProps> = ({
    activeFilter,
    filters,
    onFilterChange,
}) => {
    return (
        <ScrollView
            horizontal={true}
            contentContainerStyle={styles.container}
            showsHorizontalScrollIndicator={false}
        >
            {filters.map((filter) => (
                <Button
                    key={filter}
                    mode="contained"
                    style={[
                        styles.button,
                        activeFilter === filter && styles.activeButton,
                    ]}
                    onPress={() => onFilterChange(filter)}
                    labelStyle={
                        activeFilter === filter
                            ? {
                                  ...styles.baseButtonText,
                                  ...styles.activeButtonText,
                              }
                            : styles.baseButtonText
                    }
                >
                    {filter}
                </Button>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    button: {
        marginHorizontal: 5,
        backgroundColor: color.white,
    },
    baseButtonText: {
        color: color.americanBlue,
        fontFamily: "NotoSansMedium",
        fontSize: 12,
        marginVertical: 0,
        marginHorizontal: 0,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    activeButton: {
        backgroundColor: color.americanBlue, // Active background color
    },
    activeButtonText: {
        color: color.white,
    },
});

export default ButtonFilter;
