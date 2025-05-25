import StyleText from "@/components/StyledText";
import { View, StyleSheet } from "react-native";
import { COLORS } from "@/constants/ui";

type HeaderProps = {
    totalTodos: number;
    completedTodos: number;
}

const Header: React.FC<HeaderProps> = ({totalTodos, completedTodos}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerMainContent}>
                <StyleText>March 15, 2025</StyleText>
            </View>
            <StyleText>Зроблено: {completedTodos}/{totalTodos}</StyleText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingBottom: 15,
        paddingHorizontal: 20,
        backgroundColor: COLORS.SECONDARY_BACKGROUND,
    },
    headerMainContent: {
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    }
})

export default Header;
