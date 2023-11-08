import { View, Text, FlatList, StyleSheet } from "react-native";
import { SessionType } from "src/types/SessionType";
import SessionData from "../../components/SessionsOutput/SessionData";
import SessionItem from "../../components/SessionsOutput/SessionItem";

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

  function renderSessionItem(itemData: { item: SessionType }) {
    // use SessionItemType instead of any
    return <SessionItem {...itemData.item} />;
  }

  const chartData = [
    { x: 'Lefty', y: 4 },
    { x: 'Righty', y: 6 },
  ];
  
  const numberOfColumns = chartData.length;
  const columnWidth = 0.25; // 50% of the space
  
  // Calculate the min and max values for the x-axis
  const xMin = -columnWidth / 2;
  const xMax = numberOfColumns - 1 + columnWidth / 2;

  return (
    <>
      <View style={styles.container}>
        <Text>Total Shots: {shotSum}</Text>
        <Text>Practice Time: {practiceTimeSum}</Text>

        <VictoryChart minDomain={{ y: 0 }}>
          <VictoryBar
            style={{ data: { fill: "#c43a31" } }}
            alignment="start"
            data={chartData}
            animate={{
              duration: 1000,
              onLoad: { duration: 1000 },            
            }}      
            containerComponent={<VictoryVoronoiContainer />}
            labels={({ datum }: { datum: { x: string; y: number } }) => datum.y}
            domain={{
              x: [xMin, xMax],
              y: [0, 10], // Adjust this based on your data
            }}
          />
        </VictoryChart>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
