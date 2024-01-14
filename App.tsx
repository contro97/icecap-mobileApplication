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
import { color } from "react-native-reanimated";

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
      {authCtx.isAuthenticated && <AuthenticatedStack />}
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
    <BottomTabs.Navigator
    screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: 'white',
    })}
    >
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
          name="Sessions Overview"
          component={SessionsOverview}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Shot Profile"
          component={SessionDetails}
          options={{
            presentation: "modal",
            headerRight: () => (
              <AntDesign
                name="close"
                size={24}
                color="white"
                onPress={navigationRef.goBack}
              />
            ),
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </>
  );
}

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyD791zOoQOHESZw3hknHfeUK-Ymgt1ClF4',
  authDomain: 'icecap-sports-app-12-20.firebaseapp.com',
  databaseURL: 'https://icecap-sports-app-12-20.firebaseio.com',
  projectId: 'icecap-sports-app-12-20',
  storageBucket: 'icecap-sports-app-12-20.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:366611210126:ios:e725bd96dd09f7ae7d4edf',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

const db = getFirestore(app);

// Get a list of cities from your database
async function getUserData(db: any) {
  const userData = collection(db, 'ieBP9fT3GlTIKOcZxAorGGLE7hl1', );
  const citySnapshot = await getDocs(userData);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList)
  console.log('------------------')
  return cityList;
}

getUserData(db);

