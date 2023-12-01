import { View, Text, StyleSheet, ScrollView} from "react-native";

import SessionsList from "./SessionsList";
import SessionsSummary from "./SessionsSummary";

import { SessionType } from "src/types/SessionType";
import { GlobalStyles } from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import DateRangeComponent from "../DateRange";
import { SafeAreaView } from "react-native-safe-area-context";

function SessionsOutput({sessions, fallbackText} : {sessions: SessionType[], fallbackText: string}) {
  let content = <Text style={styles.noDataText}>{fallbackText}</Text>;
  
  
    if (sessions.length > 0) {
      content = <SessionsList sessions={sessions} />;
    }

  return (
      
    <ScrollView>
      <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Shot History</Text>
      </View>
      
      
      <SessionsSummary sessions={sessions} />
      <DateRangeComponent />      
        {content}  
      
    </ScrollView>
    
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
  noDataText: {
    textAlign: "center",
    fontSize: 18,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius:50,
    marginHorizontal: 100,
    marginTop: 54,
  },
  titleText:{
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary50,
  }
})
