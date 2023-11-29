import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar } from "@rneui/themed";

import { color } from "@constants/Colors";

type SearchBarComponentProps = {};

const SearchComponent: React.FunctionComponent<
    SearchBarComponentProps
> = ({}) => {
    const [search, setSearch] = useState("");

    const updateSearch = (search: any) => {
        setSearch(search);
    };
    return (
        <View style={styles.view}>
            <SearchBar
                platform="android"
                placeholder="Search..."
                onChangeText={updateSearch}
                value={search}
                placeholderTextColor={color.mediumSlateBlue}
                containerStyle={{
                    backgroundColor: color.white,
                    borderRadius: 10,
                }}
                inputStyle={{
                    fontSize: 16,
                    paddingLeft: 10,
                    color: color.mediumSlateBlue,
                    fontFamily: "NotoSansBold",
                }}
                inputContainerStyle={{
                    borderColor: color.mediumSlateBlue,
                    borderRadius: 10,
                }}
                searchIcon={{
                    color: color.mediumSlateBlue,
                }}
                cancelIcon={{
                    color: color.mediumSlateBlue,
                }}
                clearIcon={{
                    color: color.mediumSlateBlue,
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
