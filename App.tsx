import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import SessionsOverview from "./src/screens/SessionDataScreens/SessionsOverview";
import StartSession from "./src/screens/StartSession";
import Settings from "./src/screens/Settings";
import SessionDetails from "./src/screens/SessionDataScreens/SessionDetails";

import StartScreen from "./src/screens/LoginFlow/StartScreen";

import ForgotPasswordScreen from "./src/screens/LoginFlow/ForgotPasswordScreen";
import {GlobalStyles} from './src/constants/Colors'

const Stack = createNativeStackNavigator(); //Navigator object, which contains all the screens in our app
const BottomTabs = createBottomTabNavigator();

function TrainingOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Sessions Overview"
        component={SessionsOverview}
        
        options={{
          title: "Session History",
          tabBarLabel: "Data",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="barschart" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Start Session"
        component={StartSession}
        options={{
          title: "Analyze Shots",
          tabBarLabel: "Sync",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="caretright" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}



export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Sessions Overview">
          {/* <Stack.Screen
        name="Start Screen"
        component={StartScreen}
        options={{headerShown:false}}
        /> */}

          <Stack.Screen
            name="Training"
            component={TrainingOverview}
            options={{
              headerShown: false,
              // tabBarIcon: ({ color, size }) => (
              //   <Ionicons name="hourglass" size={size} color={color} />
              // ),
            }}
          />
          <Stack.Screen
            name="Session Details"
            component={SessionDetails}
            options={{
              presentation: "modal",
              headerTintColor: GlobalStyles.colors.primary600,
              
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
