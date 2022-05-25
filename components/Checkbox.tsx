import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons";
import { ITodo } from "../@types";

const Checkbox: React.FC<ITodo> = ({
  text,
  id,
  isCompleted,
  hour,
  isToday,
}) => {
  return isToday ? (
    <TouchableOpacity style={styles.unchecked}>
      <Text>{isCompleted && <View style={styles.checked}></View>}</Text>
    </TouchableOpacity>
  ) : (
    <View style={styles.notToday}></View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checked: {
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  unchecked: {
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
    backgroundColor: "#f7f7f9",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
  },
  notToday: {
    width: 10,
    height: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#262626",
    marginRight: 13,
    marginLeft: 15,
  },
});
