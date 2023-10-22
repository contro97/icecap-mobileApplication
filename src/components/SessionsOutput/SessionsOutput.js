import { View, Text, StyleSheet } from "react-native";

import SessionsList from "./SessionsList";
import SessionsSummary from "./SessionsSummary";



function SessionsOutput({sessions, fallbackText}) {
  let content = <Text>{fallbackText}</Text>;

  

    if (sessions.length > 0) {
      content = <SessionsList sessions={sessions} />;
    }

    

  return (
    <View>
      <SessionsSummary sessions={sessions} sessionsPeriod="All Time" />
      {content}
    </View>
  );
}

export default SessionsOutput;
