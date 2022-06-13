import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Login from './Login';
import Inicio from './Inicio';
import Cadastro from './Cadastro';
import Lista from './Lista';
class App extends Component {
    render() {
        return (
            <Router>
                <Stack key={Login} hideNavBar>
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="inicio" component={Inicio} title="Início" />
                    <Scene key="cadastro" component={Cadastro} title="Cadastro" />
                    <Scene key="lista" component={Lista} title="Lista" />
                </Stack>
            </Router>
        );
    }
}
export default App;
