import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';


function SessionDetails({ route, navigation }){

    const selectedSessionId = route.params?.sessionId;
    
    return(
        <View>
            <Text>Session Details: {selectedSessionId}</Text>
        </View>
    )

}

export default SessionDetails;