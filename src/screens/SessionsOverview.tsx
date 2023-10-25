import { View, Text } from "react-native"

import SessionsOutput from "../components/SessionsOutput/SessionsOutput";

const DUMMY_SESSIONS = [
    {
        id: 's1',
        description: 'SHOOTING',
        totalShots: 50,
        timeElapsed: 43,
        date: 'Oct 20, 1997'
    },
    {
        id: 's2',
        description: 'SHOOTING',
        totalShots: 100,
        timeElapsed: 120,
        date: 'Dec 25, 2022'
    },
    {
        id: 's3',
        description: 'SHOOTING',
        totalShots: 1,
        timeElapsed: 1,
        date: 'Dec 26, 2022'
    },
    {
        id: 's4',
        description: 'SHOOTING',
        totalShots: 1,
        timeElapsed: 1,
        date: 'Dec 26, 2022'
    },
    {
        id: 's5',
        description: 'SHOOTING',
        totalShots: 1,
        timeElapsed: 1,
        date: 'Dec 26, 2022'
    },
    {
        id: 's6',
        description: 'SHOOTING',
        totalShots: 1,
        timeElapsed: 1,
        date: 'Dec 26, 2022'
    },
    {
        id: 's7',
        description: 'SHOOTING',
        totalShots: 1,
        timeElapsed: 1,
        date: 'Dec 26, 2022'
    },
    {
        id: 's8',
        description: 'SHOOTING',
        totalShots: 1,
        timeElapsed: 1,
        date: 'Dec 26, 2022'
    },
    {
        id: 's9',
        description: 'SHOOTING',
        totalShots: 1,
        timeElapsed: 1,
        date: 'Dec 26, 2022'
    },
]

function SessionsOverview(){
    
    return(
        <View>
            <SessionsOutput sessions={DUMMY_SESSIONS} fallbackText="No sessions yet."/>            
        </View>
    )
}

export default SessionsOverview;