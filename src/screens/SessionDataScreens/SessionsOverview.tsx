import { View, Text } from "react-native";

import SessionsOutput from "../../components/SessionsOutput/SessionsOutput";
import { SessionType } from "src/types/SessionType";
import { SafeAreaView, StyleSheet } from "react-native";
import { DUMMY_SESSIONS } from "../../data/data";


function SessionsOverview(sessionData: SessionType[]) {
  return (

    <SafeAreaView style={styles.container}>
      <SessionsOutput
        sessions={DUMMY_SESSIONS}
        fallbackText="No sessions yet."
      />    
    </SafeAreaView>
      
  );
}

export default SessionsOverview;

const styles = StyleSheet.create({ 
  container: {
    flex: 1
  }

})