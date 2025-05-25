import Header from "@/layout/Header";
import { StatusBar, StyleSheet, View } from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";
import { Todo } from "@/types/todo";
import TodoList from "@/layout/TodoList";

const defaultTodo: Todo[] = [
  {
    id: "1",
    title: "Завдання 1",
    isCompleted: false,
  },
  {
    id: "2",
    title: "Завдання 2",
    isCompleted: false,
  },
  {
    id: "3",
    title: "Завдання 3",
    isCompleted: false,
  },
];

export default function Index() {
  const [todo, setTodo] = useState<Todo[]>(defaultTodo);

  const toggleTodo = (id: string) => {
    setTodo(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle={"light-content"} />
      <Header totalTodos={todo.length} completedTodos={todo.filter((todo) => todo.isCompleted).length} />
      <TodoList todos={todo} onToggle={toggleTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404040",
  },
});
