import styled from "styled-components/native";


export const Page = styled.SafeAreaView`
    flex:1;
    justify-content: center;
    align-items: center;
`;

export const ModalBox = styled.Modal`
    width: 300px;
    height: 300px;
`;

export const ModalContent = styled.View`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);

    justify-content: center;
    align-items: center;
`;

export const ModalView = styled.View`
    width: 90%;
    background-color: #222222;
    border-radius: 10px;

    padding:20px;
`;

export const ModalButton = styled.Button`
    width: 100%;
    background-color: #00ff00;
`;

export const Characters = styled.View`
    width: 350px;
    margin-bottom: 10px;
    background-color: #121212;
    padding:15px 10px;
    border-radius: 10px;
        
    display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-content: center;
`;

export const CharactersImage = styled.Image`
	justify-content: center;
	align-items: flex-start;
	align-content: center;
    width: 100px;

    border-radius: 10px;
`;

export const CharacterTitle = styled.Text`
    color:#FFF; 
    font-size: 24px;
    font-weight: bold;
    text-align: center;

    margin-bottom: 20px;
`;

export const CharacterName = styled.Text`
    font-size: 16px;
    color: #FFF;
    margin-bottom: 5px;
`;

export const ContainerText = styled.View`
    flex:4;

    justify-content: center;
    align-items: flex-start;
`;


export const CharacterStatus = styled.Text`
    font-size: 18px;
    color:#FFF;
    margin-bottom: 5px;
`;


export const CharacterOthers = styled.Text`
    font-size: 16px;
    color: #FFF;
    margin-bottom: 5px;
`;

export const CharactersFavorite = styled.TouchableHighlight`
    flex: 1;
    justify-content: center;
    align-items: center;
`;