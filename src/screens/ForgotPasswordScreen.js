import {
  Image,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Pressable,
} from "react-native";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/PrimaryButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export function ForgotPasswordScreen() {
  return (
    <View>
      <Text>Back Button</Text>
      <View style={styles.primaryContainer}>
        <Text style={styles.text}>Forgot your password?</Text>
        <Text style={styles.text}>Please enter your email below.</Text>
        <View style={styles.containerInputBox}>
          <Text style={styles.text}>EMAIL</Text>
          <View style={styles.textInputView}>
            <TextInput style={styles.textInputText} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryContainer: {
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  containerInputBox: {
    justifyContent: "center" ,
    margin: 10,
    marginHorizontal: 30,
  },
  textInputView: {
    justifyContent: 'space-between',
    backgroundColor: Colors.primary500,
    padding: 10,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
});

export default ForgotPasswordScreen;
