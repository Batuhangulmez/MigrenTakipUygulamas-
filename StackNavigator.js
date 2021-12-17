import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "./screen/Login"
import SignUp from "./screen/SignUp"
import Profile from './screen/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomePage = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }} >
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: () => { return <Icon name='person' /> } }} />
        </Tab.Navigator>
    );
}


const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Group>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="HomePage" component={HomePage} />
            </Stack.Group>


        </Stack.Navigator>
    )
}

export default StackNavigator
