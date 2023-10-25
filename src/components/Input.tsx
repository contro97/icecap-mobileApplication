import { TextInput, View, Text  } from "react-native";

function Input({label, textInputConfig} : {label: any, textInputConfig:any}){
    return(
        <View>
            <Text>{label}</Text>
            <TextInput 
            {...textInputConfig}
            />
        </View>
    )
}

export default Input;