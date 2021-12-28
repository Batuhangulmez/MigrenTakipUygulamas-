import { TabRouter, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, Button, TouchableOpacity } from 'react-native'
import { styles } from '../../src/styles'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, Auth, updateProfile } from 'firebase/auth'
import { firebaseConfig } from '../../firebase-config'
import { initializeApp } from 'firebase/app'
import { addDoc, collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore/lite'
import PainItem from '../../src/components/PainItem'



const Pain4 = ({ route }) => {
    // console.log(route.params)
    const [FbData, setFbData] = useState({})
    const Data = {
        Area: route.params.Area,
        Force: route.params.Force,
        Trigger: route.params.Trigger,
    }

    const app = initializeApp(firebaseConfig);
    const currentUid = getAuth().currentUser.uid
    const db = getFirestore(app);

    const GetKey = async () => {
        const PainCol = collection(db, currentUid);
        const PainSnapshot = await getDocs(PainCol);
        const PainList = PainSnapshot.docs.map(doc => doc.data());
        const arrayKey = PainList.length;
        return arrayKey;
    }

    const GetData = async () => {
        const PainCol = collection(db, currentUid);
        const PainSnapshot = await getDocs(PainCol);
        const PainList = PainSnapshot.docs.map(doc => doc.data());
        setFbData({ PainList })
        return PainList;
    }

    const navigation = useNavigation();


    const SetData = async () => {
        const key = (await GetKey()).valueOf();

        await setDoc(doc(db, currentUid, `${key}`), {
            key: key,
            Data
        });
        navigation.navigate('HomePage')
    }


    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={{ textAlign: 'center', }}>
                    <Text style={styles.subHeading}>Migren Takvimine Kayıt Edilsin mi ?</Text>
                </View>
                <PainItem props={Data} />
            </View>
            <View style={styles.ButtonWrapper}>
                <TouchableOpacity
                    style={styles.yellowButton}
                    onPress={SetData}
                >
                    <Text style={{ fontSize: 16, color: '#FFC542' }}>Kayıt Et</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.yellowButton}
                    onPress={GetData}
                >
                    <Text style={{ fontSize: 16, color: '#FFC542' }}>get</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Pain4
