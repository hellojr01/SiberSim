import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import { color } from "../constants/Colors";

type SearchBarComponentProps = {};

const SearchComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
    const [search, setSearch] = useState("");

    return (
        <View style={styles.view}>
            <SearchBar
                platform="android"
                placeholder="Search..."
                placeholderTextColor="#6D67E4"
                containerStyle={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: 10,
                    padding: 0,
                }}
                inputStyle={{
                    fontSize: 15,
                    paddingLeft: 10,
                    color: color.purple,
                    fontFamily: "NotoSansBold",
                }}
                inputContainerStyle={{
                    borderColor: color.purple,
                    borderRadius: 10,
                }}
                searchIcon={{
                    color: color.purple,
                }}
                cancelIcon={{
                    color: color.purple,
                }}
                clearIcon={{
                    color: color.purple,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        margin: 10,
    },
});

export default SearchComponent;
