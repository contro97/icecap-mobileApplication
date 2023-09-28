import { StartScreen } from "./src/screens";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./src/constants/Colors";

export default function App() {
  return (
    <LinearGradient
      colors={[Colors.primary600, Colors.primary800]}
      style={styles.rootScreen}
    >
      <StartScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
