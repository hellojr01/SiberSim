import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import TextRecognition, {
    TextRecognitionResult,
} from "@react-native-ml-kit/text-recognition";

import { color } from "@constants/Colors";
import LoaderItem from "@components/LoaderItem";

//Serving as backup purposes
export default function OcrReader() {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [image, setImage] = useState("");
    const [result, setResult] = React.useState<TextRecognitionResult>();

    const urlPattern: RegExp =
        /(http(s):\/\/.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    const phonePattern: RegExp = /(\+?6?01)[0-46-9]-?[0-9]{7,8}/;
    const bankAccPattern: RegExp = /[0-9]{10,16}/;

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let imageResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        console.log(imageResult);

        if (!imageResult.canceled) {
            try {
                setImage(imageResult.assets[0].uri);
                setResult(
                    await TextRecognition.recognize(imageResult.assets[0].uri)
                );
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
    };

    if (loading) {
        return (
            <SafeAreaView style={styles.base}>
                {/* <ActivityIndicator /> */}
                <LoaderItem />
            </SafeAreaView>
        );
    }

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                rowGap: 20,
            }}
        >
            <Button title="Select Image" onPress={pickImage} />
            {image && (
                <Image
                    source={{ uri: image }}
                    style={{
                        width: 300,
                        height: 300,
                        resizeMode: "contain",
                    }}
                />
            )}
            {result && (
                <View style={{ flexDirection: "row", rowGap: 10 }}>
                    <TextInput style={styles.input}>
                        {result.text
                            .split(" ")
                            .find(
                                (word: string) =>
                                    phonePattern.test(word) ||
                                    urlPattern.test(word) ||
                                    bankAccPattern.test(word)
                            )}
                    </TextInput>
                    <Button title="Done" onPress={undefined} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: color.lavender,
    },
    input: {
        height: 30,
        width: 200,
        borderWidth: 1,
        padding: 5,
        fontSize: 14,
        marginRight: 10,
    },
});
