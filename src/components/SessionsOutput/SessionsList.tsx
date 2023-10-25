import { FlatList } from 'react-native';

import SessionItem from './SessionItem';

type SessionItemType = {
    id: string;
    description: string;
    totalShots: number;
    timeElapsed: string;
    date: string;
  };

function renderSessionItem(itemData: { item: SessionItemType }){ // use SessionItemType instead of any
    return <SessionItem {...itemData.item} />
}

function SessionsList({ sessions }: { sessions: SessionItemType[]  }){ // use SessionItemType[] instead of SessionItem[]
    return(
        <FlatList 
            data={sessions}
            renderItem={renderSessionItem}
            keyExtractor={(item) => item.id}
        />
    )
}

export default SessionsList;