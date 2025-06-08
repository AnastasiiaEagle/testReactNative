import { StatusBar, View, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppText from "../components/ui/AppText";

export default function TestScreen() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <AppText variant="primary">Test Screen</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_BACKGROUND,
    },
});