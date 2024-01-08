import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './src/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgotPassword from './src/screens/ForgotPassword';



function App(): JSX.Element {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="login" component={Login} options={{title:'Login'}}/>
        <Stack.Screen name="register" component={Register} options={{title:'Register'}}/>
        <Stack.Screen name="forgotPassword" component={ForgotPassword} options={{title:'ForgotPassword'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
