import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { router } from "expo-router";
import SvgComponent from "@/components/icons/TV";
import CameraComponent from "@/components/icons/Camera";

const COLORS = {
  gradientStart: "#FC4B92",
  gradientEnd: "#EA0F57",
  textPrimary: "#000",
  textSecondary: "#fff",
};

const FONT_FAMILY = "Euclid";



const goToSignIn = () => {
  router.push("login");
};



export default function Sign() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Animatable.View
      animation="fadeIn"
      direction="normal"
      delay={600}
      style={styles.container}
    >
      <View style={styles.iconContainerTop}>
        <CameraComponent />
      </View>
      <Animatable.View animation="bounceIn" direction="normal" delay={1000}>
        <LinearGradient
          colors={[COLORS.gradientStart, COLORS.gradientEnd]}
          style={styles.button}
          start={[0, 0]}
          end={[1, 1]}
        >
          <TouchableOpacity
            style={[styles.buttonInner, isPressed && styles.buttonPressed]}
            onPress={() => router.push("signup")}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            accessibilityLabel="Create Account Button"
          >
            <Text style={styles.buttonText}>Créer un compte</Text>
          </TouchableOpacity>
        </LinearGradient>
      </Animatable.View>

      <View style={styles.centeredTextContainer}>
        <Text style={styles.orText}>OU</Text>
        <TouchableOpacity onPress={goToSignIn}>
          <Text style={styles.linkText}>Je possède déjà un compte</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainerBottom}>
        <SvgComponent />
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  button: {
    borderRadius: 25,
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    elevation: 5,
  },
  buttonInner: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  buttonText: {
    fontFamily: FONT_FAMILY,
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: "bold",
  },
  centeredTextContainer: {
    alignItems: "center",
  },
  orText: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    color: COLORS.textPrimary,
    marginBottom: 10,
  },
  linkText: {
    fontFamily: FONT_FAMILY,
    fontSize: 14,
    fontWeight: "100",
    marginTop: 10,
    color: COLORS.textPrimary,
    textDecorationLine: "underline",
  },
  iconContainerTop: {
    position: "absolute",
    top: 40,
    right: 60,
    alignItems: "center",
  },
  iconContainerBottom: {
    position: "absolute",
    bottom: 100,
    alignItems: "center",
  },
});
