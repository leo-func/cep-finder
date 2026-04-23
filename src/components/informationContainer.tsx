import { View, Text, StyleSheet, Image, ImageSourcePropType, ActivityIndicator} from "react-native";
import { Cep } from "../models/cep.model"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


type CepData = {
    address : Cep | null
    image : ImageSourcePropType | undefined
    text : string | null
    loading: boolean
}

export default function InformationContainer({
    address,
    image,
    text,
    loading
} : CepData) {
    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.iconBackground}> 
                    <Image style={styles.icon} source={require('../assets/images/gps-icon.png')}>
                </Image> </View>
                <Text style={styles.titleContainer}>Resultados</Text>
            </View>

            {loading && <ActivityIndicator style={{marginTop: hp("12")}} color={"#8400d1"} size={"large"}></ActivityIndicator>}

            { !address && !loading &&
            <View style={{width: wp("90"), justifyContent: "center", alignItems: "center"}}>
                <Image 
                    style={{width: wp("45"), height: hp("25"), resizeMode:"contain"}}
                    source={image}>
                </Image>

                <Text style={{}}>{text}</Text>
            </View>
            }

            { address && !loading &&
            <View style={styles.contentContainer}>

                {/* Localidade */ }
                <View style={styles.baseTextInformation}>
                    <View style={styles.iconInformationBackground}>
                        <Image style={styles.iconInformation} source={require('../assets/images/city-icon.png')}></Image>
                    </View>
                    
                    <Text style={styles.baseText}> Cidade: {address?.localidade} </Text>
                </View>

                {/* Estado */ }
                <View style={styles.baseTextInformation}>
                    <View style={styles.iconInformationBackground}>
                        <Image style={styles.iconInformation} source={require('../assets/images/state-icon.png')}></Image>
                    </View>
                    
                    <Text style={styles.baseText}> Estado: {address?.estado} </Text>
                </View>
                
                {/* UF */ }
                <View style={styles.baseTextInformation}>
                    <View style={styles.iconInformationBackground}>
                        <Image style={styles.iconInformation} source={require('../assets/images/gps2-icon.png')}></Image>
                    </View>
                    
                    <Text style={styles.baseText}> UF: {address?.uf} </Text>
                </View>
                
                {/* DDD */ }
                <View style={styles.baseTextInformation}>
                    <View style={styles.iconInformationBackground}>
                        <Image style={styles.iconInformation} source={require('../assets/images/phone-icon.png')}></Image>
                    </View>
                    
                    <Text style={styles.baseText}> DDD: {address?.ddd} </Text>
                </View>

            </View>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        top: hp("60"),
        width: wp("100%"),
        paddingHorizontal: hp("2.3"),
        height: hp("50"),
        backgroundColor: "#fff"
    },

    contentContainer : {
        borderWidth: 2,
        borderColor: "#414141",
        backgroundColor: "#131111",
        borderRadius: 8,
        marginTop: hp("2"),
        width: wp("90"),
        height: hp("20"),
        justifyContent: "center",
        gap: hp("0.6"),
        paddingHorizontal: hp("0.8"),
    },

    header: {
        flexDirection: "row",
        gap: wp("3"),
        alignItems: "center",
        marginTop: hp("4%"),
        paddingHorizontal: hp("0.3")
    },
    
    iconBackground : {
        backgroundColor: "#cecece67",
        borderRadius: 25,
        width: wp("11"),
        height: hp("5"),
        justifyContent: "center",
        alignItems: "center"
    },

    icon : {
        width: wp("6"),
        height: hp("4"),
        resizeMode: "contain",
    },

    titleContainer: {
        fontWeight: "600",
        fontSize: hp("2.5"),
    },

    baseText: {
        color: "#fff",
        fontSize: hp("1.8")
    },

    baseTextInformation: {
        flexDirection: "row",
        alignItems: "center"
    },

    iconInformationBackground: {
        width: wp("8"),
        borderRadius: 8,
        backgroundColor: "#29292985",
        alignItems: "center"
    },

    iconInformation: {
        width: wp("6"),
        height: hp("4"),
        resizeMode: "contain",
    }

})