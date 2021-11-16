import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content:center;
    align-items: center;
    flex-direction: column;

    background-color: #000;
`;

export const ImageBackground = styled.Image`
    width: 80%;
    height: 80%;
`;

export const Input = styled.TextInput`
    justify-content: center;
    align-items: center;
    
    background-color: #222;
    width: 90%;
    border-radius: 25px;
    margin-top: 10px;
    padding: 15px;
    color:#fff;
    font-size: 20px;
    text-align: center;
`;

export const Save = styled.TouchableHighlight`
    justify-content: center;
    align-items: center;
    
    background-color: #048304;
    width: 90%;
    border-radius: 25px;
    margin-top: 10px;
    padding: 15px;
    color:#fff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;

export const SaveTitle = styled.Text`
    font-size: 18px;
    color: #fff;
`;

export const ImageTitle = styled.Image`
    width: 350px;
    margin-left: 30px;
`;