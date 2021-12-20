import { TabRouter, useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, SafeAreaView, Button, TouchableOpacity } from 'react-native'
import { styles } from '../src/styles'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, Auth, updateProfile } from 'firebase/auth'


import { signOut } from 'firebase/auth';


const Profile = ({ route }) => {
    const navigation = useNavigation();
    const auth = getAuth();
    const user = auth.currentUser;

    const data = {
        name: 'batuhan',
        id: '1',
    }

    const SignOut = () => {

        signOut(auth)
            .then(() =>
                console.log('User signed out!'));
        navigation.navigate('SignUp');

    }





    return (
        <SafeAreaView style={styles.container}>


            <View style={styles.wrapper}>
                <Text style={styles.heading}>Selam {user.displayName}</Text>
                <View style={styles.card}>
                    <Text style={styles.subHeading}>Migrensiz Geçirdiğin Süre</Text>
                    <View style={styles.MigrenDays}>
                        <Text style={{ fontSize: 35, color: '#3DD598' }}>5 Gün</Text>
                    </View>
                </View>
            </View>



            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-evenly', alignItems: 'center', }}>

                <TouchableOpacity
                    style={styles.button1}
                    onPress={SignOut}
                >
                    <Text style={{ fontSize: 16, color: 'white' }}>Çıkış Yap</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.yellowButton}
                    onPress={SignOut}
                >
                    <Text style={{ fontSize: 16, color: '#FFC542' }}>Migren Atağını Ekle</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >

    )
}

/* <TouchableOpacity
                style={styles.button1}
                onPress={() => updateProfile(auth.currentUser, {
                    providerData: data,
                }).then(() => {
                    console.log('Profile updated')
                    console.log(auth.currentUser)
                }).catch((error) => {
                    // An error occurred
                    // ...
                })}
            >
                <Text style={{ fontSize: 16, color: 'white' }}>auth</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button1}
                onPress={deneme}
            >
                <Text style={{ fontSize: 16, color: 'white' }}>console log</Text>
            </TouchableOpacity>*/
export default Profile