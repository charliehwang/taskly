import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "./theme";

type Props = {
  name: string;
  isCompleted?: boolean;
};

export function ShoppingListItem({ isCompleted, name }: Props) {
  const handleDelete = () => {
    Alert.alert("Delete", `Are you sure you want to delete ${name}?`, [
      {
        text: "Yes, please",
        onPress: () => console.log("Yes Pressed"),
        style: "destructive",
      },
      {
        text: "Cancel it",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
    // setIsDeleted(true);
  };

  return (
    <View
      style={[styles.container, isCompleted && { backgroundColor: "grey" }]}
    >
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: theme.accent,
          // backgroundColor: "pink",
          paddingHorizontal: 10,
          paddingVertical: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            { fontSize: 18, fontWeight: "200" },
            isCompleted && {
              color: "white",
              textDecorationLine: "line-through",
            },
          ]}
        >
          {name}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    color: "white",
  },
});
``;
