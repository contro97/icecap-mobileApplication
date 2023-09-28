import { SafeAreaView, Image, Text, Button, View, TextInput, StyleSheet } from "react-native";
import Colors from '../constants/Colors'
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

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
        <Text style={styles.infoText}>FORGOT YOUR PASSWORD?</Text>    
        <PrimaryButton>
          <Text>LOG IN</Text>
        </PrimaryButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo:{
    width: 60,
    height: 130,
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 100  
  },
  infoText:{
    color: Colors.accent500,
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
    marginTop: 10
  }  
});

export default StartScreen;
