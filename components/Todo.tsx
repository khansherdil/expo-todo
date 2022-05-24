import { View, Text } from "react-native";
import React from "react";
import { ITodo } from "../@types";

const Todo: React.FC<ITodo> = ({ hour, text, isCompleted, isToday }) => {
  return (
    <View>
      <Text>
        {text} - {hour}u {isCompleted && <Text>T</Text>}
      </Text>
    </View>
  );
};

export default Todo;
