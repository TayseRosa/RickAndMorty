import React, { useState } from "react";
//Import Libs
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
//Import styles
import {
    Page,
    ModalBox,
    ModalContent,
    ModalView,
    ModalButton,
    Characters,
    CharactersImage,
    CharacterTitle,
    CharacterName,
    ContainerText, 
    CharacterStatus,
    CharacterOthers,
    CharactersFavorite,
} from './styles';

export default({item})=>{

    const navigation = useNavigation();

    const [ modalVisible, setModalVisible ] = useState(false);
    const [ favorite, setFavorite ] = useState(true);
    

    const toggleFavorite = async () => {
        if(favorite === true){
            setFavorite(false)
        }else{
            setFavorite(true)
        }
    }

    const showModal = () => {
        setModalVisible(true)
    }

    const modalClose = () => {
        setModalVisible(false);
    }

    return(
    <Page>
        <ModalBox
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={ ()=>modalClose() }
        >
            <ModalContent>
                <ModalView>            
                    <CharacterTitle> About character </CharacterTitle>    
                    <CharacterName> Name: { item.name } </CharacterName>
                    <CharacterStatus> Status: { item.status }  </CharacterStatus>
                    <CharacterOthers> Species: { item.species } </CharacterOthers>
                    <CharacterOthers> Type: { item.type } </CharacterOthers>
                    <CharacterOthers> Gender: { item.gender } </CharacterOthers>
                    <CharacterOthers> Origin: { item.origin.name } </CharacterOthers>
                    <CharacterOthers> Location: { item.location.name } </CharacterOthers>
                    
                    <ModalButton title="Fechar" onPress={ modalClose } />

                </ModalView>
                

            </ModalContent>
        </ModalBox>    

        <Characters>
                <CharactersImage source={{ uri: item.image }} resizeMode="contain" />
                
                <ContainerText>
                    <CharacterName> { item.name } </CharacterName>
                    <CharacterOthers> Gender: { item.gender } </CharacterOthers>
                </ContainerText>  

                <CharactersFavorite onPress={ showModal }  >
                    <Ionicons name='add-circle' size={26} color="orange" />
                </CharactersFavorite>
        </Characters>
    </Page>
    );
}