import { SafeAreaView, Text, Button, View, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from '../constants/Colors'
import Input from "../components/Input";

export function StartScreen({ navigation }) {
  return (
    
      <SafeAreaView>
        <Input placeholder="USERNAME"></Input>
        <Input placeholder="PASSWORD"></Input>
        <Button title="Login"></Button>
        <Button title="Sign Up"></Button>    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  startScreen: {

  }
});

export default StartScreen;
