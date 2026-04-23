import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import { TextInput } from 'react-native-paper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

type InputProps = {
    cep : string
    setCep: (value : string) => void
    error: string | null
    Get: () => void
}


export default function InputContainer({
    cep,
    setCep,
    error,
    Get
} : InputProps){
    return(
        <View style={styles.container}>
            <Text style={styles.tipText}>Digite o CEP para buscar informações de endereço</Text>
            <TextInput 
                style={styles.input}
                left={<TextInput.Icon style={{marginLeft: -10}}icon={require('../assets/images/gps-icon.png')}/>}
                placeholder="Ex: 44530000"
                textColor="#fff"
                value={cep} 
                onChangeText={setCep}>
            </TextInput>

            <TouchableOpacity style={styles.button} onPress={Get}> 
                <Text style={styles.buttonText}>Buscar</Text> 
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: wp("100"),
        height: hp("35"),
        alignItems: "center",
        backgroundColor: "#0a0a0a"
    },

    tipText: {
        marginTop: hp("3"),
        marginRight: hp("2"),
        color: "#cecece"
    },

    input : {
        width: wp("90%"),
        marginTop: hp("1%"),
        borderWidth: 1,
        paddingHorizontal: wp("1"),
        backgroundColor: "#1b1717",
        color: "#fff",
        borderColor: "#303030",
        borderRadius: 8,
    },
    error: {
        color: "red",
        alignSelf: "flex-start",
        marginLeft: hp("2.5%")
    },

    button: {
        width: wp("90%"),
        height: hp("5%"),
        marginTop: hp("1%"),
        borderWidth: 1,
        backgroundColor: "#8400d1",
        borderColor: "#5c0291",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        fontSize: wp("4%"),
        color: "#fff",
    }
})