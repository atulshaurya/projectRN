import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import TaskItem from "./components/TaskItem";
import { borderLeftColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.taskTitle}>Today's tasks</Text>

        <View style={styles.itemList}>
          {/*This is where the task items will go. */}
          <TaskItem text={"Task 1"} />
          <TaskItem text={"Task 2"} />
        </View>
      </View>

      {/*Write a task here*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write task here..."} />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEFDF",
  },
  tasksWrapper: {
    flex: 2,
    alignContent: "center",
    fontSize: 40,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  taskTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  itemList: {
    color: "#fff",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 50,
    borderColor: "#C0C0C0C0",
    borderWidth: 3,
    width: 250,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#C0C0C0C0",
    borderWidth: 3,
  },
  addText: {
    fontSize:32,
  },
});
