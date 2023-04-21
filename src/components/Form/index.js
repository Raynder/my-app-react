import React, { useState } from "react";
import { TextInput, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Form() {

    const [usuario, setUsuario] = useState(null)
    const [senha, setSenha] = useState(null)
    const [textButton, setTextButton] = useState("Entrar")

    function logar() {
        if (senha != null && usuario != null) {
            setUsuario(null)
            setSenha(null)
            return
        }
    }

    return (
        <ImageBackground
            source={require('../../../img/bg.jpg')}
            style={styles.backgroundImage}>
            <View style={styles.formContext}>

                <View style={styles.form} >
                    <Text style={styles.formLabel}>Login</Text>
                    <TextInput style={styles.input} placeholder="Usuário" keyboardType="numeric"
                        onChangeText={setUsuario} value={usuario}
                    />


                    {/* <Text style={styles.formLabel}>Peso</Text> */}
                    <TextInput style={styles.input} placeholder="Senha" keyboardType="numeric"
                        onChangeText={setSenha} value={senha}
                    />

                    <TouchableOpacity style={styles.buttonCalculator} onPress={() => { logar() }}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>

                    <Text style={styles.info}>Não tem cadastro? Cadastre-se</Text>
                </View>

                
            </View>
        </ImageBackground >
    );
}