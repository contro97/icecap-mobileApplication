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
            source={require("../../../assets/ECDCrab.png")}
            style={styles.logo}
          ></Image>
          <Image
            source={require("../../../assets/ECDText.png")}
            style={styles.logo}
          ></Image>
          
        </View>
        <AuthContent isLogin={true} onAuthenticate={loginHandler} />
      </SafeAreaView>
    </LinearGradient>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imgContainer: { 
    flex: 0.6,
    justifyContent: "center",
    paddingTop: 50
  },
  logo: {
    alignSelf: "center",
    
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
  textInputText: {
    color: "white",
    flex: 1,
  },
});
