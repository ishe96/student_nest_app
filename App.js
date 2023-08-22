import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import 'react-native-gesture-handler';
import HomeScreen from "./homeScreen";

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <HomeScreen />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
