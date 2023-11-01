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
    />
  );
}

export default SessionsList;

