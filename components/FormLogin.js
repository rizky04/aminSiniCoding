import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class FormLogin extends React.Component {
    render() {
        return (
            <View style={this.props.style}>
                <Text style={StyleSheet.inputTitle}>
                    {this.props.title}
                </Text>
                <TextInput
                    placeholder={this.props.placeholderText}
                    secureTextEntry={this.props.isSecure}
                    style={StyleSheet.input}>
                </TextInput>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#6C6CE5" }}></View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    inputTitle: {
        color: "#fff",
        fontSize: 14
    },
    input: {
        paddingVertical: 12,
        color: "#fff",
        fontSize: 14,
        fontFamily: "Poppins"
    }
}
);
