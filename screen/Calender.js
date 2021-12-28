import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore, } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Button, ScrollViewComponent, ScrollView } from 'react-native'
import { firebaseConfig } from '../firebase-config';
import PainItem from '../src/components/PainItem';
import { styles } from '../src/styles'


const Calender = (route) => {
    useEffect(() => {
        GetData();
    })

    const navigation = useNavigation();
    const app = initializeApp(firebaseConfig);
    const currentUid = getAuth().currentUser.uid
    const db = getFirestore(app);
    const [ControlData, setControlData] = useState(false)

    const [FbData, setFbData] = useState({})
    const loading = () => {
        return ControlData ? GetPainItem() : <View><Text>Loading</Text></View>
    }
    const GetPainItem = () => {
        return FbData.PainList.map(element => <PainItem props={element.Data} />);
    }
    // console.log(FbData.PainList[0].timestamp.seconds)
    //let key = FbData.PainList[0].timestamp.seconds;
    //console.log(key)
    const GetData = async () => {
        const PainCol = collection(db, currentUid);
        const PainSnapshot = await getDocs(PainCol);
        const PainList = PainSnapshot.docs.map(doc => doc.data());
        setFbData({ PainList })
        setControlData(true)
    }
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <ScrollView>
                    <View style={{ justifyContent: 'center' }}>
                        {
                            loading()
                        }
                    </View>
                </ScrollView>
                <View>
                </View>
            </View>
        </View>
    )
}

export default Calender
