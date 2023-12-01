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


function SessionsOverview(sessionData: SessionType[]) {
  const filteredSessions = DUMMY_SESSIONS.filter((session) => {
    const sessionDateObject = moment(
      session.endtime,
      "MM/DD/YYYY hh:mm:ss A"
    ).toDate();

    // Get the current date/time
    const currentDate = new Date();

    // Calculate the date 7 days ago
    const last7DaysDate = new Date();
    last7DaysDate.setDate(currentDate.getDate() - 7);

    // Calculate the date 30 days ago
    const last30DaysDate = new Date();
    last30DaysDate.setDate(currentDate.getDate() - 30);

    // Calculate the date 30 days ago
    const last90DaysDate = new Date();
    last30DaysDate.setDate(currentDate.getDate() - 90);

    // Filter based on different time ranges
    const isWithinLast7Days =
      sessionDateObject >= last7DaysDate && sessionDateObject <= currentDate;
    const isWithinLast30Days =
      sessionDateObject >= last30DaysDate && sessionDateObject <= currentDate;

    const isWithinLast90Days =
      sessionDateObject >= last90DaysDate && sessionDateObject <= currentDate;

    const allTime = sessionDateObject <= currentDate;

    return allTime;
  });

  return (
    
    
    <LinearGradient colors={[GlobalStyles.colors.primary50, GlobalStyles.colors.primary200]} style={styles.container}>  
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Shot Data</Text>
    </View>
      <SessionsOutput
        sessions={filteredSessions}
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
});
