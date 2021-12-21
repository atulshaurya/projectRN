import React from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import TaskItem from "./components/TaskItem";
import { borderLeftColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { KeyboardAvoidingView } from "react-native-web";

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
        <TextInput style={styles.input} placeholder={'Write a task'}/>
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
  input:{

  },
  writeTaskWrapper: {
    
  },
});
