import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "80%",
        height: "auto",
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems:"center",
        borderRadius: 30,
        marginTop: "38%",
        marginLeft: "10%",
    },
    form: {
        width:"100%",
        height:"auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#000",
        fontSize:26,
        textAlign:"center",
        fontWeight:"bold",
        
    },
    input: {
        width: "90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10
    },
    buttonCalculator: {
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#4c20de",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#fff",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '110%',
    },
    info: {
        textAlign: "center",
        fontSize: 12,
        paddingVertical: 10,
    }
});

export default styles