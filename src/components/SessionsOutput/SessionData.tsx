import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../../src/constants/Colors";

function SessionData({
  statName,
  dataLeft,
  dataRight,
}: {
  statName: string;
  dataLeft: any;
  dataRight: any;
}) {
  return (
    <View style={styles.statsItem}>
      <Text style={styles.statText}>{dataLeft}</Text>
      <Text style={styles.statTitleText}>{statName}</Text>
      <Text style={styles.statText}>{dataRight}</Text>
    </View>
  );
}

export default SessionData;

const styles = StyleSheet.create({
  statsItem: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    padding: 10,
  },
  statTitleText: {
    fontSize: 14,
    color: 'white'
  },
  statText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
