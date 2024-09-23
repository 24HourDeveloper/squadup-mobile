import React, { useState } from "react";
import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { Text, useTheme } from "react-native-paper";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";

type FormType = {
  username: string;
  firstname: string;
  lastname: string;
  age: number;
  gender: "male" | "female" | "other";
  email: string;
};

export default function SignUpScreen() {
  const theme = useTheme();
  const [text, setText] = useState<FormType>({
    username: "",
    firstname: "",
    lastname: "",
    age: 18,
    gender: "male",
    email: "",
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
        <View>
          <Text variant="displaySmall" style={{ textAlign: "center" }}>
            WELCOME TO
          </Text>
          <Text
            variant="displaySmall"
            style={{ textAlign: "center", color: theme.colors.primary }}
          >
            SQUAD UP
          </Text>
        </View>
        <View style={{ display: "flex", gap: 20 }}>
          <TextInput
            label="Email"
            value={text.email}
            onChange={handleTextChange("email")}
          />
          <TextInput
            label="Username"
            value={text.username}
            onChange={handleTextChange("username")}
          />
          <TextInput
            label="First Name"
            value={text.firstname}
            onChange={handleTextChange("firstname")}
          />
          <TextInput
            label="Last Name"
            value={text.lastname}
            onChange={handleTextChange("lastname")}
          />
          <Button
            mode="elevated"
            text="Sign up"
            onPress={() => console.log("Pressed")}
          />
        </View>
      </View>
      <Button
        text="Already have an account?"
        mode="outlined"
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}
