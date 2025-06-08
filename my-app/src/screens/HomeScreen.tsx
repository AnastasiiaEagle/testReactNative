import { StatusBar, View, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppText from "../components/ui/AppText";
import CustomButton from "../components/ui/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    index: undefined;
    test: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <AppText variant="primary">Перейти на екран деталів</AppText>
            <CustomButton onPress={() => navigation.navigate("test")}>
                Click me
            </CustomButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});