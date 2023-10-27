import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../../constants/Colors";

import { SessionType } from "src/types/SessionType";


function SessionItem(session: SessionType ) {
  const navigation : any = useNavigation(); // change type to any to avoid error

  function sessionPressHandler() {
    navigation.navigate('SessionDetails', { 
      sessionId: session.sessionid,
      session: session,      
    });
  }

  return (
    <Pressable
      onPress={sessionPressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.sessionItem}>
        <View style={styles.activityContainer}>
          <View style={styles.shotCountContainer}>
            <Text style={styles.shotCount}>{session.totalshots}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={[styles.textBase, styles.description]}>{session.activity}</Text>
            <Text style={[styles.textBase, styles.dateText]}>{session.starttime}</Text>
          </View>
        </View>

        <View>
        <Text style={styles.textBase}>{session.sessiontime}</Text>
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
    padding: 8,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 12,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    alignItems: "center",
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
    fontSize: 20
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
    paddingVertical: 2,
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
    alignItems: "flex-start",
  },
});
