import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ActionButton from './ActionButton';
import Strings from '../values/strings';


interface Props {}
export default class EntryWidget extends Component<Props> {

    render() {
        return(
            <View style={styles.conatiner}>
                <Text style={styles.header}>{Strings.entryHeader}</Text>
                <View style={styles.buttonContainer}>
                    <ActionButton style={styles.button}>Submit</ActionButton>
                    <ActionButton style={styles.button}>Cancel</ActionButton>
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
