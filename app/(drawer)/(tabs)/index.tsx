import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FAB } from "react-native-paper";
import PenComponent from "@/components/icons/Pen";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Home</Text>
      <TouchableOpacity style={styles.twitterButton}>
        <PenComponent />
      </TouchableOpacity>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Settings</Text>
    </View>
  );
}




const Tab = createMaterialTopTabNavigator();







export default function Index() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.tabLabel,
        tabBarIndicatorStyle: styles.tabIndicator,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen name="Nouveautés" component={HomeScreen} />
      <Tab.Screen name="Longs Formats" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenText: {
    fontSize: 18,
    fontFamily: "Okta",
  },
  tabLabel: {
    fontFamily: "Okta",
    textTransform: "capitalize",
  },
  tabIndicator: {
    backgroundColor: "#F3699B",
  },
  tabBar: {
    marginTop: 0,
    shadowColor: "white",
    backgroundColor: "white",
    elevation: 0,
    borderBottomWidth: 0,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 80,
  },
  twitterButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#F15A90",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  twitterButtonText: {
    color: "white",
    fontSize: 30,
  },
});
