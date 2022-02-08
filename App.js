import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import NavigationMain from "./src/navigation";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Theme from "./Theme";
export default function App(props) {
  let [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("./assets/Montserrat/Montserrat-Bold.ttf"),
    "Montserrat-SemiBold": require("./assets/Montserrat/Montserrat-SemiBold.ttf"),
    "Montserrat-Medium": require("./assets/Montserrat/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("./assets/Montserrat/Montserrat-Regular.ttf"),
    "Montserrat-Italic": require("./assets/Montserrat/Montserrat-Italic.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} barStyle="dark-content" backgroundColor={Theme.white} translucent={false} />
        <NavigationMain />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white
  },
});