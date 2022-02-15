import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const GoalItem = ({ title, onPress, id }) => {
  return (
    <TouchableOpacity onPress={onPress.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },
});
