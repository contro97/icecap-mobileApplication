import { StyleSheet, View, ScrollView, Text } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryPolarAxis,
} from "victory-native";

import { AntDesign } from "@expo/vector-icons";

import {  GlobalStyles } from "../../constants/Colors";

import SessionData from "../../components/SessionsOutput/SessionData";

function SessionDetails({ route, navigation }: any) {
  return (
    <ScrollView>       
      <View style={styles.statsItem}>
        <Text>{route.params?.session.activity} </Text>
        <Text>{route.params?.session.sessiontime}m</Text>
      </View>
      <View style={styles.statsItem}>
        <Text>Top Speed</Text>
        <Text>{route.params?.session.topspeed} mph</Text>
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
              {
                x: "Sidearm Right",
                y: route.params?.session.shotssidearmright,
              },
              {
                x: "Overhand Right",
                y: route.params?.session.shotsoverhandright,
              },
              {
                x: "Overhand Left",
                y: route.params?.session.shotsoverhandleft,
              },
              { x: "Sidearm Left", y: route.params?.session.shotssidearmleft },
              {
                x: "Underhand Left",
                y: route.params?.session.shotsunderhandleft,
              },
              {
                x: "Underhand Right",
                y: route.params?.session.shotsunderhandright,
              },
            ]}
          />
        </VictoryChart>
      </View>

      <SessionData
        statName="Total"
        dataLeft={route.params?.session.shotsleft}
        dataRight={route.params?.session.shotsright}
      />
      <View style={styles.linebreak} />
      <SessionData
        statName="Overhand"
        dataLeft={route.params?.session.shotsoverhandleft}
        dataRight={route.params?.session.shotsoverhandright}
      />
      <SessionData
        statName="Sidearm"
        dataLeft={route.params?.session.shotssidearmleft}
        dataRight={route.params?.session.shotssidearmright}
      />
      <SessionData
        statName="Underhand"
        dataLeft={route.params?.session.shotsunderhandleft}
        dataRight={route.params?.session.shotsunderhandright}
      />
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
  linebreak: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  exitContainer: {
    flexDirection: 'row', // To align items horizontally
    justifyContent: 'flex-end', // Align items to the right
    alignItems: 'center', // Align items vertically (if needed)
    backgroundColor: "#f5fcff",
  }
});
