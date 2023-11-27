import { View, Text, Button } from "react-native"
import {AuthContext} from "../state/auth-context"
import { useContext } from "react";


function Settings(){
    const authCtx = useContext(AuthContext);

    return(
        <View>
            <Text>Settings</Text>
            <Button title="Logout" onPress={() => {
                console.log("logout pressed");
                console.log(authCtx);
                authCtx.logout}}/>
        </View>
    )
}

export default Settings;