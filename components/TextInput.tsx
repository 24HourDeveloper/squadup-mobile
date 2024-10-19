import React from "react";
import { TextInput } from "react-native-paper";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

type InputType = {
  label: string;
  value: string;
  password?: boolean;
  onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

export default function Input({ label, value, onChange, password }: InputType) {
  return (
    <TextInput
      label={label}
      mode="outlined"
      value={value}
      secureTextEntry={password}
      onChange={onChange}
    />
  );
}
