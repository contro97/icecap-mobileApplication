import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SessionsOverview from './src/screens/SessionsOverview';
import StartSession from './src/screens/StartSession.js';
import Settings from './src/screens/Settings.js'
import SessionDetails from './src/screens/SessionDetails';

const Stack = createNativeStackNavigator(); //Navigator object, which contains all the screens in our app
const BottomTabs = createBottomTabNavigator(); 

function TrainingOverview(){
  return(
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Sessions Overview" component={SessionsOverview}/>
      <BottomTabs.Screen name="Start Session" component={StartSession}/>
      <BottomTabs.Screen name="Settings" component={Settings}/>
    </BottomTabs.Navigator>
  )
}

export default function App() {

  return (
    <>
    <StatusBar style='dark'/>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Summary">        
        <Stack.Screen
         name="Training" 
         component={TrainingOverview}
         options={{headerShown:false}}
         />
         <Stack.Screen 
         name="SessionDetails"
         component={SessionDetails}
         options = {{
          presentation: "modal"
         }}
         />
      </Stack.Navigator>
    </NavigationContainer>    
    </>
  );
}

