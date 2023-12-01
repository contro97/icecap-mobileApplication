import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import SessionsList from "./SessionsList";
import SessionsSummary from "./SessionsSummary";

import { SessionType } from "src/types/SessionType";
import { GlobalStyles } from "../../constants/Colors";
import { useState } from "react";
import moment from "moment";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function SessionsOutput({
  sessions,
  fallbackText,
}: {
  sessions: SessionType[];
  fallbackText: string;
}) {
  
  const dateRanges = [
    "Last 7 Days",
    "Last 30 Days",
    "Last 90 Days",
    "All Time",
  ];
  const [currentIndex, setCurrentIndex] = useState(3);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + dateRanges.length) % dateRanges.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dateRanges.length);
  };

  const filterSessions = sessions.filter((session) => {
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
    last90DaysDate.setDate(currentDate.getDate() - 90);

    // Filter based on different time ranges
    if(currentIndex === 0){
      const isWithinLast7Days = sessionDateObject >= last7DaysDate && sessionDateObject <= currentDate;
      return isWithinLast7Days
    } else if(currentIndex === 1){ 
      const isWithinLast30Days = sessionDateObject >= last30DaysDate && sessionDateObject <= currentDate;
      return isWithinLast30Days
    }else if(currentIndex === 2){
      const isWithinLast90Days = sessionDateObject >= last90DaysDate && sessionDateObject <= currentDate;
      return isWithinLast90Days
    }
    else if(currentIndex === 3){
      const allTime = sessionDateObject <= currentDate;
      return allTime
    }

  });

  let content = <Text style={styles.noDataText}>{fallbackText}</Text>;

  if (filterSessions.length > 0) {
    content = <SessionsList sessions={filterSessions} />;
  }

  return (
    <ScrollView>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Shot History</Text>
      </View>
      
      <SessionsSummary sessions={filterSessions} />
      <View style={styles.container}>
          <TouchableOpacity onPress={handlePrevClick} style={styles.button}>
            <MaterialCommunityIcons
              name="arrow-left-circle"
              size={24}
              color={GlobalStyles.colors.primary700}
            />
          </TouchableOpacity>

          <Text style={styles.dateText}>{dateRanges[currentIndex]}</Text>

          <TouchableOpacity onPress={handleNextClick} style={styles.button}>
            <MaterialCommunityIcons
              name="arrow-right-circle"
              size={24}
              color={GlobalStyles.colors.primary700}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.dotsContainer}>
          {dateRanges.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex ? styles.activeDot : null,
              ]}
            />
          ))}
        </View>
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
    backgroundColor: GlobalStyles.colors.primary50,
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
    borderRadius: 50,
    marginHorizontal: 100,
    marginTop: 54,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary50,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 8,
    borderTopWidth: 1,
    borderColor: GlobalStyles.colors.primary800,
    paddingTop: 8,
    marginHorizontal: 24,
  },
  button: {
    padding: 8,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "gray",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: GlobalStyles.colors.primary800, // You can customize the color for the active dot
  },
  dateText: {
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary800,
  },
});
