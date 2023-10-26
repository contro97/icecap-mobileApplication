import { NavigationAction } from "@react-navigation/native";
import { useContext, useLayoutEffect, } from "react";

import { StyleSheet, View, ScrollView, Text } from "react-native";
import { 
    VictoryBar, 
    VictoryChart, 
    VictoryTheme, 
    VictoryStack, 
    VictoryAxis,
    VictoryLabel,
    VictoryPolarAxis
 } from "victory-native";

import { SessionDetailsType } from "./SessionDetailsType";


function SessionDetails( route : any) {
  const selectedSessionId = route.params?.sessionId;
  const shots = route.params?.totalShots;

  console.log(selectedSessionId)  

  return (
    <ScrollView>
      <View>
        <Text> SessionID:  {selectedSessionId} </Text>
        <Text> Number of Shots {shots}</Text>

        <VictoryChart polar
  theme={VictoryTheme.material}
>
  {
     ["Overhand Left", "Overhand Right", "Sidearm Left", "Sidearm Right", "Underhand Left", "Underhand Right"].map((d, i) => {
      return (
        <VictoryPolarAxis dependentAxis
          key={i}
          label={d}
          labelPlacement="perpendicular"
          style={{ tickLabels: { fill: "none" } }}
          axisValue={d}
        />
      );
    })
  }
  <VictoryBar
    style={{ data: { fill: "tomato", width: 25 } }}
    data={[
      { x: "Sidearm Right", y: 10 },
      { x: "Overhand Right", y: 25 },
      { x: "Overhand Left", y: 40 },
      { x: "Sidearm Left", y: 50 },
      { x: "Underhand Left", y: 50 },
      { x: "Underhand Right", y: 50 }
    ]}
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
