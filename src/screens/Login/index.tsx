import React, { useEffect, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import Home from '../Home';
import FormLogin from '../../components/Login';


function Login() {
  const navigation: NavigationProp<ReactNavigation.RootParamList> = useNavigation();
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    return subscriber;
  }, []);

  return (
    <>
      {user ? <Home></Home> : <FormLogin/>}
    </>
  );
}

export default Login;