import { StyleSheet, View, Text } from "react-native";

function SessionData({statName , dataLeft , dataRight} : {statName: string, dataLeft: string, dataRight: string}) {
  return (
    <View style={styles.statsItem}>
      <Text>{dataLeft}</Text>
      <Text>{statName}</Text>
      <Text>{dataRight}</Text>
    </View>
  );
}

export default SessionData;

const styles = StyleSheet.create({
  statsItem: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5fcff",
    flexDirection: "row",
    padding: 10,
  },
});
