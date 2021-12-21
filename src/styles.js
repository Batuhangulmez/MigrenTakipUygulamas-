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
    }
})