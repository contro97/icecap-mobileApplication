import { useContext, useLayoutEffect } from "react";

import { StyleSheet, View, ScrollView } from "react-native";
import { 
    VictoryBar, 
    VictoryChart, 
    VictoryTheme, 
    VictoryStack, 
    VictoryAxis,
    VictoryLabel
 } from "victory-native";

const data = [
  { quarter: "OHR", earnings: 12 },
  { quarter: "LHR", earnings: 42 },
  { quarter: "SAR", earnings: 32 },
  { quarter: "SAL", earnings: 1 },
  { quarter: "UHL", earnings: 54 },
  { quarter: "UHR", earnings: 24 },
];

const dataA = [
  { x: "Underhand", y: 38 },
  { x: "Side Arm", y: 40 },
  { x: "Overhand", y: 20 },
];

const dataB = dataA.map((point) => {
  const y = Math.round(point.y + 3 * (Math.random() - 0.5));
  return { ...point, y };
});

const width = 350;
const height = 200;

function SessionDetails( route: any) {
  const selectedSessionId = route.params?.sessionId;
  const shots = route.params?.totalShots;

  return (
    <ScrollView>
      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </View>
      <View>
        <VictoryChart horizontal height={height} width={width} padding={40}>
          <VictoryStack
            style={{ data: { width: 25 }, labels: { fontSize: 15 } }}
          >
            <VictoryBar
              style={{ data: { fill: "tomato" } }}
              data={dataA}
              y={(data) => -Math.abs(data.y)}
              labels={({ datum }) => `${Math.abs(datum.y)}%`}
            />
            <VictoryBar
              style={{ data: { fill: "orange" } }}
              data={dataB}
              labels={({ datum }) => `${Math.abs(datum.y)}%`}
            />
          </VictoryStack>

          <VictoryAxis
            style={{
              axis: { stroke: "transparent" },
              ticks: { stroke: "transparent" },
              tickLabels: { fontSize: 15, fill: "black" },
            }}
            /*
            Use a custom tickLabelComponent with
            an absolutely positioned x value to position
            your tick labels in the center of the chart. The correct
            y values are still provided by VictoryAxis for each tick
          */
            tickLabelComponent={
              <VictoryLabel x={width / 2} textAnchor="middle" />
            }
            tickValues={dataA.map((point) => point.x).reverse()}
          />
        </VictoryChart>
      </View>
    </ScrollView>
  );
}

export default SessionDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
});
