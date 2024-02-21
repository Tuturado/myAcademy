import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgotPassword from './src/screens/ForgotPassword';
import NewTrainingSheet from './src/screens/NewTrainingSheet';
import WhyIsNew from './src/screens/WhyIsNew';



function App(): JSX.Element {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="login" component={Login} options={{title:'Login'}}/>
        <Stack.Screen name="whyIsNew" component={WhyIsNew} options={{title:'WhyIsNew'}}/>
        <Stack.Screen name="register" component={Register} options={{title:'Register'}}/>
        <Stack.Screen name="forgotPassword" component={ForgotPassword} options={{title:'ForgotPassword'}}/>
        <Stack.Screen name="home" component={Home} options={{title:'Home'}}/>
        <Stack.Screen name="newTrainingSheet" component={NewTrainingSheet} options={{title:'NewTrainingSheet'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
