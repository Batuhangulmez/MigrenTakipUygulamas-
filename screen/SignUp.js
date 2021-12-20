import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Button, TextInput, TouchableOpacity, Alert, } from 'react-native'
import { styles } from '../src/styles'
import { Icon } from 'react-native-elements'
import Button1 from '../src/components/Button1'
import Button2 from '../src/components/Button2'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase-config'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, Auth, updateCurrentUser } from 'firebase/auth'


const Login = ({ route }) => {
    const navigation = useNavigation();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleCreateAccont = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('acount create')
                const user = userCredential.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error)
                Alert.alert(error.message)
            })

    }

    const handleSignIn = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('sign in')
                const user = userCredential.user;
                console.log(user)
                navigation.navigate('HomePage');
            })
            .catch(error => {
                console.log(error)
                Alert.alert(error.message)
            })

    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <Text style={styles.heading}>MERHABA!</Text>
                <Text style={styles.subHeading}>Lütfen bilgilerinizi giriniz.</Text>
                <View style={styles.wrapperInput}>
                    <Icon iconStyle={styles.iconPerson} name='person' />
                    <TextInput
                        style={styles.input}
                        placeholder='Ad ,Soyad'
                        placeholderTextColor='#96A7AF'
                        onChangeText={value => setEmail(value)}
                    />
                </View>
                <View style={styles.wrapperInput}>
                    <Icon iconStyle={styles.iconPerson} name='person' />
                    <TextInput
                        style={styles.input}
                        placeholder='Yaş'
                        placeholderTextColor='#96A7AF'
                        onChangeText={value => setPassword(value)}

                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 12 }}>
                        <TouchableOpacity
                            style={styles.button2}
                            onPress={handleSignIn}
                        >
                            <Text style={{ fontSize: 16, color: 'white' }}>login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={styles.button1}
                            onPress={handleCreateAccont}
                        >
                            <Text style={{ fontSize: 16, color: 'white' }}>kaydet</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        </SafeAreaView>
    )
}

export default Login
