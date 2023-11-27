import {
  Image,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  SafeAreaView,
  Alert,
} from "react-native";
import { GlobalStyles } from "../../constants/Colors";
import PrimaryButton from "../../components/PrimaryButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";

import AuthContent from "../../components/Auth/AuthContent";
import { AuthContext } from "../../state/auth-context";

import { loginUser } from "../../../util/auth";
import LoadingOverlay from "../../components/ui/LoadingOverlay";

function LoginScreen() {
  // State variable to hold the password
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }: { email: string, password: string;}) {
    setIsAuthenticating(true);
    try {
      const token = await loginUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Login Failed",
        "Could not log you in. Please check your credentials or try again later."
      );
      console.log(error);
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging In..." />;
  }
  return (
    <LinearGradient
      colors={[GlobalStyles.colors.primary500, GlobalStyles.colors.primary200]}
      style={styles.rootScreen}
    >
      <SafeAreaView style={styles.rootScreen}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../../../assets/IcecapLogoWhite.png")}
            style={styles.logo}
          ></Image>
        </View>
        <AuthContent isLogin={true} onAuthenticate={loginHandler} />

        {/* <View style={styles.loginFieldContainer}> 
        <View style={styles.containerInputBox}>
          <Text style={styles.text}>EMAIL</Text>
          <View style={styles.textInputView}>
            <TextInput style={styles.textInputText} />
            
          </View>
        </View> 

        <View style={styles.containerInputBox}>
          <Text style={styles.text}>PASSWORD</Text>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInputText}
              secureTextEntry={!showPassword}
            />
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              // style={styles.icon}
              onPress={toggleShowPassword}
            />
          </View>
        </View>

        <Text style={styles.buttonText}>FORGOT YOUR PASSWORD?</Text>
        <PrimaryButton
        onPress={() => navigation.navigate('Sessions Overview')}
        >
          <Text>LOG IN</Text>
        </PrimaryButton>
      </View>

      <View style={styles.createAccountContainer}>
        <Text style={styles.infoText}>Don't have an account? Sign up!</Text>
        <PrimaryButton
        onPress={() => console.log('Create Account? btn pressed')}
        >
          <Text>CREATE ACCOUNT</Text>
        </PrimaryButton>
      </View>

      <View style={styles.helpContainer}>
        <Text style={styles.buttonText}>SETUP INSTRUCTIONS</Text>
        <Text style={styles.buttonText}>CAN'T LOGIN? EMAIL SUPPORT</Text>
      </View>
    </View>  */}
      </SafeAreaView>
    </LinearGradient>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  imgContainer: {
    flex: 0.5,
    justifyContent: "center",
  },
  loginFieldContainer: {
    flex: 2,
    justifyContent: "center",
  },
  createAccountContainer: {
    flex: 1,
  },
  helpContainer: {
    flex: 1,
    alignSelf: "center",
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
    color: GlobalStyles.colors.primary500,
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
