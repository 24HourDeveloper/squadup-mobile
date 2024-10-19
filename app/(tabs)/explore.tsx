import { Text, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <TouchableOpacity>
        <Text>explore page</Text>
      </TouchableOpacity>
    </ThemedView>
  );
}
