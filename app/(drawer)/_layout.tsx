import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import HelpIconSvg from "@/components/icons/Help";
import MenuIconSVG from "@/components/icons/MenuIcon";
import LogoComponent from "@/components/icons/logo";





// Custom Drawer Content Component
function CustomDrawerContent(props: any) {
  return (
    <LinearGradient
      colors={["#F36C9D", "#F36C9D", "#F24987", "#F24987"]}
      style={{ flex: 1 }}
    >
      <DrawerContentScrollView
        contentContainerStyle={styles.drawerContent}
        {...props}
      >
        <View style={styles.linkContainer}>
          <DrawerItem
            label="Aide"
            labelStyle={styles.drawerLabel}
            icon={({ color, size }) => <HelpIconSvg />}
            onPress={() => props.navigation.navigate("help")}
          />
        </View>
      </DrawerContentScrollView>
      <View style={styles.iconRow}>
        <TouchableOpacity>
          <FontAwesome name="instagram" size={30} color="#fff" /> 
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="facebook" size={30} color="#fff" />
        </TouchableOpacity> 
        <TouchableOpacity>
          <FontAwesome name="youtube" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="twitter" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}




const CustomHeaderRight = () => {
  return (
    <View style={styles.headerRightContainer}>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};






// Drawer Layout Component
export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({ navigation }) => ({
          headerLeft: (props) => (
            <MenuIconSVG
              style={styles.iconLeft}
              onPress={navigation.toggleDrawer}
            />
          ),
        })}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            swipeEnabled: true,
            drawerType: "front",
            drawerLabel: "Accueil",
            title: "overview",
            headerTintColor: "", // Customize this color as needed
            headerTitleAlign: "center",
            headerShadowVisible: true,
            headerLeftLabelVisible: true,
            headerTitle: () => <LogoComponent />,
            headerStyle: styles.header,
            headerRight: () => <CustomHeaderRight />,
            overlayColor: "rgba(0, 0, 0, 0.5)", // Ensures the overlay is present
            swipeEdgeWidth: 20, // Width of the area at the edge of the screen where the gesture should be recognized
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}





const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff", // Customize this color as needed
    shadowColor:'#ffffff'
    // Add other styles as needed
  },
  drawerContent: {
    flex: 1,
    justifyContent: "center",
  },
  iconLeft: {
    marginLeft: 20,
  },
  linkContainer: {
    marginTop: 100,
  },
  drawerLabel: {
    color: "#fff",
    fontFamily: "Euclid",
    fontSize: 20,
  },
  headerRightContainer: {
    flexDirection: "row",
    marginRight: 10,
  },
  iconButton: {
    marginLeft: 10,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginBottom: 90,
  },
});
