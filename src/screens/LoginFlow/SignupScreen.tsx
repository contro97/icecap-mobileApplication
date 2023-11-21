import AuthContent from '../../components/Auth/AuthContent';

function SignupScreen() {
  return <AuthContent isLogin={false} onAuthenticate={true} />;
}

export default SignupScreen;