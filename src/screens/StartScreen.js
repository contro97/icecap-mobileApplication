import { SafeAreaView, Image, Text, Button, View, TextInput, StyleSheet } from "react-native";
import Colors from '../constants/Colors'
import Input from "../components/Input";

export function StartScreen({ navigation }) {
  return (
    
      <SafeAreaView>
        <View>
          <Image 
          source={require('../../assets/IcecapLogoWhite.png')}
          style={styles.logo}
          >
          </Image>
        </View>
        <Input placeholder="EMAIL ADDRESS"></Input>
        <Input placeholder="PASSWORD"></Input>
        <Button title="Forgot Password"></Button>
        <Button title="Login"></Button>
        <Button title="Sign Up"></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo:{
    width: 100,
    height: 225,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 50  

  }
});

export default StartScreen;
