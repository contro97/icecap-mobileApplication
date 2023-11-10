import { View, Text, FlatList, StyleSheet } from "react-native";
import { SessionType } from "src/types/SessionType";
import SessionData from "../../components/SessionsOutput/SessionData";
import SessionItem from "../../components/SessionsOutput/SessionItem";


import { MaterialCommunityIcons } from "@expo/vector-icons";

function SessionsSummary({ sessions }: { sessions: SessionType[] }) {
  const shotSum = sessions.reduce((sum: any, session: any) => {
    return sum + session.totalshots;
  }, 0);

  const practiceTimeSum = sessions.reduce((sum: any, session: any) => {
    return sum + session.sessiontime;
  }, 0);

  const rightHandTotal = sessions.reduce((sum: any, session: any) => {
    return sum + session.shotsright;
  }, 0);

  const leftHandTotal = sessions.reduce((sum: any, session: any) => {
    return sum + session.shotsleft;
  }, 0);

  function renderSessionItem(itemData: { item: SessionType }) {
    // use SessionItemType instead of any
    return <SessionItem {...itemData.item} />;
  }

  return (
    <>
      <View style={styles.container}>
        <Text>Total Shots: {shotSum}</Text>
        <Text>Practice Time: {practiceTimeSum}</Text>
      </View>
    </>
  );
}

export default SessionsSummary;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
