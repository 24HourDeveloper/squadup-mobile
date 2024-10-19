import React, { useContext, useEffect } from "react";
import { ThemedView } from "@/components/ThemedView";
import { supabase } from "@/lib/supabase";
import { Text, TouchableOpacity } from "react-native";
import { AuthContext } from "@/context/AuthProvider";

export default function HomeScreen() {
  // const { setUser, user } = useContext(AuthContext);
  // console.log("USER in Tabs: ", user);

  useEffect(() => {}, []);
  return (
    <ThemedView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={async () => {
          console.log("calling function");
          await supabase.auth.signOut();
          // if (!user) return;
          // setUser(null);
        }}
      >
        <Text>signout</Text>
      </TouchableOpacity>
    </ThemedView>
  );
}
