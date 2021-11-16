import React, { useLayoutEffect } from "react";
import { Linking, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { 
    ImageTitle,
    Container,
    Title,
    AboutText,
    BotaoDev
 } from './styles';

 export default()=>{
     const navigation = useNavigation();
        
    //Image title
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: '', 
            headerLeft: ()=>(
                <ImageTitle source={require('../../assets/rm.png')} resizeMode="contain" />
            )
        })
    },[]);

    const handleButton = () =>{
        Linking.openURL('https://www.tayserosa.dev');
    }
    
     return(
         <Container>
            <Title> About </Title>
            <AboutText>App developed by Tayse Rosa</AboutText>
            <BotaoDev 
                title="www.tayserosa.dev" 
                onPress={ handleButton } 
            />
            <Image  source={require('../../assets/images.jpeg')} resizeMode="contain" style={{marginTop:20}} />
         </Container>
     )
 }