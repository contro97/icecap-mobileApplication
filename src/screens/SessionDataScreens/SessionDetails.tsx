import { StyleSheet, View, ScrollView, Text } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryStack,
  VictoryAxis,
  VictoryLabel,
  VictoryPolarAxis,
} from "victory-native";

import { SessionType } from "src/types/SessionType";

const sessionTestData: SessionType = {
  activity: "Shooting",
  endtime: "11/28/2022 7:25:33 PM",
  sessionid: "3lZCk4XzsXT74g9u77kAPPrDrRv1.1",
  sessiontime: 10,
  shotsleft: 29,
  shotsoverhandleft: 12,
  shotsoverhandright: 20,
  shotsright: 48,
  shotssidearmleft: 12,
  shotssidearmright: 8,
  shotsunderhandleft: 5,
  shotsunderhandright: 20,
  sport: "Lacrosse",
  starttime: "11/28/2022 7:15:32 PM",
  topspeed: "97.41",
  totalshots: 77,
  url: "https://firebasestorage.googleapis.com/v0/b/icecap-sports-app-12-20.appspot.com/o/Users%2F3lZCk4XzsXT74g9u77kAPPrDrRv1%2FLacrosse%2FTrainingData%2FSAL.csv?alt=media&token=d90edb28-6da0-4c5b-9bcf-bc790fc9ab81",
};

function SessionDetails(route: any) {
  const selectedSessionId = route.params?.sessionId;

  console.log(selectedSessionId);

  return (
    <ScrollView>
      <View style={styles.statsItem}>
        <Text> SessionID: {sessionTestData.sessionid} </Text>
      </View>
      <View style={styles.statsItem}>
        <Text> Total Shots: {sessionTestData.totalshots}</Text>
      </View>
      <View style={styles.statsItem}>
        <Text> Top Speed: {sessionTestData.topspeed} mph</Text>
      </View>
      <View>
        <VictoryChart polar theme={VictoryTheme.material}>
          {[
            "Overhand Left",
            "Overhand Right",
            "Sidearm Left",
            "Sidearm Right",
            "Underhand Left",
            "Underhand Right",
          ].map((d, i) => {
            return (
              <VictoryPolarAxis
                dependentAxis
                key={i}
                label={d}
                labelPlacement="perpendicular"
                style={{ tickLabels: { fill: "none" } }}
                axisValue={d}
              />
            );
          })}
          <VictoryBar
            style={{ data: { fill: "tomato", width: 25 } }}
            data={[
              { x: "Sidearm Right", y: sessionTestData.shotssidearmright },
              { x: "Overhand Right", y: sessionTestData.shotsoverhandright },
              { x: "Overhand Left", y: sessionTestData.shotsoverhandleft },
              { x: "Sidearm Left", y: sessionTestData.shotssidearmleft },
              { x: "Underhand Left", y: sessionTestData.shotsunderhandleft },
              { x: "Underhand Right", y: sessionTestData.shotsunderhandright },
            ]}
          />
        </VictoryChart>
      </View>
      <View style={styles.statsItem}>
        <Text>Left Side Total: {sessionTestData.shotsleft} </Text>
        <Text>Right Side Total: {sessionTestData.shotsright} </Text>        
      </View>
      <View style={styles.linebreak} />
      <View style={styles.statsItem}>
        <Text>Overhand: {sessionTestData.shotsoverhandleft} </Text>
        <Text> Overhand: {sessionTestData.shotsoverhandright} </Text>        
      </View>
      <View style={styles.statsItem}>
        <Text>Sidearm: {sessionTestData.shotssidearmleft} </Text>
        <Text>Sidearm: {sessionTestData.shotssidearmright} </Text>        
      </View>
      <View style={styles.statsItem}>
        <Text>Underhand: {sessionTestData.shotsunderhandleft} </Text>
        <Text>Underhand: {sessionTestData.shotsunderhandright} </Text>        
      </View>
    </ScrollView>
  );
}

export default SessionDetails;

const styles = StyleSheet.create({
  statsItem: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5fcff",
    flexDirection: "row",
    padding: 10,
  },
  linebreak :{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});
