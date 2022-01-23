import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Flexbox() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "yellow",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text>1</Text>
      </View>

      <View
        style={{
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text>2</Text>
      </View>

      <View
        style={{
          backgroundColor: "green",
          alignItems: "center",
          justifyContent: "center",
          flex: 0.5,
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
});
