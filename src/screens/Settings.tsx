import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import { AuthContext } from "../state/auth-context";
import { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { GlobalStyles } from "../../src/constants/Colors";

function Settings() {
  const authCtx = useContext(AuthContext);

  return (
    <LinearGradient
      colors={[GlobalStyles.colors.primary500, GlobalStyles.colors.primary200]}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
      <Button title="My Account" color="white"></Button>
      <Button title="Device Settings" color="white"></Button>
      <Button title="Train AI Model" color="white"></Button>    
      <Button title="User Guide" color="white" ></Button>
      <Button title="Logout" onPress={authCtx.logout} color="white"/>        
      </SafeAreaView>
    </LinearGradient>
          
    
    
  );
}

export default Settings;

const styles = StyleSheet.create({
  container:{
    flex: 1,    
    justifyContent: "center",
  }
});
