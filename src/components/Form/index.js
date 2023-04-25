import React, {useState} from "react";
import { TextInput, Text, View, TouchableOpacity, Vibration} from "react-native";
import ResultImc  from "../ResultImc";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalcular() {
        return setImc((weight/(height*height)).toFixed(2))
    }

    function verificationImc() {
        if(imc == null){
            Vibration.vibrate()
            setErrorMessage("Campo obrigatório*")
        }
    }

    function validatorImc() {
        if(weight != null && height != null){
            imcCalcular()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return
        }

        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha peso e a altura")
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form} >
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input} placeholder="Ex. 1.75" keyboardType="numeric"
                    onChangeText={setHeight} value={height}
                />
                

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input} placeholder="Ex. 73" keyboardType="numeric"
                    onChangeText={setWeight} value={weight}
                />

                <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validatorImc()}}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}