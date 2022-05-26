import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ITodo } from "../@types";
import Checkbox from "./Checkbox";
import moment from "moment";
import { useState } from "react";

const Todo: React.FC<ITodo> = ({ id, hour, text, isCompleted, isToday }) => {
  const [localHour, setLocalhour] = useState(new Date(hour));
  return (
    <View style={styles.container}>
      <Checkbox
        hour={hour}
        text={text}
        isCompleted={isCompleted}
        isToday={isToday}
        id={id}
      />
      <View>
        <Text
          style={
            isCompleted
              ? [
                  styles.text,
                  { textDecorationLine: "line-through", color: "#73737360" },
                ]
              : styles.text
          }
        >
          {text}
        </Text>
        <Text
          style={
            isCompleted
              ? [
                  styles.time,
                  { textDecorationLine: "line-through", color: "#73737360" },
                ]
              : styles.time
          }
        >
          {moment(localHour).format("LT")}
        </Text>
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: "#737373",
  },
  time: {
    fontSize: 15,
    fontWeight: "500",
    color: "#737373",
  },
});
