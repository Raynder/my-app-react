import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
        fontSize: 48,
        color: "#ff0043",
        fontWeight: "bold",
    },
    numeroImc: {
        fontSize: 48,
        color: "#ff0043",
        fontWeight: "bold",
    },
    information: {
        fontSize: 18,
        color: "#ff0043",
        fontWeight: "bold",
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20
    }

});

export default styles