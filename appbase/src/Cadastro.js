import React, { Component, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Db from './Db';
var db = new Db();
const insereDado = (nome, senha) => {
    db.initDb();
    let cliente = {
        nome_cliente: nome,
        senha_cliente: senha
    }
    db.addCliente(cliente);
}
const alteraDado = (id, nome, senha) => {
    db.initDb();
    let cliente = {
        id_cliente: id,
        nome_cliente: nome,
        senha_cliente: senha
    }
    db.updateCliente(cliente);
}
const listarClientes = () => {
    db.initDb();
    db.listarClientes();
}
const Cadastro = (props) => {

    const [id, setId] = useState('')
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');
    const [repetirSenha, setRepetirSenha] = useState('');
    const [estado, setEstado] = useEstado('Cadastrado');

    useEffect(() => {
        setId(props.id);
        setUser(props.nome);
        setSenha(props.senha);
        setEstado(props.estado);
    }, []);

    const salvar = (estado) => {
        if (estado == 'cadastro') {
            insereDado(user, senha);
        } else{
            alteraDado(id, user, senha);
        }
        setEstado('cadastro');
    }
    return (
        <View style={styles.container}>
            <Text>Informe o seu nome</Text>
            <TextInput
                style={styles.campoTexto}
                onChangeText={user => setUser(user)}
                defaultValue={user} />
            <Text>Informe a senha</Text>
            <TextInput
                style={styles.campoTexto}
                onChangeText={senha => setSenha(senha)}
                defaultValue={senha}
                secureTextEntry={true} />
            <Text>Repita a senha</Text>
            <TextInput
                style={styles.campoTexto}
                onChangeText={repetirSenha => setRepetirSenha(repetirSenha)}
                defaultValue={repetirSenha}
                secureTextEntry={true} />
            <TouchableOpacity style={styles.botao} onPress={() => { insereDado(user, senha) }} >
                <Text style={styles.textoBotao}>Salvar Cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => { Actions.lista() }}>
                <Text style={styles.textoBotao}>Listar</Text>
            </TouchableOpacity>
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
    botao: {
        backgroundColor: '#538530',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    },
    textoBotao: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    }
});
export default Cadastro;