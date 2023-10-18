import { TextInput, View } from "react-native";

import { Input } from "./Input"

function LoginForm(){
    return(
        <View>
            <Input label="Description" textInputConfig={{placeholder: "Description"}}/>            
        </View>
    )
}

export default LoginForm;