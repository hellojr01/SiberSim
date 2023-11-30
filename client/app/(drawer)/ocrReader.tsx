import React, { useState } from "react";
import {
    View,
    Text,
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

export default function OcrReader() {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [image, setImage] = useState("");
    const [result, setResult] = React.useState<
        TextRecognitionResult | undefined
    >();

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let imageResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 5],
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
                <ActivityIndicator />
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
            {result && <Text style={{ fontSize: 10 }}>{result.text}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: color.lavender,
    },
});
