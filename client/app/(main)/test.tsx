import { View, StyleSheet } from "react-native";

import LoaderItem from "@components/LoaderItem";
import EmailScreen from "@components/simulation/EmailItem3";
import BankApp from "@components/simulation/BankItem";
import { color } from "@constants/Colors";

export default function Loader() {
    return (
        <View style={styles.base}>
            {/* <LoaderItem /> */}
            {/* <EmailScreen /> */}
            <BankApp />
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
