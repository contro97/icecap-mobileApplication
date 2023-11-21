import AuthContent from '../../components/Auth/AuthContent';

import createUser from '../../../util/auth'

function SignupScreen() {

  function signupHandler() {
    createUser();
  }

  return <AuthContent isLogin={false} onAuthenticate={true} />;
}

export default SignupScreen;