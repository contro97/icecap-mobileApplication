import { TextInput, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export function Input({ placeholder, ...rest }) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{placeholder}</Text>
        <View style={styles.textInputView}>
        <TextInput></TextInput>
        </View>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({ 
    container:{
        justifyContent: 'center',
        margin: 10,
        marginHorizontal: 30
    },
    text: {
        color: Colors.accent500 ,
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textInputView: {
        backgroundColor: Colors.primary500,
        padding: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 1, 
    },
    TextInput: {
        height: 50,
        width: 50,
    }
})