import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const BgColor = '#1F2E35', CardColor = '#30444E';
const GreenColor1 = '#3DD598', GreenColor2 = '#286053';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: BgColor,
    },
    wrapper: {
        margin: width * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    PainItemWrapper: {
        flexDirection: 'row',
        margin: width * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 12,
    },
    wrapperInput: {
        flexDirection: 'row',
        marginBottom: 38,
    },
    input: {
        flex: 1,
        color: '#96A7AF',
        borderColor: '#000000',
        borderBottomWidth: 1,
        fontSize: 18,
    },
    button1: {
        alignItems: 'center',
        backgroundColor: '#40DF9F',
        padding: 21,
        borderRadius: 12,
    },
    button2: {
        alignItems: 'center',
        backgroundColor: '#286053',
        padding: 21,
        borderRadius: 12,
    },
    yellowButton: {
        alignItems: 'center',
        padding: 21,
        borderRadius: 12,
        color: '#FFC542',
        backgroundColor: '#625B39',

    },
    iconPerson: {
        fontSize: 28,
        paddingVertical: 15,
        paddingHorizontal: 11,
        borderRadius: 12,
        color: '#FFC542',
        backgroundColor: '#625B39',
        marginRight: 18,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CardColor,
        borderRadius: 25,
        paddingVertical: 24,
        paddingHorizontal: 20,
        marginVertical: 8,
    },
    cardTriggered: {
        maxWidth: 395,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: CardColor,
        borderRadius: 25,
        paddingVertical: 24,
        paddingHorizontal: 20,
        marginVertical: 8,
        marginTop: 0,
    },
    heading: {
        fontSize: 42,
        color: 'white',
        marginVertical: 10,
    },
    subHeading: {
        textAlign: 'center',
        fontSize: 24,
        color: '#96A7AF',
        marginVertical: 5,
        marginBottom: 37,
    },
    MigrenDays: {
        borderColor: GreenColor1,
        borderWidth: 2,
        borderRadius: 100,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    triggereds: {
        marginHorizontal: 5,
        padding: 5,
        width: 100,
    },
    triggeredsText: {
        textAlign: 'center',
        color: 'white',
        margin: 5,
    },
    triggeredsAreaText: {
        textAlign: 'center',
        color: 'white',
        margin: 5,
        fontSize: 24,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 5,
    },
    pain3Table: {
        backgroundColor: 'red',
        justifyContent: 'center',
        borderWidth: 2,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingHorizontal: width * 0.1,
    },
    PainItemForce: {
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    PainItemTrigger: {
        height: 90,
        width: 180,
        textAlign: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    PainItemArea: {
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ForceItemText123: {
        borderColor: '#286053',
        borderWidth: 2,
        borderRadius: 50,
        textAlign: 'center',
        color: '#3DD598',
        margin: 5,
        fontSize: 24,
        padding: 10,
        paddingHorizontal: 17,
        justifyContent: 'center',
    },
    ForceItemText456: {
        borderColor: '#625B39',
        borderWidth: 2,
        borderRadius: 50,
        textAlign: 'center',
        color: '#FFC542',
        margin: 5,
        fontSize: 24,
        padding: 10,
        paddingHorizontal: 17,
    },
    ForceItemText78910: {
        borderColor: '#623A42',
        borderWidth: 2,
        borderRadius: 50,
        textAlign: 'center',
        color: '#FF565E',
        margin: 5,
        fontSize: 24,
        padding: 10,
        paddingHorizontal: 17,
    },
    AreaItemimage: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    ButtonWrapper: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 12,
    }

})