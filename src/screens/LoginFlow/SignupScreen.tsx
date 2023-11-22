import {useState} from 'react';

import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import { createUser } from '../../../util/auth';


function SignupScreen() {
  const[isAuthenticating, setIsAuthenticating] = useState(false); // initially false since unauthenticated on signup screen

  async function signupHandler({email, password} : {email: string, password: string}) {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating Account..."/>
  }

  return <AuthContent isLogin={false} onAuthenticate={signupHandler} />;
}

export default SignupScreen;