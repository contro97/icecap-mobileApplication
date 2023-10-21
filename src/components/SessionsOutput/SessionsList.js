import { FlatList } from 'react-native';

import SessionItem from './SessionItem';

function renderSessionItem(itemData){
    return <SessionItem {...itemData.item} />
}

function SessionsList({ sessions }){
    return(
        <FlatList 
            data={sessions}
            renderItem={renderSessionItem}
            keyExtractor={(item) => item.id}
        />
    )
}

export default SessionsList;