import { View, Text, FlatList, StyleSheet } from "react-native";
import { SessionType } from "src/types/SessionType";
import SessionData from "../../components/SessionsOutput/SessionData";
import SessionItem from "../../components/SessionsOutput/SessionItem";

import { CircularProgressBase } from "react-native-circular-progress-indicator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/Colors";

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

  const percentageRightHand = ((rightHandTotal / shotSum) * 100).toFixed(2);

  const percentageLeftHand = ((leftHandTotal / shotSum) * 100).toFixed(2);

  function renderSessionItem(itemData: { item: SessionType }) {
    // use SessionItemType instead of any
    return <SessionItem {...itemData.item} />;
  }

  const props = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2,
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.statContainer}>
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>Total Shots: {shotSum}</Text>
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>Total Time: {practiceTimeSum}m</Text>

        </View>
        <CircularProgressBase
          {...props}
          value={100}
          radius={125}
          activeStrokeColor={GlobalStyles.colors.primary500}
          inActiveStrokeColor={GlobalStyles.colors.primary100}
        >
          <CircularProgressBase
            {...props}
            value={percentageRightHand}
            radius={100}
            activeStrokeColor={"#e84118"}
            inActiveStrokeColor={"#e84118"}
          >
            <Text style={{ fontSize: 12, fontWeight: "bold", color: '#e84118' }}>{percentageRightHand}% Righty</Text>
          </CircularProgressBase>
        </CircularProgressBase>
        <View style={styles.statContainer}>
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>Left Hand Total: {leftHandTotal}</Text>
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>Right Hand Shots: {rightHandTotal}</Text>

        </View>
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
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
  },
});
