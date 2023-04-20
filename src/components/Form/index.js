import React, {useState} from "react";
import { TextInput, Text, View, Button } from "react-native";
import ResultImc  from "../ResultImc";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalcular() {
        return setImc((width/(height*height)).toFixed(2))
    }

    function validatorImc() {
        if(width != null && height != null){
            imcCalcular()
            setHeight(null)
            setWidth(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular Novamente")
            return
        }

        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha peso e a altura")
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex. 1.75" keyboardType="numeric"
                    onChangeText={setHeight} value={height}
                />
                

                <Text>Peso</Text>
                <TextInput placeholder="Ex. 73" keyboardType="numeric"
                    onChangeText={setWidth} value={width}
                />

                <Button title={textButton} onPress={() => validatorImc()}/>
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}