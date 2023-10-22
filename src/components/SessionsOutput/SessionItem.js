import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../../constants/Colors";
// import formattedDate

function SessionItem({ id, description, totalShots, timeElapsed, date }) {
  const navigation = useNavigation();

  function sessionPressHandler() {
    console.log("Session Pressed");
    // navigation.navigate('SessionDetails', {
    //     sessionId: id
    // });
  }

  return (
    <Pressable
      onPress={sessionPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.sessionItem}>
        <View style={styles.activityContainer}>
          <View style={styles.shotCountContainer}>
            <Text style={styles.shotCount}>{totalShots}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={[styles.textBase, styles.description]}>{description}</Text>
            <Text style={[styles.textBase, styles.dateText]}>{date}</Text>
          </View>
        </View>

        <View>
        <Text style={styles.textBase}>{timeElapsed}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default SessionItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  sessionItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    alignItems: "center",
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
    margin: 5,
  },
  dateText: {
    marginLeft: 5,
    fontSize: 16,
    marginBottom: 1,
  },
  activityContainer: {
    flexDirection: "row",
  },
  shotCountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  shotCount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
    fontSize: 24
  },
  descriptionContainer : {
    margin: 4,
    alignItems: 'left'
  },
});
