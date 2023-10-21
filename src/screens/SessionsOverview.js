import { View, Text } from "react-native"

import SessionItem from "../components/SessionsOutput/SessionItem";

function SessionsOverview(){
    return(
        <View>
            <Text>Session Overview</Text>
            <SessionItem />
        </View>
    )
}

export default SessionsOverview;