import { View } from 'react-native'

import SessionsList from './SessionsList';
import SessionsSummary from './SessionsSummary';

const DUMMY_SESSIONS = [
    {
        id: 's1',
        description: 'SHOOTING',
        totalShots: 50,
        timeElapsed: '0:43',
        date: 'Oct 20, 1997'
    },
    {
        id: 's2',
        description: 'SHOOTING',
        totalShots: 100,
        timeElapsed: '2:00',
        date: 'Dec 25, 2022'
    },
    {
        id: 's3',
        description: 'SHOOTING',
        totalShots: 1,
        timeElapsed: '0:01',
        date: 'Dec 26, 2022'
    },
    {
        id: 's4',
        description: 'SHOOTING',
        totalShots: 1,
        timeElapsed: '0:01',
        date: 'Dec 26, 2022'
    },
    {
        id: 's5',
        description: 'SHOOTING',
        totalShots: 1,
        timeElapsed: '0:01',
        date: 'Dec 26, 2022'
    },
    {
        id: 's6',
        description: 'SHOOTING',
        totalShots: 1,
        timeElapsed: '0:01',
        date: 'Dec 26, 2022'
    },
    {
        id: 's7',
        description: 'SHOOTING',
        totalShots: 1,
        timeElapsed: '0:01',
        date: 'Dec 26, 2022'
    },
    {
        id: 's8',
        description: 'SHOOTING',
        totalShots: 1,
        timeElapsed: '0:01',
        date: 'Dec 26, 2022'
    },
    {
        id: 's9',
        description: 'SHOOTING',
        totalShots: 1,
        timeElapsed: '0:01',
        date: 'Dec 26, 2022'
    },
]

function SessionsOutput(){
    return(
        <View>
            <SessionsSummary sessions={DUMMY_SESSIONS} sessionsPeriod="All Time" />
            <SessionsList sessions={DUMMY_SESSIONS} />
        </View>
    )
}

export default SessionsOutput;