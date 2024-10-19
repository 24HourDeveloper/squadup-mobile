import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import darkregular from "@/themes/darkregular";
import lightregular from "@/themes/lightregular";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const theme = {
    colors:
      colorScheme === "dark" ? darkregular["colors"] : lightregular["colors"],
    roundness: 30,
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
          tabBarStyle: {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.primary,
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
          tabBarStyle: {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.primary,
          },
        }}
      />
    </Tabs>
  );
}
