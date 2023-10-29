import { StyleSheet, View, ScrollView, Text } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryPolarAxis,
} from "victory-native";

function SessionDetails({route, navigation} : any) {
  
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
