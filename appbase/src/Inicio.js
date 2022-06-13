import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
class Inicio extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>Olá {this.props.user}</Text>
                <Button
                    style={{ width: 100 }}
                    onPress={() => Actions.pop()}
                    title='Sair'
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    texto: {
        textAlign: 'right',
        fontWeight: 'bold'
    },
    botao: {
        width: 300,
        alignItems: 'center',
    }
});
export default Inicio;