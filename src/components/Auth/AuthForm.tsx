import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../ui/Button';
import PrimaryButton from '../../components/PrimaryButton'
import Input from './Input';

function AuthForm(this: any, { isLogin, onSubmit, credentialsInvalid } : {isLogin: any, onSubmit: any, credentialsInvalid: any}) {
  const [enteredEmail, setEnteredEmail] = useState('');  
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType: any, enteredValue: any) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;      
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="Email Address"
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
          secure={false}
        />        
        <Input
          label="Password"
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          secure={true}
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
          keyboardType={null}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            onUpdateValue={updateInputValueHandler.bind(
              this.confirmPassword,
              'confirmPassword'
            )}
            secure={true}
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
            keyboardType={null}
          />
        )}
        <View style={styles.buttons}>
          <PrimaryButton onPress={submitHandler}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
  form: {

  }
});