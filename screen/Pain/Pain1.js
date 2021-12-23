import { TabRouter, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, Button, TouchableOpacity, ScrollView, Switch } from 'react-native'
import { styles } from '../../src/styles'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, Auth, updateProfile, browserLocalPersistence } from 'firebase/auth'
import { doc, collection, getDocs, getFirestore, getDocFromCache, } from "firebase/firestore/lite"
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../firebase-config'


import { Icon } from 'react-native-elements'

const Pain1 = () => {

    //<Button title='sss' onPress={GetData} />
    const navigation = useNavigation();
    const [Trigger, setTrigger] = useState({
        Stress: false,
        Coffee: false,
        Beer: false,
        Sleep: false,
        Exercises: false,
        Food: false,
    });
    const [Stress, setStress] = useState(false);
    const [Coffee, setCoffee] = useState(false);
    const [Beer, setBeer] = useState(false);
    const [Sleep, setSleep] = useState(false);
    const [Exercises, setExercises] = useState(false);
    const [Food, setFood] = useState(false);






    const PainNavigation = () => {
        navigation.navigate('Pain2', {
            Trigger: Trigger,
        })
    }



    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={{ textAlign: 'center', }}>

                    <Text style={styles.subHeading}>Migreni Neyin Tetiklemiş Olabileceğini Düşünüyorsun ?</Text>
                </View>
                <View style={styles.cardTriggered}>
                    <View style={styles.triggereds}>
                        <Icon onPress={() => {
                            setStress(!Stress);
                            setTrigger({ ...Trigger, Stress: !Stress });
                        }} iconStyle={{
                            textAlign: 'center',
                            width: 60,
                            height: 60,
                            fontSize: 28,
                            paddingVertical: 15,
                            paddingHorizontal: 11,
                            borderRadius: 100,
                            color: '#FFC542',
                            backgroundColor: Stress ? '#625B39' : '#30444E',
                            borderWidth: 0.7,
                            borderColor: '#FFC542',
                        }} name='podcast' type='font-awesome' />
                        <Text style={styles.triggeredsText}>Stress</Text>
                    </View>
                    <View style={styles.triggereds}>
                        <Icon onPress={() => {
                            setCoffee(!Coffee);
                            setTrigger({ ...Trigger, Coffee: true });
                        }} iconStyle={{
                            textAlign: 'center',
                            width: 60,
                            height: 60,
                            fontSize: 28,
                            paddingVertical: 15,
                            paddingHorizontal: 11,
                            borderRadius: 100,
                            color: '#FFC542',
                            backgroundColor: Coffee ? '#625B39' : '#30444E',
                            borderWidth: 0.7,
                            borderColor: '#FFC542',
                        }} name='coffee' type='font-awesome' />
                        <Text style={styles.triggeredsText}>Kahve</Text>
                    </View>
                    <View style={styles.triggereds}>
                        <Icon onPress={() => {
                            setBeer(!Beer);
                            setTrigger({ ...Trigger, Beer: true });
                        }} iconStyle={{
                            textAlign: 'center',
                            width: 60,
                            height: 60,
                            fontSize: 28,
                            paddingVertical: 15,
                            paddingHorizontal: 11,
                            borderRadius: 100,
                            color: '#FFC542',
                            backgroundColor: Beer ? '#625B39' : '#30444E',
                            borderWidth: 0.7,
                            borderColor: '#FFC542',
                        }} name='beer' type='font-awesome' />
                        <Text style={styles.triggeredsText}>Alkol</Text>
                    </View>
                    <View style={styles.triggereds}>
                        <Icon onPress={() => {
                            setSleep(!Sleep);
                            setTrigger({ ...Trigger, Sleep: !Sleep });
                        }} iconStyle={{
                            textAlign: 'center',
                            width: 60,
                            height: 60,
                            fontSize: 28,
                            paddingVertical: 15,
                            paddingHorizontal: 11,
                            borderRadius: 100,
                            color: '#FFC542',
                            backgroundColor: Sleep ? '#625B39' : '#30444E',
                            borderWidth: 0.7,
                            borderColor: '#FFC542',
                        }} name='bed' type='font-awesome' />
                        <Text style={styles.triggeredsText}>Uyku Eksikliği</Text>
                    </View>

                    <View style={styles.triggereds}>
                        <Icon onPress={() => {
                            setExercises(!Exercises);
                            setTrigger({ ...Trigger, Exercises: true });
                        }} iconStyle={{
                            textAlign: 'center',
                            width: 60,
                            height: 60,
                            fontSize: 28,
                            paddingVertical: 15,
                            paddingHorizontal: 11,
                            borderRadius: 100,
                            color: '#FFC542',
                            backgroundColor: Exercises ? '#625B39' : '#30444E',
                            borderWidth: 0.7,
                            borderColor: '#FFC542',
                        }} name='child' type='font-awesome' />
                        <Text style={styles.triggeredsText}>Fiziksel Egzersiz</Text>
                    </View>
                    <View style={styles.triggereds}>
                        <Icon onPress={() => {
                            setFood(!Food);
                            setTrigger({ ...Trigger, Food: true });
                        }} iconStyle={{
                            textAlign: 'center',
                            width: 60,
                            height: 60,
                            fontSize: 28,
                            paddingVertical: 15,
                            paddingHorizontal: 11,
                            borderRadius: 100,
                            color: '#FFC542',
                            backgroundColor: Food ? '#625B39' : '#30444E',
                            borderWidth: 0.7,
                            borderColor: '#FFC542',
                        }} name='cutlery' type='font-awesome' />
                        <Text style={styles.triggeredsText}>Yenilen öğün</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-evenly', alignItems: 'center', }}>

                <TouchableOpacity
                    style={styles.yellowButton}
                    onPress={PainNavigation}
                >
                    <Text style={{ fontSize: 16, color: '#FFC542' }}>Devam Et </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.yellowButton}
                    onPress={PainNavigation}
                >
                    <Text style={{ fontSize: 16, color: '#FFC542' }}>log</Text>
                </TouchableOpacity>
            </View>
        </View >
    )

}

export default Pain1
