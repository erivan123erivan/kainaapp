import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Checkbox from "expo-checkbox";
import * as Animatable from "react-native-animatable"; // Import Animatable
import LogoComponent from "@/components/icons/logo";
import PhotoPink from "@/assets/icons/PhotoPink";
import { router } from "expo-router";
import { useFonts } from "expo-font";

// Define types for form state
type FormState = {
  name: string;
  email: string;
  birthDate: string;
  password: string;
  verifyPassword: string;
  country: string;
  acceptTerms: boolean;
};

const Signup = () => {
  const [isChecked, setChecked] = useState<boolean>(false); // Type for isChecked
  const [formState, setFormState] = useState<FormState>({
    // Type for formState
    name: "",
    email: "",
    birthDate: "",
    password: "",
    verifyPassword: "",
    country: "",
    acceptTerms: false,
  });

  const [focusedInput, setFocusedInput] = useState<string | null>(null); // Type for focusedInput

  const handleInputChange = (field: keyof FormState, value: string | boolean) => {
    setFormState({ ...formState, [field]: value });
  };

  const handleFocus = (input: string) => {
    setFocusedInput(input);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleSubmit = () => {
    router.push("(drawer)");
  };

  const handleTermsPress = () => {
    router.push("terms");
  };

  return (
    <ImageBackground
      source={require("../components/Animations/IMAGE.png")} // Specify your background image path
      style={styles.backgroundImage}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Animatable.View
            animation="fadeIn"
            duration={2000}
            style={[
              styles.logoContainer,
              Platform.select({
                ios: { marginTop: 100 }, // Example value for iOS
                android: { marginTop: 140 }, // Example value for Android
              }),
            ]}
          >
            <LogoComponent />
          </Animatable.View>
          <Animatable.View animation="fadeIn" style={styles.formContainer}>
            <TouchableOpacity
              style={styles.photoPicker}
              onPress={() => console.log("Pick a photo")}
            >
              <PhotoPink />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Créer un compte</Text>
            </View>
            <TextInput
              style={[styles.input, focusedInput === "name" && styles.inputFocused]}
              placeholder="Nom"
              value={formState.name}
              onChangeText={(text) => handleInputChange("name", text)}
              onFocus={() => handleFocus("name")}
              onBlur={handleBlur}
            />
            <TextInput
              style={[styles.input, focusedInput === "email" && styles.inputFocused]}
              placeholder="Email"
              value={formState.email}
              onChangeText={(text) => handleInputChange("email", text)}
              keyboardType="email-address"
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
            />
            <TextInput
              style={[styles.input, focusedInput === "birthDate" && styles.inputFocused]}
              placeholder="Date de naissance"
              value={formState.birthDate}
              onChangeText={(text) => handleInputChange("birthDate", text)}
              onFocus={() => handleFocus("birthDate")}
              onBlur={handleBlur}
            />
            <TextInput
              style={[styles.input, focusedInput === "password" && styles.inputFocused]}
              placeholder="Mot de passe"
              value={formState.password}
              onChangeText={(text) => handleInputChange("password", text)}
              secureTextEntry
              onFocus={() => handleFocus("password")}
              onBlur={handleBlur}
            />
            <TextInput
              style={[
                styles.input,
                focusedInput === "verifyPassword" && styles.inputFocused,
              ]}
              placeholder="Vérifier le mot de passe"
              value={formState.verifyPassword}
              onChangeText={(text) => handleInputChange("verifyPassword", text)}
              secureTextEntry
              onFocus={() => handleFocus("verifyPassword")}
              onBlur={handleBlur}
            />
            <TextInput
              style={[styles.input, focusedInput === "country" && styles.inputFocused]}
              placeholder="Pays"
              value={formState.country}
              onChangeText={(text) => handleInputChange("country", text)}
              onFocus={() => handleFocus("country")}
              onBlur={handleBlur}
            />

            <View style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
              />
              <TouchableOpacity onPress={handleTermsPress}>
                <Text style={styles.checkboxText}>
                  J'accepte les{" "}
                  <Text style={styles.linkText}>
                    conditions générales et la politique de confidentialité
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <LinearGradient
          colors={["#ff7f7f", "#ff1493"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.buttonGradient}
        >
          <Text style={styles.buttonText}>Continuer</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 27,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  photoPicker: {
    alignItems: "center",
    marginBottom: 20,
  },
  formContainer: {
    width: "100%",
  },
  button: {
    position: "absolute",
    right: 30,
    bottom: 30,
  },
  buttonGradient: {
    paddingVertical: Platform.select({
      ios: 15,
      android: 10,
    }),
    paddingHorizontal: Platform.select({
      ios: 30,
      android: 25,
    }),
    borderRadius: Platform.select({
      ios: 50,
      android: 15,
    }),
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Okta",
    fontSize: 16,
  },
  titleContainer: {
    alignSelf: "flex-start", // Align to the start (left)
    marginBottom: 20,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 18,
    fontFamily: "Euclid",
    color: "#707070",
  },
  input: {
    backgroundColor: "#F3F3F3",
    fontFamily: "Euclid",
    height: 40,
    borderWidth: 2,
    borderColor: "#F3F3F3", // Default border color
    borderRadius: 7,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputFocused: {
    backgroundColor:'white',
    borderColor: "#F34282", // Pink border color when focused
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 8,
    borderRadius: 7,
  },
  checkboxText: {
    marginRight: Platform.select({
      ios: 20,
      android: 20,
    }),
    fontSize: 14,
    color: "#707070",
    fontFamily: "Euclid",
  },
  linkText: {
    textDecorationLine: "underline",
  },
});

export default Signup;
