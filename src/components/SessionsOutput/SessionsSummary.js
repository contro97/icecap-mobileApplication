import { View, Text } from 'react-native'

function SessionsSummary({sessions, sessionsPeriod}){
    
    const shotSum = sessions.reduce((sum, session) => {
        return sum + session.totalShots
    }, 0)

    return(
        <View>
            <Text>{sessionsPeriod}</Text>
            <Text>Total Shots: {shotSum}</Text>
        </View>
    )
}

export default SessionsSummary;