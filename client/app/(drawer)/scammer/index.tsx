import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import SearchBar from '@components/SearchBar';
import searchForScammers from '@constants/searchForScammers';
import { color } from "@constants/Colors";
import { router } from "expo-router";

interface Scammer {
    id: number;
    name: string;
    contactInfo: string;
    contactType: 'Mobile' | 'Bank Account' | 'Website';
}

const SearchResultItem: React.FC<Scammer> = ({ id, name, contactInfo, contactType }) => {
    const firstLetter = name.charAt(0);

    return (
        <TouchableOpacity onPress={() => router.push(`/scammer/${id}`)}>
            <View style={styles.resultItem}>
                <View style={styles.leftColumn}>
                    <View style={styles.avatarContainer}>
                        <Text style={styles.avatarText}>{firstLetter}</Text>
                    </View>
                </View>
                <View style={styles.rightColumn}>
                    <Text style={styles.resultName}>{name}</Text>
                    <Text style={styles.resultDetail}>{contactInfo}</Text>
                    <Text style={styles.resultType}>{contactType}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const ScammerDatabaseScreen: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Scammer[]>([]);

    const handleSearch = () => {
        const results = searchForScammers(searchQuery);
        setSearchResults(results);
    };

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Enter mobile phone, bank account, or website"
                onChangeText={(text) => setSearchQuery(text)}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.customButton} onPress={handleSearch}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Result</Text>
            </View>
            {searchResults.length === 0 ? (
                <Text style={styles.notFound}>No scammers found</Text>
            ) : (
                <FlatList
                    data={searchResults}
                    renderItem={({ item }) => (
                        <SearchResultItem
                            id={item.id}
                            name={item.name}
                            contactInfo={item.contactInfo}
                            contactType={item.contactType}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        backgroundColor: color.lavender,
    },
    heading: {
        fontFamily: "NotoSansBold",
        fontSize: 16,
        color: color.americanBlue,
    },
    headingContainer: {
        alignItems: 'flex-start',
        padding: 0,
    },
    buttonContainer: {
        marginBottom: 20,
    },
    customButton: {
        backgroundColor: color.purple,
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontFamily: "NotoSansBold",
        fontSize: 16,
    },
    notFound: {
        color: color.americanBlue,
        fontFamily: "NotoSansMedium",
        marginTop: 10,
    },
    resultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    leftColumn: {
        flex: 1,
        alignItems: 'center',
    },
    avatarContainer: {
        width: 50,
        height: 50,
        backgroundColor: color.americanBlue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    avatarText: {
        color: 'white',
        fontSize: 18,
        fontFamily: "NotoSansBold",
    },
    rightColumn: {
        flex: 3,
        marginLeft: 10,
    },
    resultName: {
        fontFamily: "NotoSansBold",
        fontSize: 18,
    },
    resultDetail: {
        fontSize: 16,
    },
    resultType: {
        fontSize: 14,
        fontFamily: "NotoSansMedium",
        color: color.americanBlue,
    },
});

export default ScammerDatabaseScreen;
