import StyleText from "@/components/StyledText"
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "@/constants/ui";

type TodoItemProps = {
    title: string;
    isCompleted: boolean;
    onPress: () => void;
}   

const TodoItem: React.FC<TodoItemProps> = ({title, isCompleted, onPress}) => {
return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <StyleText>{title}</StyleText>
        <StyleText>{isCompleted ? "✅" : "❌"}</StyleText>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        marginVertical: 5,
        backgroundColor: COLORS.SECONDARY_BACKGROUND,
        borderRadius: 10,
    }
})

export default TodoItem;