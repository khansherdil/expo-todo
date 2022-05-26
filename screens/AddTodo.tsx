import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  TextInput,
} from "react-native";
import React from "react";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch, useSelector } from "react-redux";
import { addTodoReducer } from "../redux/todosSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const AddTodo = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [isToday, setIsToday] = useState(false);
  const [state, setState] = useState({
    date: new Date(),
    mode: "time",
    show: false,
  });

  //default list select
  const listTodos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const addTodo = async () => {
    const newTodo = {
      id: Math.floor(Math.random() * 100000),
      text: name,
      hour: state.date.toString(),
      isToday: isToday,
      isCompleted: false,
    };

    try {
      await AsyncStorage.setItem(
        "@todos",
        JSON.stringify([...listTodos, newTodo])
      );
      dispatch(addTodoReducer(newTodo));
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || state.date;

    setState({ ...state, date: currentDate, show: false });
  };
  const showPicker = (currentMode: any) => {
    setState({ ...state, show: true });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Todo</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          placeholderTextColor={"#00000030"}
          style={styles.textInput}
          value={name}
          placeholder="Dishes"
          onChangeText={(text) => setName(text)}
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 4,
        }}
      >
        <Text style={styles.inputTitle}>Hour</Text>
        {state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={state.date}
            mode={state.mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <TouchableOpacity
          onPress={showPicker}
          style={{
            backgroundColor: "#73737340",
            paddingTop: 4,
            paddingHorizontal: 8,
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>
            {state.date.getHours()}:{state.date.getMinutes()}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.inputTitle}>Today</Text>
        <Switch
          value={isToday}
          onValueChange={(value) => setIsToday(value)}
        ></Switch>
      </View>
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 35,
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa",
    paddingHorizontal: 30,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 24,
  },
  textInput: {
    width: "60%",
    borderBottomColor: "#00000020",
    borderBottomWidth: 1,
  },
  button: {
    marginTop: 30,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000030",
    height: 46,
    borderRadius: 11,
  },
});
