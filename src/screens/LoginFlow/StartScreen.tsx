import {
  Image,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  SafeAreaView
} from "react-native";
import {GlobalStyles} from '../../constants/Colors'
import PrimaryButton from "../../components/PrimaryButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import LinearGradient from 'expo-linear-gradient';

export function StartScreen( navigation: any ) {
  // State variable to hold the password
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // return (
// //     <LinearGradient
// //       colors = {[GlobalStyles.colors.primary100, GlobalStyles.colors.primary500 ]}
// //       style={styles.rootScreen}
// //     >
// //       <SafeAreaView style={styles.rootScreen}>
// //       <View style={styles.container}>
// //       <View style={styles.imgContainer}>
// //         <Image
// //           source={require("../../assets/IcecapLogoWhite.png")}
// //           style={styles.logo}
// //         ></Image>
// //       </View>

// //       <View style={styles.loginFieldContainer}>
// //         <View style={styles.containerInputBox}>
// //           <Text style={styles.text}>EMAIL</Text>
// //           <View style={styles.textInputView}>
// //             <TextInput style={styles.textInputText} />
            
// //           </View>
// //         </View>

// //         <View style={styles.containerInputBox}>
// //           <Text style={styles.text}>PASSWORD</Text>
// //           <View style={styles.textInputView}>
// //             <TextInput
// //               style={styles.textInputText}
// //               secureTextEntry={!showPassword}
// //             />
// //             <MaterialCommunityIcons
// //               name={showPassword ? "eye-off" : "eye"}
// //               size={24}
// //               color="#aaa"
// //               style={styles.icon}
// //               onPress={toggleShowPassword}
// //             />
// //           </View>
// //         </View>

// //         <Text style={styles.buttonText}>FORGOT YOUR PASSWORD?</Text>
// //         <PrimaryButton>
// //           <Text>LOG IN</Text>
// //         </PrimaryButton>
// //       </View>

// //       <View style={styles.createAccountContainer}>
// //         <Text style={styles.infoText}>Don't have an account? Sign up!</Text>
// //         <PrimaryButton>
// //           <Text>CREATE ACCOUNT</Text>
// //         </PrimaryButton>
// //       </View>

// //       <View style={styles.helpContainer}>
// //         <Text style={styles.buttonText}>SETUP INSTRUCTIONS</Text>
// //         <Text style={styles.buttonText}>CAN'T LOGIN? EMAIL SUPPORT</Text>
// //       </View>
// //     </View>
        
// //       </SafeAreaView>
// // </LinearGradient>
    
//   );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
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
    color: GlobalStyles.colors.accent500,
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: "center",
    marginTop: 10,
  },
  text: {
    color: GlobalStyles.colors.accent500,
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textInputView: {
    justifyContent: "space-between",
    backgroundColor: GlobalStyles.colors.primary500,
    // backgroundColor: 'red',
    padding: "5%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  textInputText: {
    color: "white",
    flex: 1,
  },
});

export default StartScreen;

