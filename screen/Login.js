import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Button1 from '../src/components/Button1'
import { styles } from '../src/styles'

const SignUp = ({ route }) => {
    const navigation = useNavigation();
    console.log(route);


    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ textAlign: 'center' }}>Login</Text>
            <Button1 text='selam' navigate={() => navigation.navigate('SignUp')} />


        </SafeAreaView>
    )
}
export default SignUp;