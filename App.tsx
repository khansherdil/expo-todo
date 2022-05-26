import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import TodoList from "./components/TodoList";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTodo from "./screens/AddTodo";
import { RootStackParamList } from "./@types";
import { Provider } from "react-redux";
import store from "./redux/store";
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          ></Stack.Screen>

          <Stack.Screen
            name="Add"
            component={AddTodo}
            options={{ presentation: "modal", headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
