import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { TodoListProps } from "../@types";
import Todo from "./Todo";

const TodoList = (props: TodoListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        style={styles.list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Todo
            hour={item.hour}
            text={item.text}
            id={item.id}
            isToday={item.isToday}
            isCompleted={item.isCompleted}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: {},
});

export default TodoList;

//NOTE: If flatlist isn't scrollable put a flex:1 on your parent view!
