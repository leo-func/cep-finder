import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
import useCepViewModel from "../viewmodels/cep.viewmodel";
import InformationContainer from "../components/informationContainer";
import InputContainer from "../components/InputContainer";

export default function CepView({
    cep,
    setCep,
    address,
    loading,
    error,
    Get
} : ReturnType<typeof useCepViewModel>) {

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/cep-finder-logo.png')}></Image>

            <InputContainer cep={cep} setCep={setCep} error={error} Get={Get} ></InputContainer>
            

            {error && 
            <InformationContainer 

            loading={loading} text={error} address={address} image= {require("../assets/images/error-icon.png")}
            ></InformationContainer> 
            || !address && 
            <InformationContainer 
            loading={loading}
            text={"Você ainda não pesquisou um endereço :/"} 
            address={address} image= {require("../assets/images/lookingfor.png")}
            ></InformationContainer>
            || address && 
            <InformationContainer 
            loading={loading}
            text= {null} 
            address={address} image= {undefined}
            ></InformationContainer>
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: hp("20%")
    },

    logo : {
        width: wp("55%"),
        height: hp("30%"),
        resizeMode: "contain"
    },

    text: {
        fontSize: hp("3%"),
        fontWeight: "bold",
        color: "#fff"

    },


})