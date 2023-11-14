import { View, Text } from "react-native";
import moment from "moment";

import SessionsOutput from "../../components/SessionsOutput/SessionsOutput";
import { SessionType } from "src/types/SessionType";
import { SafeAreaView, StyleSheet } from "react-native";
import { DUMMY_SESSIONS } from "../../data/data";

import DateRangeComponent from "../../components/DateRange";


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
    <SafeAreaView style={styles.container}>
      <DateRangeComponent />      
      <SessionsOutput
        sessions={filteredSessions}
        fallbackText="No sessions yet."
      />
    </SafeAreaView>
  );
}

export default SessionsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
