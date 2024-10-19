import { useEffect } from "react";
import { View, Text, Alert } from "react-native";
import { useRouter } from "expo-router";
import { supabase } from "@/lib/supabase";

export default function Confirmation() {
  const router = useRouter();

  useEffect(() => {
    const checkConfirmation = async () => {
      const { data: session, error } = await supabase.auth.getSession();

      if (session?.user?.email_confirmed_at) {
        // Redirect to the home or dashboard after confirmation
        router.replace("/(tabs)");
      } else {
        Alert.alert("Email confirmation failed.");
      }
    };

    checkConfirmation();
  }, []);

  return (
    <View>
      <Text>Email confirmed! Redirecting...</Text>
    </View>
  );
}
