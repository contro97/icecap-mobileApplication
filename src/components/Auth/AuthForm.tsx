import { useState } from "react";
import { View, Text } from "react-native";

import Button from "../ui/Button";
import Input from "../Input";

function AuthForm({isLogin, onSubmit, credentialsInvalid} : {isLogin: any, onSubmit: any, credentialsInvalid: any}) {
    const [enteredEmail, setEnteredEmail] = useState("");
    
  return (
  <View>
    <Text>AuthForm</Text>
  </View>
  );
}

export default AuthForm;
