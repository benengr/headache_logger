import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ActionButton from './ActionButton';

interface Props {}
export default class EntryWidget extends Component<Props> {

    render() {
        return(
            <View style={styles.conatiner}>
                <Text>Hello</Text>
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
        height: '100%',
        width: '100%',
        backgroundColor: '#444',
    },

    buttonContainer: {
        backgroundColor: "#CCC",
        height: 100,
        flex: 1,
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'space-evenly'
    },

    button: {
        marginBottom: 36,
    }
});
