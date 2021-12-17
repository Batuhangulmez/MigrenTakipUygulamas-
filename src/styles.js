import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const BgColor = '#22343C';
const CardColor = '#30444E';


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: BgColor,
    },
    wrapper: {
        margin: width * 0.05,
    },
    card: {
        backgroundColor: CardColor,
        borderRadius: 25,
        paddingVertical: 24,
        paddingHorizontal: 20,
        marginVertical: 8,
    },
    heading: {
        fontFamily: 'SFPRODISPLAYULTRALIGHTITALIC',

    }
})