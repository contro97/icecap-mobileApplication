import { View, Text } from "react-native";
import { SessionType } from "src/types/SessionType";

function SessionsSummary({ sessions, sessionsPeriod } : {sessions: SessionType[], sessionsPeriod: string})  {
  const shotSum = sessions.reduce((sum: any, session: any ) => {
    return sum + session.totalshots;
  }, 0);

  const practiceTimeSum = sessions.reduce((sum : any, session : any) => {
    return sum + session.sessiontime;
  }, 0);

  const rightHandTotal = sessions.reduce((sum : any, session : any) => { 
    return sum + session.shotsright;
  }, 0);

  const leftHandTotal = sessions.reduce((sum : any, session : any) => { 
    return sum + session.shotsleft;
  }, 0);


  return (
    <View>
      <Text>{sessionsPeriod}</Text>
      <Text>Practice Time: {practiceTimeSum} minutes</Text>
      <Text>Total Shots: {shotSum}</Text>
      <Text>Lefty Total: {leftHandTotal}</Text>
      <Text>Righty Total: {rightHandTotal}</Text>
      <Text>Total Check = {leftHandTotal + rightHandTotal}</Text>

    </View>
  );
}

export default SessionsSummary;
