import { useState, useContext } from 'react';
import {Alert} from 'react-native';
import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import { createUser } from '../../../util/auth';
import {AuthContext} from '../../state/auth-context';


function SignupScreen() {
  const[isAuthenticating, setIsAuthenticating] = useState(false); // initially false since unauthenticated on signup screen

  const authCtx = useContext(AuthContext);

  async function signupHandler({email, password} : {email: string, password: string}) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
      authCtx.authenticate();
    }
    catch (error) {
      Alert.alert("Signup Failed", 'Could not create your account. Please check your credentials and try again.');
      console.log(error);
      setIsAuthenticating(false);
      return;    
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating Account..."/>
  }

  return <AuthContent isLogin={true} onAuthenticate={signupHandler} />;
}

export default SignupScreen;