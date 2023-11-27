import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import {
  NavigationContainer,
  useNavigation,
  useNavigationContainerRef,
} from "@react-navigation/native";
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

import StartScreen from "./src/screens/LoginFlow/LoginScreen";
import SignupScreen from "./src/screens/LoginFlow/SignupScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

import ForgotPasswordScreen from "./src/screens/LoginFlow/ForgotPasswordScreen";
import { GlobalStyles } from "./src/constants/Colors";
import LoginForm from "src/components/LoginForm";
import LoginScreen from "./src/screens/LoginFlow/LoginScreen";
import AuthContextProvider, { AuthContext } from "./src/state/auth-context";

const Stack = createNativeStackNavigator(); //Navigator object, which contains all the screens in our app
const BottomTabs = createBottomTabNavigator();


function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: GlobalStyles.colors.primary100 },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack  /> }
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}

function AuthenticatedStack() {
  const AuthCtx = useContext(AuthContext);

  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Sessions"
        component={SessionData}
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
          headerShown: false,
        }}
        
      />
      
    </BottomTabs.Navigator>
  );
}

function SessionData() {
  const navigationRef = useNavigation();
  return (
    <>

        <Stack.Navigator>
          <Stack.Screen
            name = "Sessions Overview"
            component = {SessionsOverview}
            options={{          
              headerShown: false,
            }}
          />
           
          <Stack.Screen
            name = "Session Details"
            component = {SessionDetails}
            options={{ 
              presentation: 'modal',
              headerRight: () => (
                <AntDesign name="close" size={24} color="black" onPress={navigationRef.goBack}/>
              ),              
             }} 
          /> 
        </Stack.Navigator>
    </>
  );
}
