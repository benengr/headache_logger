import React, {Component} from 'react';
import { Text, View , FlatList, StyleSheet} from 'react-native';
import ActionButton from './ActionButton';
import Headache from '../models/Headache';
import { Results } from 'realm';

interface Props {
    onCancel: () => void;
    realm: Realm;
}

export default class ViewLogWidget extends Component<Props> {

    render() {
        const results = this.props.realm.objects<Headache>(Headache.schema.name);
        return (
            <View style={styles.conatiner}>
                <Text style={styles.header}>There are {results.length} entries</Text>
                <FlatList
                    style={styles.contentContainer}
                    data={results}
                    renderItem={(row) => <Text>{new Date(row.item.time).toDateString()}: {row.item.severity}</Text>}
                    keyExtractor={(item, index) =>  item.time.toString()} />
                <ActionButton onPress={this.props.onCancel}>Cancel</ActionButton>
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