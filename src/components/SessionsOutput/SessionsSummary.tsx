import { View, Text, FlatList, StyleSheet } from "react-native";
import { SessionType } from "src/types/SessionType";
import SessionData from "../../components/SessionsOutput/SessionData";
import SessionItem from '../../components/SessionsOutput/SessionItem'

import {
  VictoryBar,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
} from "victory-native";

function SessionsSummary({
  sessions,
  sessionsPeriod,
}: {
  sessions: SessionType[];
  sessionsPeriod: string;
}) {
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

  function renderSessionItem(itemData: { item: SessionType }){ // use SessionItemType instead of any
    return <SessionItem {...itemData.item} />
}

  return (
    
      <VictoryChart minDomain={{ y: 0 }}>
        <VictoryLine
          data={[
            { x: "mon", y: "110" },
            { x: "tues", y: "20", },
            { x: "wed", y: "30", },
            { x: "thu", y: "40", },
            { x: "fri", y: "110", },
          ]}
        />
      </VictoryChart>
  );
}

export default SessionsSummary;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
