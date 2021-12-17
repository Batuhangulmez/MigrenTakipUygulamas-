import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
import { styles } from '../src/styles'
import { Icon } from 'react-native-elements'


const Login = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <Text style={styles.heading}>Seni</Text>
                <Icon
                    name='person' />
                <Button
                    title='HomePage'
                    onPress={() => navigation.navigate('HomePage')} />

                <Text style={{ textAlign: 'center' }}>Seni</Text>
                <Icon
                    name='person' />
                <Button
                    title='HomePage'
                    onPress={() => navigation.navigate('HomePage')} />

            </View>

        </SafeAreaView>
    )
}

export default Login
