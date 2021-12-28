import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Button, TouchableOpacity, Image } from 'react-native'
import { styles } from '../../src/styles'

const PainItem = (props) => {
    const Data = {
        Area: props.props.Area,
        Force: props.props.Force,
        Trigger: props.props.Trigger,
    }

    useEffect(() => {
        TriggerItem(Data.Trigger)

    }, [])
    const ForceItem = (item) => {
        if (item == 1) {
            return <Text style={styles.ForceItemText123}>01</Text>
        }
        else if (item == 2) {
            return <Text style={styles.ForceItemText123}>02</Text>
        }
        else if (item == 3) {
            return <Text style={styles.ForceItemText123}>03</Text>
        }
        else if (item == 4) {
            return <Text style={styles.ForceItemText456}>04</Text>
        }
        else if (item == 5) {
            return <Text style={styles.ForceItemText456}>05</Text>
        }
        else if (item == 6) {
            return <Text style={styles.ForceItemText456}>06</Text>
        }
        else if (item == 7) {
            return <Text style={styles.ForceItemText78910}>07</Text>
        }
        else if (item == 8) {
            return <Text style={styles.ForceItemText78910}>08</Text>
        }
        else if (item == 9) {
            return <Text style={styles.ForceItemText78910}>09</Text>
        }
        else if (item == 10) {
            return <Text style={styles.ForceItemText78910}>10</Text>
        }
    }

    const AreaItem = (item) => {
        if (item == 1) {
            return <Image style={styles.AreaItemimage} source={require('../../assets/Pain1icon.png')}></Image>
        }
        else if (item == 2) {
            return <Image style={styles.AreaItemimage} source={require('../../assets/Pain2icon.png')}></Image>
        }
        else if (item == 3) {
            return <Image style={styles.AreaItemimage} source={require('../../assets/Pain3icon.png')}></Image>
        }
        else if (item == 4) {
            return <Image style={styles.AreaItemimage} source={require('../../assets/Pain4icon.png')}></Image>
        }
        else if (item == 5) {
            return <Image style={styles.AreaItemimage} source={require('../../assets/Pain5icon.png')}></Image>
        }
        else if (item == 6) {
            return <Image style={styles.AreaItemimage} source={require('../../assets/Pain6icon.png')}></Image>
        }
    }

    const [TriggerItemArray, setTriggerItemArray] = useState([])
    const TriggerItem = (item) => {
        if (item.Coffee == true) { TriggerItemArray.push("Kafein") }
        if (item.Beer == true) { TriggerItemArray.push("Alkol") }
        if (item.Exercises == true) { TriggerItemArray.push("Egzersiz") }
        if (item.Food == true) { TriggerItemArray.push("Yemek") }
        if (item.Sleep == true) { TriggerItemArray.push("Uyku") }
        if (item.Stress == true) { TriggerItemArray.push("Stres") }
    }


    return (
        <View style={styles.PainItemWrapper}>
            <View style={styles.PainItemForce}>
                <View style={{ alignItems: 'center', }}>
                    {
                        ForceItem(Data.Force)
                    }
                </View>
            </View>
            <View style={styles.PainItemTrigger}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', }}>
                    {
                        TriggerItemArray.map((item) => {
                            return <Text style={{ justifyContent: 'center', margin: 5, color: '#FFFFFF' }}>{item}</Text>
                        })
                    }
                </View>
            </View>
            <View style={styles.PainItemArea}>
                {
                    AreaItem(Data.Area)
                }
            </View>
        </View>
    )
}
export default PainItem
