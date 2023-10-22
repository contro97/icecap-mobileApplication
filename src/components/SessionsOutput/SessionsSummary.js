import { View, Text } from "react-native";

function SessionsSummary({ sessions, sessionsPeriod }) {
  const shotSum = sessions.reduce((sum, session) => {
    return sum + session.totalShots;
  }, 0);

  const practiceTimeSum = sessions.reduce((sum, session) => {
    return sum + session.timeElapsed;
  }, 0);

  return (
    <View>
      <Text>{sessionsPeriod}</Text>
      <Text>Total Shots: {shotSum}</Text>
      <Text>Practice Time: {practiceTimeSum} minutes</Text>
      <Text>Right Handed: 60% </Text>
      <Text>Left Handed: 40%</Text>
    </View>
  );
}

export default SessionsSummary;
