import React, { useState, useContext } from "react";
import { useRouter } from "expo-router";
import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Alert,
} from "react-native";
import { Text, Divider } from "react-native-paper";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { supabase } from "@/lib/supabase";
import { AuthContext } from "@/context/AuthProvider";
import { ThemedView } from "@/components/ThemedView";

export default function SignInScreen() {
  const [text, setText] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  const handleTextChange =
    (fieldName: string) =>
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const newValue = event.nativeEvent.text;
      setText((prevData) => ({ ...prevData, [fieldName]: newValue }));
    };

  async function signInWithEmail() {
    setLoading(true);
    const { error, data } = await supabase.auth.signInWithPassword({
      email: text.email,
      password: text.password,
    });

    if (error) return Alert.alert(error.message);
    setLoading(false);
    setUser(data.user);
    router.replace("./(tabs)");
  }

  return (
    <ThemedView
      style={{
        flex: 1,
        paddingHorizontal: 15,
        paddingBottom: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flex: 1,
          gap: 50,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text variant="displaySmall" style={{ textAlign: "center" }}>
          SQUAD UP
        </Text>
        <View style={{ display: "flex", gap: 20 }}>
          <View style={{ display: "flex", gap: 5 }}>
            <TextInput
              label="Email"
              value={text.email}
              onChange={handleTextChange("email")}
            />
            <TextInput
              label="Password"
              password={true}
              value={text.password}
              onChange={handleTextChange("password")}
            />
            <Text variant="titleSmall" style={{ textAlign: "right" }}>
              Forgot password?
            </Text>
          </View>
          <Button
            loading={loading}
            mode="elevated"
            text="Sign in"
            onPress={signInWithEmail}
          />
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Divider style={{ width: "45%" }} />
            <Text variant="titleSmall">OR</Text>
            <Divider style={{ width: "45%" }} />
          </View>
          <Button
            text="Log in with Meta"
            mode="text"
            onPress={() => console.log("Pressed")}
          />
        </View>
      </View>
      <Button
        text="Create new account"
        mode="outlined"
        onPress={() => router.push("/(auth)/signup")}
      />
    </ThemedView>
  );
}
