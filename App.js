import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import Teste1Screen from './screens/Teste1';
import Teste2Screen from './screens/Teste2';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IssLocation" component={Teste1Screen} />
        <Stack.Screen name="Meteors" component={Teste2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
