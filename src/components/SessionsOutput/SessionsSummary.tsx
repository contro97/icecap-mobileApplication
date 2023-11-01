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
  VictoryVoronoiContainer,
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
    <>
    <View style={styles.container}>
      <Text>Total Shots: {shotSum}</Text>
      <Text>Practice Time: {practiceTimeSum}</Text>
    </View>
    
      <VictoryChart minDomain={{ y: 0 }}>
        <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc"}
        }}
          data={[
            { x: 'mon', y: 2 },
            { x: 'tue', y: 3 },
            { x: 'wed', y: 16 },
            { x: 'thu', y: 4 },
            { x: 'fri', y: 7 }
          ]}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
          containerComponent={<VictoryVoronoiContainer/>}    


        />
      </VictoryChart>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
