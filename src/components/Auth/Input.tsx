import { View, Text, TextInput, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/Colors";

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}: {
  label: string;
  keyboardType: any;
  secure: boolean;
  onUpdateValue: any;
  value: string;
  isInvalid: boolean;
}) {
    return(
        <View style={styles.inputContainer}>
            <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
                {label}
            </Text>
            <TextInput
                style={[styles.input, isInvalid && styles.inputInvalid]}
                autoCapitalize='none'
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
                />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({ 
    inputContainer: {
        marginVertical: 8
    },    
    label: {
        color: 'white',
        marginBottom: 4
    },
    labelInvalid: {
        color: GlobalStyles.colors.error500
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 6,
        fontSize: 16
    },
    inputInvalid: {
        backgroundColor: GlobalStyles.colors.error50
    }
})