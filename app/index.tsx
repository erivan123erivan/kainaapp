import React, { useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-swiper";
import * as Animatable from "react-native-animatable";
import { Link, useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import LottieView from "lottie-react-native";

const Index: React.FC = () => {
  const animation = useRef<LottieView>(null);
  const [isPressed, setIsPressed] = useState(false);
  const router = useRouter();

  useFocusEffect(
    React.useCallback(() => {
      animation.current?.play();
    }, [])
  );

  return (
    <Swiper
      style={styles.wrapper}
      autoplay={true}
      autoplayTimeout={3}
      showsButtons={false}
    >
      <LinearGradient colors={["#FC4890", "#EB0F58"]} style={styles.slide1}>
        <Animatable.View
          animation="slideInLeft"
          duration={1000}
          style={styles.contentContainer}
        >
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 200,
              height: 200,
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require("../components/Animations/Animation - 1718117223109.json")}
          />
          <Text style={styles.txtbig}>
            Nos projets sont destinés prioritairement aux habitants des
            quartiers populaires de la ville de Montpellier
          </Text>
        </Animatable.View>
        <Animatable.View animation="fadeIn" delay={1200}>
          <TouchableOpacity
            style={[styles.btnbig, isPressed && styles.btnPressed]}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={() => router.push("/sign")}
          >
            <Text style={styles.btnText}>Continuer</Text>
          </TouchableOpacity>
        </Animatable.View>
      </LinearGradient>
      <LinearGradient colors={["#05F39C", "#00D1F0"]} style={styles.slide1}>
        <Animatable.View
          animation="slideInLeft"
          duration={1000}
          style={styles.contentContainer}
        >
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 200,
              height: 200,
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require("../components/Animations/Animation - 1718117316413.json")}
          />
          <Text style={styles.txtbig}>
            Tous nos projets audiovisuels sont organisés afin de favoriser la
            culture, de lutter contre les discriminations et de créer du lien
            social.
          </Text>
        </Animatable.View>
        <Animatable.View animation="fadeIn" delay={1200}>
          <TouchableOpacity
            style={[styles.btnbig, isPressed && styles.btnPressed]}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={() => router.push("/sign")}
          >
            <Text style={styles.btnText}>Continuer</Text>
          </TouchableOpacity>
        </Animatable.View>
      </LinearGradient>
      <LinearGradient colors={["#FBCC34", "#FE8AB4"]} style={styles.slide1}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../components/Animations/animation.json")}
        />
        <Animatable.View
          animation="slideInLeft"
          duration={1000}
          style={styles.contentContainer}
        >
          <Text style={styles.txtbig}>
            Vous pouvez suivre nos reportages et lire nos articles de chez vous
          </Text>
        </Animatable.View>
        <Animatable.View animation="fadeIn" delay={1200}>
          <TouchableOpacity
            style={[styles.btnbig, isPressed && styles.btnPressed]}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={() => router.push("/sign")}
          >
            <Text style={styles.btnText}>Continuer</Text>
          </TouchableOpacity>
        </Animatable.View>
      </LinearGradient>
    </Swiper>
  );
};




const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  contentContainer: {
    alignItems: "center",
  },
  txtbig: {
    color: "white",
    fontSize: 20,
    margin: 30,
    textAlign: "center",
    fontFamily: "Euclid",
  },
  btnbig: {
    backgroundColor: "white",
    borderRadius: Platform.select({
      ios: 25,
      android: 10,
    }),
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontFamily: "Euclid",
    marginTop: 20,
    shadowColor: Platform.select({
      ios: "white",
      android: "black",
    }),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: Platform.select({
      ios: 0,
      android: 5,
    }),
  },
  btnPressed: {
    opacity: 0.5,
    shadowColor: "pink",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  btnText: {
    fontFamily: "Okta",
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Index;
