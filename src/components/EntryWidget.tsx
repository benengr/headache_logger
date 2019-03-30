import React, {Component} from 'react';
import {AirbnbRating} from 'react-native-elements';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ActionButton from './ActionButton';
import Strings from '../values/strings';


interface Props {}
export default class EntryWidget extends Component<Props> {

    render() {
        return(
            <View style={styles.conatiner}>
                <Text style={styles.header}>{Strings.entryHeader}</Text>

                <View style={styles.contentContainer}>
                    <AirbnbRating count={Strings.severity.length}
                        reviews={Strings.severity}/>
                </View>

                <View style={styles.buttonContainer}>
                    <ActionButton style={styles.button}>{Strings.buttonSubmit}</ActionButton>
                    <ActionButton style={styles.button}>{Strings.buttonCancel}</ActionButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    header: {
        fontSize: 36,
        fontWeight: 'bold',
        backgroundColor: '#888',
        textAlign: 'center',
    },

    contentContainer: {
        backgroundColor: '#944',
    },

    buttonContainer: {
        backgroundColor: "#CCC",
        flexDirection: "row",
        justifyContent: 'space-evenly'
    },

    button: {
        marginBottom: 18,
        marginTop: 18,
    }
});
