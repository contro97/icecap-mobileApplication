import { View, Text, StyleSheet } from "react-native";

import SessionsList from "./SessionsList";
import SessionsSummary from "./SessionsSummary";

import { SessionType } from "src/types/SessionType";
import { GlobalStyles } from "../../constants/Colors";

function SessionsOutput({sessions, fallbackText} : {sessions: SessionType[], fallbackText: string}) {
  let content = <Text>{fallbackText}</Text>;

  let periods = ["All Time", "Last 30 Days", "Last 7 Days", "Today"];
  
    if (sessions.length > 0) {
      content = <SessionsList sessions={sessions} />;
    }

  return (
    <View style={styles.sessionsOutput}>
      <SessionsSummary sessions={sessions} sessionsPeriod={periods} />
        {content}  
    </View>
  );
}

export default SessionsOutput;

const styles = StyleSheet.create({ 
  sessionsOutput: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary50
  },
})
