import { Redirect } from "expo-router";
import { View, Text } from "../../components/Themed";

export default function Logout() {
    return <Redirect href="/login" />;
}
