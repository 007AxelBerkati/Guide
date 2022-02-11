import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  };
  return (
    <View style={styles.screen}>
      <Button title="Masuk Ke mode tambah" onPress={() => setIsAddMode(true)} />
      <GoalInput onPress={addGoalHandler} visible={isAddMode} />
      <FlatList
        keyExtractor={(enteredGoals) => enteredGoals.key}
        data={courseGoals}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <GoalItem
              id={item.key}
              onPress={removeGoalHandler}
              title={item.value}
            />
          );
        }}
      />
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "gray",
    borderColor: "black",
    borderWidth: 1,
  },
});
