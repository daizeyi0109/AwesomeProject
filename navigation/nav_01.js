import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import IndexScreen from '../screens/index';
import BottomTabStack from './nav_02.'



const navStack = createNativeStackNavigator();
function Navigator() {
    return (
        <NavigationContainer>
            <navStack.Navigator screenOptions={{ headerShown: false }}>
                <navStack.Screen name="IndexScreen" component={IndexScreen} />
                <navStack.Screen name="BottomTabStack" component={BottomTabStack} options={{ gestureEnabled: false }} />
            </navStack.Navigator>
        </NavigationContainer>
    )

}

export default Navigator;