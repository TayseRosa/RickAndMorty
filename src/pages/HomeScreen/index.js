import React, { useEffect,useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { 
    Container,
    ImageBackground,
    Input,
    Save,
    SaveTitle,
    ImageTitle,
 } from './styles';

 export default()=>{
    const navigation = useNavigation();
    const [ name, setName ] = useState('');
    
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: '', 
            headerLeft: ()=>(
                <ImageTitle source={require('../../assets/rm.png')} resizeMode="contain" />
            )
        })
    },[]);

    const handleSave = async () => {
        if(name != ''){
            await AsyncStorage.setItem('@name', name);
            setName(name)
            
            navigation.navigate('List', { name })
        }else{
            alert('Type your name')
        }
    }

    const getName = async() => {
        const n = await AsyncStorage.getItem('@name');
        setName(n)
    }

    useEffect(()=>{
        getName();
    },[])
   
     return(
         <Container>
            <ImageBackground source={require('../../assets/rickAndMorty.jpeg')} resizeMode="contain" />

            <Input
                placeholder="Whats your name?"
                value={ name }
                onChangeText={ e=>setName(e) }
                placeholderTextColor="#FFFFFF"
            />

            <Save title="Go" onPress={ handleSave } >
                <SaveTitle> Go to next { name } </SaveTitle>
            </Save>    

         </Container>
     )
 }