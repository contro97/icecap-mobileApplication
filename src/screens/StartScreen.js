import {
  SafeAreaView,
  Image,
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import {widthPercentageToDP,  heightPercentageToDP } from 'react-native-responsive-screen';

export function StartScreen({ navigation }) {
  
  return (
    <View style={styles.container}>

      <View style={styles.imgContainer}>
        <Image
          source={require("../../assets/IcecapLogoWhite.png")}
          style={styles.logo}
        ></Image>
      </View>

      <View style={styles.loginFieldContainer}>
        <Input placeholder="EMAIL ADDRESS"></Input>
        <Input placeholder="PASSWORD"></Input>
        <Text style={styles.buttonText}>FORGOT YOUR PASSWORD?</Text>
        <PrimaryButton>
          <Text>LOG IN</Text>
        </PrimaryButton>
      </View>


      <View style={styles.createAccountContainer}>
        <Text style={styles.infoText}>Let's get setup for success</Text>
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
    flex: 1
  },
  imgContainer:{
    marginTop: heightPercentageToDP(7.5),
    backgroundColor: 'red'
    
  },
  loginFieldContainer: {
    marginTop: heightPercentageToDP(12.5),
    backgroundColor: 'blue',
  },
  createAccountContainer:{
    marginTop: heightPercentageToDP(2.5),
    backgroundColor: 'green',
  },
  helpContainer: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    marginBottom: heightPercentageToDP(1),
    marginTop: heightPercentageToDP(5),
    backgroundColor: 'purple',
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
});

export default StartScreen;
