import {useState} from 'react';
import {Alert} from 'react-native';
import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import { createUser } from '../../../util/auth';


function SignupScreen() {
  const[isAuthenticating, setIsAuthenticating] = useState(false); // initially false since unauthenticated on signup screen

  async function signupHandler({email, password} : {email: string, password: string}) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    }
    catch (error) {
      Alert.alert("Signup Failed", 'Could not create your account. Please check your credentials and try again.');
      console.log(error);
      setIsAuthenticating(false);
      return;    
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating Account..."/>
  }

  return <AuthContent isLogin={false} onAuthenticate={signupHandler} />;
}

export default SignupScreen;