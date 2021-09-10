import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'

import ScreenHome from '../screens/home/Index'
import ScreenSignIn from '../screens/SignIn/Index'

const Drawer = createDrawerNavigator();

const ScreensDrawer = () =>{

    return(

        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name='Index'>
                {props => <ScreenHome {...props}/>}
            </Drawer.Screen>
       </Drawer.Navigator>

    )

}

const Stack = createNativeStackNavigator();

export default function index() {
    return (
       <NavigationContainer>

           <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>

               <Stack.Screen name='SignIn' component={ScreenSignIn}/>

               <Stack.Screen name='Home'>
                   {props => <ScreensDrawer {...props}/>}
               </Stack.Screen>

           </Stack.Navigator>

       </NavigationContainer>
    )
}
