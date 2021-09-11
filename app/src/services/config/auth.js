import {Dimensions , StyleSheet} from 'react-native'

export const {width , height} = Dimensions.get('window')


export const  Colors = {

    Background:'#353B48',
    Background2:'#3498DB',
    Color:'#fff'
    

}

export const styleFonts = StyleSheet.create({

    title:{
        fontSize: width * 0.056,
        fontFamily:'Montserrat_700Bold'
    },
    semiTitle:{

        fontSize: width * 0.05,
        fontFamily:'Montserrat_600SemiBold'

    },
    label:{
        fontSize: width * 0.04,
        fontFamily:'Montserrat_400Regular'

    }

}) 
