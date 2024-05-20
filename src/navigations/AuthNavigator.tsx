import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/authentication/Login';
import Verification from '../screens/authentication/Verification';
import Password from '../screens/authentication/Password';
import SetPassword from '../screens/authentication/SetPassword';
import SelfDeclaration from '../screens/authentication/SelfDeclaration';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <AuthStack.Screen
        name="Verification"
        component={Verification}
        options={{headerShown: false}}
      />

      <AuthStack.Screen
        name="Passowrd"
        component={Password}
        options={{headerShown: false}}
      />

      <AuthStack.Screen
        name="SetPassword"
        component={SetPassword}
        options={{headerShown: false}}
      />

      <AuthStack.Screen
        name="SelfDeclaration"
        component={SelfDeclaration}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
