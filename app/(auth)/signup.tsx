import React, { useState, useEffect } from "react";
import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Alert,
} from "react-native";
import { Session } from "@supabase/supabase-js";
import { makeRedirectUri } from "expo-auth-session";
import { Text, useTheme } from "react-native-paper";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { supabase } from "@/lib/supabase";

type FormType = {
  username: string;
  firstname: string;
  lastname: string;
  age: number;
  gender: "male" | "female" | "other";
  email: string;
  password: string;
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
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  const handleTextChange =
    (fieldName: string) =>
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const newValue = event.nativeEvent.text;
      setText((prevData) => ({ ...prevData, [fieldName]: newValue }));
    };

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: text.email,
      password: text.password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  console.log("SESSION: ", session);
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
            label="Password"
            value={text.password}
            onChange={handleTextChange("password")}
          />
          {/* <TextInput
            label="Username"
            value={text.username}
            onChange={handleTextChange("username")}
          /> */}
          {/* <TextInput
            label="First Name"
            value={text.firstname}
            onChange={handleTextChange("firstname")}
          />
          <TextInput
            label="Last Name"
            value={text.lastname}
            onChange={handleTextChange("lastname")}
          /> */}
          <Button mode="elevated" text="Sign up" onPress={signUpWithEmail} />
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
