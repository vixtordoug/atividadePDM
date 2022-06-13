import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { TextInput } from 'react-native-gesture-handler';
const entrar = (user, senha) => {
    if (user == 'admin' && senha == '') {
        Actions.pop({ Login });
        Actions.inicio({ senha: senha, user: user });
    } else {
        Alert.alert('Atenção!', 'Usuário e/ou senha incorretos');
    }
}
const Login = () => {
    //Hook
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.campoTexto}
                onChangeText={user => setUser(user)}
                defaultValue={user} />
            <TextInput
                style={styles.campoTexto}
                onChangeText={senha => setSenha(senha)}
                defaultValue={senha}
                secureTextEntry={true} />
            <Text style={styles.texto} onPress={() => { Actions.cadastro() }}>
                Não tem cadastro? Cadastre-se!
            </Text>
            <Button
                onPress={() => { entrar(user, senha) }}
                title='Login' />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    campoTexto: {
        backgroundColor: '#000',
        width: 300,
        margin: 10,
        color: '#fff'
    },
    texto: {
        fontSize: 15
    },
});
export default Login;