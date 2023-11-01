import { View, Text } from "react-native";

import SessionsOutput from "../../components/SessionsOutput/SessionsOutput";
import { SessionType } from "src/types/SessionType";

import { DUMMY_SESSIONS } from "../../data/data";


function SessionsOverview(sessionData: SessionType[]) {
  return (

    
      <SessionsOutput
        sessions={DUMMY_SESSIONS}
        fallbackText="No sessions yet."
      />
  );
}

export default SessionsOverview;
