import React from 'react';
// import Header from './Components/Header';
//import type {Node} from 'react';
// import {SafeAreaView, StatusBar} from 'react-native';
// import LoginPage from './Screens/LoginPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {View,Text} from "react-native";
// import {GestureHandlerRootView} from "react-native-gesture-handler";
// import HomePage from './Screens/HomePage';
// import SignUp from './Screens/SignUp';
// import CheckPage from './Screens/CheckPage';
// import Tabs from './Components/Tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
      // <GestureHandlerRootView>

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginPage"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginPage" component={Test} />
        <Stack.Screen name="HomePage" component={Test} />
        <Stack.Screen name="SignUp" component={Test} />
        <Stack.Screen name="CheckPage" component={Test} />
        {/*<StatusBar />*/}
        {/*<LoginPage />*/}
      </Stack.Navigator>
    </NavigationContainer>
      // </GestureHandlerRootView>

  );
};

function  Test(){
    return <View>
        <Text style={{color:"black",verticalAlign:"center",fontSize:100}}>
            lalafdfdfdfdflal
        </Text>
    </View>
}

export default App;
