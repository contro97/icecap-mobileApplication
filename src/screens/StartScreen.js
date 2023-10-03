import {
  Image,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  TextInput,
} from "react-native";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/PrimaryButton";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export function StartScreen({ navigation }) {
  // State variable to hold the password
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../assets/IcecapLogoWhite.png")}
          style={styles.logo}
        ></Image>
      </View>

      <View style={styles.loginFieldContainer}>
        
        <View style={styles.containerInputBox}>
          <Text style={styles.text}>EMAIL</Text>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInputText}              
            />            
          </View>
        </View>

        <View style={styles.containerInputBox}>
          <Text style={styles.text}>PASSWORD</Text>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInputText}
              secureTextEntry={!showPassword} 
              backgroundColor='blue'
            />
            <MaterialCommunityIcons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color="#aaa"
                style={styles.icon}
                onPress={toggleShowPassword}
                backgroundColor='red'
              />
          </View>
        </View>

        <Text style={styles.buttonText}>FORGOT YOUR PASSWORD?</Text>
        <PrimaryButton>
          <Text>LOG IN</Text>
        </PrimaryButton>
      </View>

      <View style={styles.createAccountContainer}>
        <Text style={styles.infoText}>Let's get setup for success.</Text>
        <PrimaryButton>
          <Text>CREATE ACCOUNT</Text>
        </PrimaryButton>
      </View>

      <View style={styles.helpContainer}>
        <Text style={styles.buttonText}>SETUP INSTRUCTIONS</Text>
        <Text style={styles.buttonText}>CAN'T LOGIN? EMAIL SUPPORT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  imgContainer: {
    flex: 1.5,
    // backgroundColor: 'red',
    justifyContent: "center",
  },
  loginFieldContainer: {
    flex: 2,
    // backgroundColor: 'blue',
    justifyContent: "center",
  },
  createAccountContainer: {
    flex: 1,
    // backgroundColor: 'green',
  },
  helpContainer: {
    flex: 1,
    alignSelf: "center",
    // backgroundColor: 'purple',
    position: "absolute",
    bottom: 0,
  },
  containerInputBox: {
    justifyContent: "center",
    margin: 10,
    marginHorizontal: 30,
  },
  logo: {
    width: 60,
    height: 130,
    alignSelf: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: "center",
    marginTop: 10,
  },
  infoText: {
    color: Colors.accent500,
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: "center",
    marginTop: 10,
  },
  text: {
    color: Colors.accent500,
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textInputView: {
    justifyContent: 'space-between',
    backgroundColor: Colors.primary500,
    padding: 10,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  textInputText: {
    color: "white",
  },
  icon: {
    justifyContent: 'flex-end'
},
});

export default StartScreen;
