import { FlatList, View, StyleSheet } from "react-native";
import TodoItem from "../TodoItem";
import { Todo } from "@/types/todo";

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({todos, onToggle}) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={todos} 
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <TodoItem 
                        title={item.title} 
                        isCompleted={item.isCompleted}
                        onPress={() => onToggle(item.id)}
                    />
                )}
                contentContainerStyle={styles.listContent}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    listContent: {
        padding: 20,
    }
});

export default TodoList;
