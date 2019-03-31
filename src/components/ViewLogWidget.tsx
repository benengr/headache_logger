import React, {Component} from 'react';
import { Text } from 'react-native';

interface Props {};

export default class ViewLogWidget extends Component<Props> {
    render() {
        return (
            <Text>Hello Log</Text>
        )
    }
}