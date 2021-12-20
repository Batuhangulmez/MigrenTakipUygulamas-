import React from 'react'
import { View, Text, SafeAreaView, Button, TextInput, TouchableOpacity, } from 'react-native'
import { styles } from '../styles'


const Button1 = (props) => {
    return (
        <TouchableOpacity
            style={styles.button2}
            onPress={props.navigate}
        >
            <Text style={{ fontSize: 16, color: '#3DD598' }}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default Button1
