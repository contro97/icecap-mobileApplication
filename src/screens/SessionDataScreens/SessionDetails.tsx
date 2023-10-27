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

function SessionDetails({route, navigation} : any) {
  const selectedSessionId = route.params.sessionId;

  console.log("session id of session details param:", selectedSessionId);
  console.log(route.params?.session.totalshots)

  return (
    <ScrollView>
      <View style={styles.statsItem}>
        <Text>Activity: {sessionTestData.activity} </Text>
      </View>
      <View style={styles.statsItem}>
        <Text> Total Shots: {route.params?.session.totalshots}</Text>
      </View>
      <View style={styles.statsItem}>
        <Text> Top Speed: {route.params?.session.topspeed} mph</Text>
      </View>
      <View style={styles.statsItem}>
        <Text> Session Time: {route.params?.session.sessiontime} minutes</Text>
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
              { x: "Sidearm Right", y: route.params?.session.shotssidearmright },
              { x: "Overhand Right", y: route.params?.session.shotsoverhandright },
              { x: "Overhand Left", y: route.params?.session.shotsoverhandleft },
              { x: "Sidearm Left", y: route.params?.session.shotssidearmleft },
              { x: "Underhand Left", y: route.params?.session.shotsunderhandleft },
              { x: "Underhand Right", y: route.params?.session.shotsunderhandright },
            ]}
          />
        </VictoryChart>
      </View>
      <View style={styles.statsItem}>
        <Text>{route.params?.session.shotsleft}</Text>
        <Text>Total</Text>
        <Text>{route.params?.session.shotsright}</Text>        
      </View>
      <View style={styles.linebreak} />
      <View style={styles.statsItem}>
        <Text>{route.params?.session.shotsoverhandleft}</Text>
        <Text>Overhand</Text>
        <Text>{route.params?.session.shotsoverhandright}</Text>        
      </View>
      <View style={styles.statsItem}>
        <Text>{route.params?.session.shotssidearmleft}</Text>
        <Text>Sidearm</Text>
        <Text>{route.params?.session.shotssidearmright}</Text>        
      </View>
      <View style={styles.statsItem}>
        <Text>{route.params?.session.shotsunderhandleft}</Text>
        <Text>Underhand</Text>
        <Text>{route.params?.session.shotsunderhandright}</Text>        
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
