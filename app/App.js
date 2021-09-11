import 'react-native-gesture-handler'
import React, {useEffect} from 'react';
import Navigation from './src/navigation/Index'
import {useFonts, Montserrat_400Regular , Montserrat_600SemiBold , Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import {BalsamiqSans_700Bold} from '@expo-google-fonts/balsamiq-sans'
import Loading from 'expo-app-loading'

export default function App() {
  const [loadingFonts] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    BalsamiqSans_700Bold
  })

  if(!loadingFonts){

    return <Loading/>
    
  }
  else{

    return (
   
      <>
  
          <Navigation/>
  
      </>
      
    );

  }
  
}
