import { TabRouter, useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, SafeAreaView, Button, TouchableOpacity } from 'react-native'
import { styles } from '../../src/styles'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, Auth, updateProfile } from 'firebase/auth'
const Pain1 = ({ route, navigation }) => {
    console.log(route.params)
    return (
        <View><Text>selam</Text></View>
    )
}

export default Pain1
