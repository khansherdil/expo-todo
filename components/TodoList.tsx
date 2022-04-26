import React from "react";
import { FlatList, View, Text } from "react-native";
import { data } from "../utils/data";

const TodoList = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.text}</Text>}
      />
    </View>
  );
};

export default TodoList;
