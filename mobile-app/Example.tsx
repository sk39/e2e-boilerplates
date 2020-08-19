import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {View,Text} from 'react-native';

export default class Example extends React.Component<{}> {

    render() {
        return (
            <View>
                <StatusBar style="auto"/>
                <Text>Test</Text>
            </View>
        );
    }
}
