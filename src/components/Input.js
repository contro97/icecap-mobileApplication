import { TextInput, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function Input({ placeholder, secureTextBool,...rest }) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{placeholder}</Text>
        <View style={styles.textInputView}>
        <TextInput 
        style={styles.textInputText}
        secureTextEntry={secureTextBool}
        >
            <MaterialCommunityIcons
                    // name={showPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color="#white"
                    style={styles.icon}
                    // onPress={toggleShowPassword}
                />
        </TextInput>
        </View>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({ 
    containerInputBox:{
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
    textInputText: {
        color: 'white'
    }
})