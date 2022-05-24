import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { data } from "../utils/data";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
  container: {},
});

export default TodoList;
