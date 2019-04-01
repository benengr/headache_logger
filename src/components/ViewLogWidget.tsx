import React, {Component} from 'react';
import { Text, View } from 'react-native';
import ActionButton from './ActionButton';

interface Props {
    onCancel: () => void;
}

export default class ViewLogWidget extends Component<Props> {
    render() {
        return (
            <View>
                <Text>Hello Log</Text>
                <ActionButton onPress={this.props.onCancel}>Done</ActionButton>
            </View>
        )
    }
}