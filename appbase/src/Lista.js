import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, Button, Alert, InteractionManager } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SQLite from 'react-native-sqlite-storage';
const database_name = 'Empresa.db';
export default class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [],
        };
    }
    //Método que será executado ao carregar a abertura do arquivo(Tela)
    componentDidMount() {
        let db;
        SQLite.openDatabase(
            database_name,
        )
            .then(DB => {
                db = DB;
                db.transaction(tx => {
                    tx.executeSql('SELECT * FROM cliente ORDER BY nome', [], (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i) {
                            temp.push(results.rows.item(i));
                        }
                        this.setState({
                            FlatListItems: temp,
                        });
                    });
                });
            })
    }
    ListViewItemSeparator = () => {
        return (
            <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
        );
    };
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.textoCab}>Lista dos Clientes</Text>
                </View>
                <FlatList
                    data={this.state.FlatListItems}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View
                            key={item.id}
                            style={{
                                backgroundColor: '#B0C4DE', padding: 30, borderBottomWidth:
                                    1, flexDirection: 'row', justifyContent: 'space-between'
                            }}
                        >
                            <View>
                                <Text>Id: {item.id}</Text>
                                <Text>Nome: {item.nome}</Text>
                            </View>
                            <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                                <View style={{ marginRight: 5 }}>
                                    <Button title='Alterar' onPress={() => {
                                         Alert.alert('Alterar:', 'ID: ' + item.id,
                                         [
                                            {text: 'Sim', onPress:()=>{Actions.cadastro({nome:InteractionManager.nome, senha:item.senha, id:item.id, estado:'alterar'})}},
                                            {text: 'Não'}
                                         ]) }} />
                                </View>
                                <View>
                                    <Button title='Excluir' onPress={() => { Alert.alert('Excluir:', 'ID: ' + item.id) }} />
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4682B4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoCab: {
        color: '#fff',
        fontSize: 30,
        margin: 30
    },
    borda: {
        borderBottomWidth: 2
    }
});