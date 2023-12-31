import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from '../ui/Button'
import AuthForm from "./AuthForm";
import { GlobalStyles } from "../../constants/Colors";

function AuthContent({
  isLogin,
  onAuthenticate,
}: {
  isLogin: any;
  onAuthenticate: any;
}) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,    
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");      
    }
  }

  function submitHandler(credentials: any) {
    let { email, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.length > 0 && email.includes("@");
    const passwordIsValid = password.length > 0 && password.length >= 6;    
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin &&  !passwordsAreEqual)
    ) {
      Alert.alert("Invalid input", "Please check your credentials in the form");
      setCredentialsInvalid({
        email: !emailIsValid,        
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({email, password});
  }

  return(
    <View style={styles.authContent}>
        <AuthForm 
            isLogin={isLogin}
            onSubmit={submitHandler}
            credentialsInvalid={credentialsInvalid}
        />
        <View style={styles.buttons}>
            <Button onPress={switchAuthModeHandler}>
                {isLogin ? "Switch to Signup" : "Switch to Login"}
            </Button>    
        </View>

    </View>
  )
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
});
