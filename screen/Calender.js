import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
import { firebaseConfig } from '../firebase-config';
import PainItem from '../src/components/PainItem';
import { styles } from '../src/styles'


const Calender = (route) => {
    useEffect(() => {
        GetData();
    }, [])

    const navigation = useNavigation();
    const app = initializeApp(firebaseConfig);
    const currentUid = getAuth().currentUser.uid
    const db = getFirestore(app);

    const [FbData, setFbData] = useState({})

    const GetData = async () => {
        const PainCol = collection(db, currentUid);
        const PainSnapshot = await getDocs(PainCol);
        const PainList = PainSnapshot.docs.map(doc => doc.data());
        setFbData({ PainList })
        // <PainItem props={FbData.PainList[0].Data} />
    }
    // <PainItem props={PainList[0].Data} />
    // console.log(FbData.PainList[0].Data)
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={{ justifyContent: 'center' }}>


                </View>
            </View>
        </View>
    )
}

export default Calender
