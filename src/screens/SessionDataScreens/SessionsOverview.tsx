import { View, Text } from "react-native";
import moment from "moment";

import SessionsOutput from "../../components/SessionsOutput/SessionsOutput";
import { SessionType } from "src/types/SessionType";
import { SafeAreaView, StyleSheet } from "react-native";
import { DUMMY_SESSIONS } from "../../data/data";

function SessionsOverview(sessionData: SessionType[]) {
  const inputDateString = DUMMY_SESSIONS[0].endtime;
  const dateObject = moment(inputDateString, "MM/DD/YYYY hh:mm:ss A").toDate();

  // Get the current date/time
  const currentDate = new Date();

  // Calculate the date 7 days ago
  const last7DaysDate = new Date();
  last7DaysDate.setDate(currentDate.getDate() - 7);

  // Calculate the date 30 days ago
  const last30DaysDate = new Date();
  last30DaysDate.setDate(currentDate.getDate() - 30);

  // Filter based on different time ranges
  const isWithinLast7Days = dateObject >= last7DaysDate && dateObject <= currentDate;
  const isWithinLast30Days = dateObject >= last30DaysDate && dateObject <= currentDate;

  console.log(`Input Date: ${inputDateString}`);
  console.log(`Date 7 Days Ago: ${last7DaysDate}`);
  console.log(`Is within Last 7 Days: ${isWithinLast7Days}`);
  console.log(`Is within Last 30 Days: ${isWithinLast30Days}`);
  console.log(`Is All Time: true`);


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
    flex: 1,
  },
});
