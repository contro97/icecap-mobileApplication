import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import SessionsOverview from "./src/screens/SessionDataScreens/SessionsOverview";
import StartSession from "./src/screens/StartSession";
import Settings from "./src/screens/Settings";
import SessionDetails from "./src/screens/SessionDataScreens/SessionDetails";
import Store from "./src/screens/Store";
import Library from "./src/screens/Library";

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
          tabBarLabel: "HOME",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="LIBRARY"
        component={Library}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="fitness-center" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Start Session"
        component={StartSession}
        options={{
          title: "Analyze Shots",
          tabBarLabel: "PLAY",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="caretright" size={size} color={color} />
          ),
        }}
      />
      
      <BottomTabs.Screen
        name="STORE"
        component={Store}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="SETTINGS"
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

          <Stack.Screen
            name="Training"
            component={TrainingOverview}
            options={{
              headerShown: false,
              
            }}
          />
          <Stack.Screen
            name="Session Details"
            component={SessionDetails}
            options={{
              presentation: "modal",              
              headerTitle: "Session Details",   
              headerRight: () => (
                <AntDesign
                name="close"
                size={24}                
                onPress={() => {
                  console.log("close");                  
                }}
                />),            
            }}              
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
