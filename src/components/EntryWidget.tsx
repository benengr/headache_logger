import React, {Component} from 'react';
import {AirbnbRating} from 'react-native-elements';
import {StyleSheet, Text, View, GestureResponderEvent} from 'react-native';
import ActionButton from './ActionButton';
import Strings from '../values/strings';
import Realm from 'realm';
import Headache from '../models/Headache';

interface Props {
    onSubmit: () => void;
    onCancel: () => void;
    realm: Realm;
}

interface State {
    severity: number;
}

export default class EntryWidget extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            severity: 3,
        }

        // Bind this to class functions
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFinishRating = this.handleFinishRating.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleFinishRating(rating: number) {
        console.log(`rating is ${rating}`);
        this.setState({severity: rating});
    }

    handleSubmit(event: GestureResponderEvent) {
        console.log(`handleSubmit has been called with severity ${this.state.severity}`);
        this.props.realm.write(() => {
            const entry = new Headache(this.state.severity);
            this.props.realm.create(Headache.schema.name, entry);
        })
        this.props.onSubmit();
    }

    handleCancel(event: GestureResponderEvent) {
        console.log("handleCancel has been called");
        this.props.onCancel();
    }

    render() {
        return(
            <View style={styles.conatiner}>
                <Text style={styles.header}>{Strings.entryHeader}</Text>

                <View style={styles.contentContainer}>
                    <AirbnbRating count={Strings.severity.length}
                        reviews={Strings.severity}
                        onFinishRating={this.handleFinishRating}/>
                </View>

                <View style={styles.buttonContainer}>
                    <ActionButton style={styles.button} onPress={this.handleSubmit}>{Strings.buttonSubmit}</ActionButton>
                    <ActionButton style={styles.button} onPress={this.handleCancel}>{Strings.buttonCancel}</ActionButton>
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
