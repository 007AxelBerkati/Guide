import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 40,
          paddingVertical: 40,
          flexDirection: "row",
          backgroundColor: "yellow",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput placeholder="Course Goal" style={styles.input} />
        <Button style={styles.button} title="ADD" />
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  input: {
    borderWidth: 1,
    color: "black",
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    width: "80%",
  },

  button: {
    padding: 20,
  },
});
