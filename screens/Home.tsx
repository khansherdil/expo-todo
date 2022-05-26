import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import TodoList from "../components/TodoList";
import { data } from "../utils/data";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../@types";

export default function Home() {
  const navigate = useNavigation();
  let sortedData = data.sort((a, b) => {
    return Number(a.isCompleted) - Number(b.isCompleted);
  });

  const [localData, setLocalData] = useState(sortedData);
  const [isHidden, setIsHidden] = useState(false);

  const handleHideCompleted = () => {
    if (isHidden) {
      setIsHidden(false);
      setLocalData(sortedData);
      return;
    }
    setIsHidden(!isHidden);
    setLocalData(localData.filter((d) => !d.isCompleted));
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/7375947/pexels-photo-7375947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
        style={styles.image}
      />
      <View style={styles.todayContainer}>
        <Text style={styles.title}>Today</Text>
        <TouchableOpacity onPress={handleHideCompleted}>
          <Text style={{ color: "#3478f6" }}>
            {isHidden ? "Unhide Completed" : "Hide Completed"}
          </Text>
        </TouchableOpacity>
      </View>
      <TodoList data={localData.filter((d) => d.isToday)} />
      <Text style={styles.title}>Tomorrow</Text>
      <TodoList data={localData.filter((d) => !d.isToday)} />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigate.navigate("Add")}
      >
        <Text style={{ color: "#fafafa", textTransform: "capitalize" }}>
          new
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 35,
    marginTop: 10,
  },
  todayContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addButton: {
    width: 52,
    height: 52,
    borderRadius: 50,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 50,
    right: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
});
