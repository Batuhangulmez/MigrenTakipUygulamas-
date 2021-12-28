import { TabRouter, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, Button, TouchableOpacity, ScrollViewComponent, ScrollView } from 'react-native'
import { styles } from '../../src/styles'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, Auth, updateProfile } from 'firebase/auth'
import { Icon } from 'react-native-elements/dist/icons/Icon'
const Pain3 = ({ route }) => {
    const [Data, setData] = useState({
        Force: 0
    })
    console.log(route.params)

    const [One, setOne] = useState(false)
    const [Two, setTwo] = useState(false)
    const [Three, setThree] = useState(false)
    const [Four, setFour] = useState(false)
    const [Five, setFive] = useState(false)
    const [Six, setSix] = useState(false)
    const [Seven, setSeven] = useState(false)
    const [Eight, setEight] = useState(false)
    const [Nine, setNine] = useState(false)
    const [Ten, setTen] = useState(false)

    const navigation = useNavigation();
    const log = () => {
        console.log(Data);
    }


    const PainNavigation = () => {

        navigation.navigate('Pain4', {
            Trigger: route.params.Trigger,
            Area: route.params.Area,
            Force: Data.Force,
        })
    }

    return (
        <ScrollView>

            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={{ textAlign: 'center', }}>
                        <Text style={styles.subHeading}>Migrenin Şiddeti Ne kadar ?</Text>
                    </View>
                    <View style={styles.cardTriggered}>
                        <View style={{ flexDirection: 'column', marginHorizontal: 50, }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                                <View style={{ flexDirection: 'column', paddingHorizontal: 20, }}>
                                    <Text onPress={() => {
                                        setOne(!One)
                                        setTwo(false)
                                        setThree(false)
                                        setFour(false)
                                        setFive(false)
                                        setSix(false)
                                        setSeven(false)
                                        setEight(false)
                                        setNine(false)
                                        setTen(false)
                                        setData({ Force: 1 })
                                    }}
                                        style={{
                                            borderColor: One ? 'red' : 'white',
                                            borderWidth: 2,
                                            borderRadius: 50,
                                            textAlign: 'center',
                                            color: 'white',
                                            margin: 5,
                                            fontSize: 24,
                                            padding: 10,
                                            paddingHorizontal: 17,
                                        }}>1</Text>
                                    <Text onPress={() => {
                                        setOne(false)
                                        setTwo(!Two)
                                        setThree(false)
                                        setFour(false)
                                        setFive(false)
                                        setSix(false)
                                        setSeven(false)
                                        setEight(false)
                                        setNine(false)
                                        setTen(false)
                                        setData({ Force: 2 })
                                    }} style={{
                                        borderColor: Two ? 'red' : 'white',
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        textAlign: 'center',
                                        color: 'white',
                                        margin: 5,
                                        fontSize: 24,
                                        padding: 10,
                                        paddingHorizontal: 17,
                                    }}>2</Text>
                                    <Text onPress={() => {
                                        setOne(false)
                                        setTwo(false)
                                        setThree(!Three)
                                        setFour(false)
                                        setFive(false)
                                        setSix(false)
                                        setSeven(false)
                                        setEight(false)
                                        setNine(false)
                                        setTen(false)
                                        setData({ Force: 3 })
                                    }} style={{
                                        borderColor: Three ? 'red' : 'white',
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        textAlign: 'center',
                                        color: 'white',
                                        margin: 5,
                                        fontSize: 24,
                                        padding: 10,
                                        paddingHorizontal: 17,
                                    }}>3</Text>
                                </View>
                                <View style={{
                                    backgroundColor: '#286053',
                                    justifyContent: 'center',
                                    borderWidth: 2,
                                    borderBottomWidth: 1,
                                    paddingHorizontal: 20,
                                }}>
                                    <Icon iconStyle={{
                                        textAlign: 'center',
                                        width: 60,
                                        height: 60,
                                        fontSize: 28,
                                        paddingVertical: 15,
                                        paddingHorizontal: 11,
                                        borderRadius: 100,
                                        color: '#3DD598',
                                        borderWidth: 0.7,
                                        borderColor: '#3DD598',
                                    }} name='flash' type='font-awesome' />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{ flexDirection: 'column', paddingHorizontal: 20, }}>
                                    <Text onPress={() => {
                                        setOne(false)
                                        setTwo(false)
                                        setThree(false)
                                        setFour(!Four)
                                        setFive(false)
                                        setSix(false)
                                        setSeven(false)
                                        setEight(false)
                                        setNine(false)
                                        setTen(false)
                                        setData({ Force: 4 })
                                    }} style={{
                                        borderColor: Four ? 'red' : 'white',
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        textAlign: 'center',
                                        color: 'white',
                                        margin: 5,
                                        fontSize: 24,
                                        padding: 10,
                                        paddingHorizontal: 17,
                                    }}>4</Text>
                                    <Text onPress={() => {
                                        setOne(false)
                                        setTwo(false)
                                        setThree(false)
                                        setFour(false)
                                        setFive(!Five)
                                        setSix(false)
                                        setSeven(false)
                                        setEight(false)
                                        setNine(false)
                                        setTen(false)
                                        setData({ Force: 5 })
                                    }} style={{
                                        borderColor: Five ? 'red' : 'white',
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        textAlign: 'center',
                                        color: 'white',
                                        margin: 5,
                                        fontSize: 24,
                                        padding: 10,
                                        paddingHorizontal: 17,
                                    }}>5</Text>
                                    <Text onPress={() => {
                                        setOne(false)
                                        setTwo(false)
                                        setThree(false)
                                        setFour(false)
                                        setFive(false)
                                        setSix(!Six)
                                        setSeven(false)
                                        setEight(false)
                                        setNine(false)
                                        setTen(false)
                                        setData({ Force: 6 })
                                    }} style={{
                                        borderColor: Six ? 'red' : 'white',
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        textAlign: 'center',
                                        color: 'white',
                                        margin: 5,
                                        fontSize: 24,
                                        padding: 10,
                                        paddingHorizontal: 17,
                                    }}>6</Text>
                                </View>
                                <View style={{
                                    backgroundColor: '#625B39',
                                    justifyContent: 'center',
                                    borderLeftWidth: 2,
                                    borderRightWidth: 2,
                                    borderWidth: 1,
                                    paddingHorizontal: 20,
                                }}>
                                    <Icon iconStyle={{
                                        textAlign: 'center',
                                        width: 60,
                                        height: 60,
                                        fontSize: 28,
                                        paddingVertical: 15,
                                        paddingHorizontal: 11,
                                        borderRadius: 100,
                                        color: '#FFC542',
                                        borderWidth: 0.7,
                                        borderColor: '#FFC542',
                                    }} name='flash' type='font-awesome' />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{ flexDirection: 'column', paddingHorizontal: 20, }}>
                                    <Text onPress={() => {
                                        setOne(false)
                                        setTwo(false)
                                        setThree(false)
                                        setFour(false)
                                        setFive(false)
                                        setSix(false)
                                        setSeven(!Seven)
                                        setEight(false)
                                        setNine(false)
                                        setTen(false)
                                        setData({ Force: 7 })
                                    }} style={{
                                        borderColor: Seven ? 'red' : 'white',
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        textAlign: 'center',
                                        color: 'white',
                                        margin: 5,
                                        fontSize: 24,
                                        padding: 10,
                                    }}>7</Text>
                                    <Text onPress={() => {
                                        setOne(false)
                                        setTwo(false)
                                        setThree(false)
                                        setFour(false)
                                        setFive(false)
                                        setSix(false)
                                        setSeven(false)
                                        setEight(!Eight)
                                        setNine(false)
                                        setTen(false)
                                        setData({ Force: 8 })
                                    }} style={{
                                        borderColor: Eight ? 'red' : 'white',
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        textAlign: 'center',
                                        color: 'white',
                                        margin: 5,
                                        fontSize: 24,
                                        padding: 10,
                                    }}>8</Text>
                                    <Text onPress={() => {
                                        setOne(false)
                                        setTwo(false)
                                        setThree(false)
                                        setFour(false)
                                        setFive(false)
                                        setSix(false)
                                        setSeven(false)
                                        setEight(false)
                                        setNine(!Nine)
                                        setTen(false)
                                        setData({ Force: 9 })
                                    }} style={{
                                        borderColor: Nine ? 'red' : 'white',
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        textAlign: 'center',
                                        color: 'white',
                                        margin: 5,
                                        fontSize: 24,
                                        padding: 10,
                                    }}>9</Text>
                                    <Text onPress={() => {
                                        setOne(false)
                                        setTwo(false)
                                        setThree(false)
                                        setFour(false)
                                        setFive(false)
                                        setSix(false)
                                        setSeven(false)
                                        setEight(false)
                                        setNine(false)
                                        setTen(!Ten)
                                        setData({ Force: 10 })
                                    }} style={{
                                        borderColor: Ten ? 'red' : 'white',
                                        borderWidth: 2,
                                        borderRadius: 50,
                                        textAlign: 'center',
                                        color: 'white',
                                        margin: 5,
                                        fontSize: 24,
                                        padding: 10,
                                    }}>10</Text>
                                </View>
                                <View style={{
                                    backgroundColor: '#623A42',
                                    justifyContent: 'center',
                                    borderWidth: 2,
                                    borderTopWidth: 1,
                                    paddingHorizontal: 20,
                                }}>
                                    <Icon iconStyle={{
                                        textAlign: 'center',
                                        width: 60,
                                        height: 60,
                                        fontSize: 28,
                                        paddingVertical: 15,
                                        paddingHorizontal: 11,
                                        borderRadius: 100,
                                        color: '#FF565E',
                                        borderWidth: 0.7,
                                        borderColor: '#FF565E',
                                    }} name='flash' type='font-awesome' />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 12, }}>
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
        </ScrollView>

    )
}

export default Pain3
