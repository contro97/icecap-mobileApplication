import { View, Text } from "react-native"

import SessionItem from "../components/SessionsOutput/SessionItem";
import SessionsOutput from "../components/SessionsOutput/SessionsOutput";

function SessionsOverview(){
    return(
        <View>
            <SessionsOutput />            
        </View>
    )
}

export default SessionsOverview;