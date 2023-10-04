import { StartScreen, ForgotPasswordScreen } from "./src/screens";
import AdjustScreen from "./src/screens/AdjustScreen";


import { useWindowDimensions, SafeAreaView, View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./src/constants/Colors";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-screen';


export default function App() {

  return (
    <LinearGradient
      colors={[Colors.primary600, Colors.primary800]}
      style={styles.rootScreen}
    >
      <SafeAreaView style={styles.rootScreen}>
        {/* <StartScreen /> */}
        <ForgotPasswordScreen />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
