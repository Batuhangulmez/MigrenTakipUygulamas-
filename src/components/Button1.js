import React from 'react'
import { View, Text, SafeAreaView, Button, TextInput, TouchableOpacity, } from 'react-native'
import { styles } from '../styles'


const Button1 = (props) => {
    return (
        <TouchableOpacity
            style={styles.button1}
            onPress={props.navigate}
        >
            <Text style={{ fontSize: 16, color: 'white' }}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default Button1
