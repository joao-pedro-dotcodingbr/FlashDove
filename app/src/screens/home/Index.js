import React from 'react'
import { View, Text} from 'react-native'
import {Container} from './Style'
import {styleFonts} from '../../services/config/auth'
export default function Index() {
    return (
        <Container>
            <Text style={styleFonts.title}>Home</Text>
        </Container>
    )
}
