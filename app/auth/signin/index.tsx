import React, { useState } from "react";
import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { Text, Divider } from "react-native-paper";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";

export default function SignInScreen() {
  const [text, setText] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleTextChange =
    (fieldName: string) =>
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const newValue = event.nativeEvent.text;
      setText((prevData) => ({ ...prevData, [fieldName]: newValue }));
    };
  return (
    <View
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
              value={text.password}
              onChange={handleTextChange("password")}
            />
            <Text variant="titleSmall" style={{ textAlign: "right" }}>
              Forgot password?
            </Text>
          </View>
          <Button
            mode="elevated"
            text="Sign in"
            onPress={() => console.log("Pressed")}
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
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}
