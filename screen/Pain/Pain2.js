import { TabRouter, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, Button, TouchableOpacity, Image } from 'react-native'
import { styles } from '../../src/styles'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, Auth, updateProfile } from 'firebase/auth'
import { image1 } from '../../assets/Pain1icon.png'

const Pain2 = ({ route }) => {
    const [Data, setData] = useState({
        Area: ""
    })

    const [select1, setSelect1] = useState(false);
    const [select2, setSelect2] = useState(false);
    const [select3, setSelect3] = useState(false);
    const [select4, setSelect4] = useState(false);
    const [select5, setSelect5] = useState(false);
    const [select6, setSelect6] = useState(false);

    const navigation = useNavigation();
    const log = () => {
        console.log(Data);


    }


    const PainNavigation = () => {

        navigation.navigate('Pain3', {
            Trigger: route.params.Trigger,
            Area: Data.Area
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={{ textAlign: 'center', }}>
                    <Text style={styles.subHeading}>Migrenin Hangi Bölgede Başladı ?</Text>
                </View>

                <View style={styles.cardTriggered}>
                    <View style={styles.triggereds}>
                        <Image style={styles.image} source={require('../../assets/Pain1icon.png')}></Image>

                        <Text onPress={() => {
                            setSelect1(!select1);
                            setSelect2(false)
                            setSelect3(false)
                            setSelect4(false)
                            setSelect5(false)
                            setSelect6(false)
                            setData({ Area: "1" });
                        }} style={{
                            borderColor: select1 ? 'red' : 'white',
                            borderWidth: 2,
                            borderRadius: 50,
                            textAlign: 'center',
                            color: 'white',
                            margin: 5,
                            fontSize: 24,
                            padding: 10,
                        }}>1</Text>

                    </View>
                    <View style={styles.triggereds}>
                        <Image style={styles.image} source={require('../../assets/Pain2icon.png')}></Image>
                        <Text onPress={() => {
                            setSelect2(!select2);
                            setSelect1(false)
                            setSelect3(false)
                            setSelect4(false)
                            setSelect5(false)
                            setSelect6(false)
                            setData({ Area: "2" });

                        }} style={{
                            borderColor: select2 ? 'red' : 'white',
                            borderWidth: 2,
                            borderRadius: 50,
                            textAlign: 'center',
                            color: 'white',
                            margin: 5,
                            fontSize: 24,
                            padding: 10,
                        }}>2</Text>
                    </View>
                    <View style={styles.triggereds}>
                        <Image style={styles.image} source={require('../../assets/Pain3icon.png')}></Image>
                        <Text onPress={() => {
                            setSelect3(!select3);
                            setSelect2(false)
                            setSelect1(false)
                            setSelect4(false)
                            setSelect5(false)
                            setSelect6(false)
                            setData({ Area: "3" });
                        }} style={{
                            borderColor: select3 ? 'red' : 'white',
                            borderWidth: 2,
                            borderRadius: 50,
                            textAlign: 'center',
                            color: 'white',
                            margin: 5,
                            fontSize: 24,
                            padding: 10,
                        }}>3</Text>
                    </View>
                    <View style={styles.triggereds}>
                        <Image style={styles.image} source={require('../../assets/Pain4icon.png')}></Image>
                        <Text onPress={() => {
                            setSelect4(!select4);
                            setSelect2(false)
                            setSelect3(false)
                            setSelect1(false)
                            setSelect5(false)
                            setSelect6(false)
                            setData({ Area: "4" });
                        }} style={{
                            borderColor: select4 ? 'red' : 'white',
                            borderWidth: 2,
                            borderRadius: 50,
                            textAlign: 'center',
                            color: 'white',
                            margin: 5,
                            fontSize: 24,
                            padding: 10,
                        }}>4</Text>
                    </View>
                    <View style={styles.triggereds}>
                        <Image style={styles.image} source={require('../../assets/Pain5icon.png')}></Image>
                        <Text onPress={() => {
                            setSelect5(!select5);
                            setSelect2(false)
                            setSelect3(false)
                            setSelect4(false)
                            setSelect1(false)
                            setSelect6(false)
                            setData({ Area: "5" });
                        }} style={{
                            borderColor: select5 ? 'red' : 'white',
                            borderWidth: 2,
                            borderRadius: 50,
                            textAlign: 'center',
                            color: 'white',
                            margin: 5,
                            fontSize: 24,
                            padding: 10,
                        }}>5</Text>
                    </View>
                    <View style={styles.triggereds}>
                        <Image style={styles.image} source={require('../../assets/Pain6icon.png')}></Image>
                        <Text onPress={() => {
                            setSelect6(!select6);
                            setSelect2(false)
                            setSelect3(false)
                            setSelect4(false)
                            setSelect5(false)
                            setSelect1(false)
                            setData({ Area: "6" });
                        }} style={{
                            borderColor: select6 ? 'red' : 'white',
                            borderWidth: 2,
                            borderRadius: 50,
                            textAlign: 'center',
                            color: 'white',
                            margin: 5,
                            fontSize: 24,
                            padding: 10,
                        }}>6</Text>
                    </View>

                </View>
            </View>
            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-evenly', alignItems: 'center', }}>

                <TouchableOpacity
                    style={styles.yellowButton}
                    onPress={() => {
                        PainNavigation()
                    }}
                >
                    <Text style={{ fontSize: 16, color: '#FFC542' }}>Devam Et </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.yellowButton}
                    onPress={log}
                >
                    <Text style={{ fontSize: 16, color: '#FFC542' }}>log</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Pain2
