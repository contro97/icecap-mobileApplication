import { View, Text } from "react-native";

import SessionsOutput from "../../components/SessionsOutput/SessionsOutput";
import { SessionType } from "src/types/SessionType";

const DUMMY_SESSIONS : SessionType[] = [
  {
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
  },
];

function SessionsOverview() {
  return (
    <View>
      <SessionsOutput
        sessions={DUMMY_SESSIONS}
        fallbackText="No sessions yet."
      />
    </View>
  );
}

export default SessionsOverview;
