import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface Props {
    style: object;
}
export default class ActionButton extends Component<Props> {

    render() {
        let temp = {...styles.button, ...this.props.style};
        return(
            <TouchableOpacity style={temp} onPress={e => {}}>
                <Text style={styles.textStyle}>{this.props.children}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 15,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        minWidth: 150,
    },

    textStyle: {
        color: 'white',
        fontSize: 20,
    }
});
