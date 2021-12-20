import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "./screen/Login"
import SignUp from "./screen/SignUp"
import Profile from './screen/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import Calender from './screen/Calender';
import { styles } from './src/styles';
import { Dimensions } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');







const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();




const HomePage = ({ route }) => {


    return (


        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: '#30444E',
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25,
                height: 85,
                borderTopWidth: 0,

            }
        }} >
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarActiveTintColor: 'white',
                tabBarLabelStyle: {
                    fontSize: 14,
                    marginBottom: 5,
                },
                tabBarIcon: ({ focused }) => {
                    return <Icon iconStyle={{
                        color: focused ? 'white' : '#96A7AF',
                        fontSize: 36,
                        borderRadius: 100,
                        padding: 7,
                        backgroundColor: focused ? '#3DD598' : '#30444E',
                    }} name='person' />
                }
            }} />
            <Tab.Screen name="Calender" component={Calender} options={{
                tabBarActiveTintColor: 'white',
                tabBarLabelStyle: {
                    fontSize: 14,
                    marginBottom: 5,
                },
                tabBarIcon: ({ focused }) => {
                    return <Icon iconStyle={{
                        color: focused ? 'white' : '#96A7AF',
                        fontSize: 36,
                        borderRadius: 100,
                        padding: 7,
                        backgroundColor: focused ? '#3DD598' : '#30444E',
                    }} name='person' />
                }
            }} />
        </Tab.Navigator>
    );
}






const StackNavigator = ({ route }) => {

    const navigation = useNavigation();
    const Stack = createNativeStackNavigator();
    let authNavigate = false;

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                authNavigate = true
            } else {
                authNavigate = false
            }
        });

    }, [])


    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={authNavigate ? 'Login' : 'HomePage'}>
            <Stack.Group>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="HomePage" component={HomePage} />
            </Stack.Group>


        </Stack.Navigator>
    )
}

export default StackNavigator
