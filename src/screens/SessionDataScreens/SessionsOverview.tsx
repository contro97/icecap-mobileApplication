import { View, Text } from "react-native";

import moment from "moment";

import SessionsOutput from "../../components/SessionsOutput/SessionsOutput";
import { SessionType } from "src/types/SessionType";
import { SafeAreaView, StyleSheet } from "react-native";
import { DUMMY_SESSIONS } from "../../data/data";
import { GlobalStyles } from "../../../src/constants/Colors";

import DateRangeComponent from "../../components/DateRange";
import { LinearGradient } from "expo-linear-gradient";
import { all } from "axios";
import { useState } from "react";


function SessionsOverview(sessionData: SessionType[]) {


  return (
    
    
    <LinearGradient colors={[GlobalStyles.colors.primary50, GlobalStyles.colors.primary200]} style={styles.container}>  
      <SessionsOutput
        sessions={DUMMY_SESSIONS}
        fallbackText="No sessions yet."
      />
      </LinearGradient>
     
    
  );
}

export default SessionsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
