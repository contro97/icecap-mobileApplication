import { FlatList, StyleSheet, View } from "react-native";

import SessionItem from "./SessionItem";

import { SessionType } from "src/types/SessionType";

function renderSessionItem(itemData: { item: SessionType }) {
  // use SessionItemType instead of any
  return <SessionItem {...itemData.item} />;
}

function SessionsList({ sessions }: { sessions: SessionType[] }) {
  // use SessionItemType[] instead of SessionItem[]
  return (
    <FlatList
      data={sessions}
      renderItem={renderSessionItem}
      keyExtractor={(item) => item.sessionid}
      style={styles.sessionsList}
    />
  );
}

export default SessionsList;

const styles = StyleSheet.create({
  sessionsList: {
    flex: 1,
    paddingHorizontal: 24,
    
    paddingBottom: 0,
  },
});

