import React, { useEffect,useLayoutEffect, useState } from "react";
//Import Libs
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
//Import Components
import ListCharacters from "../../components/ListCharacters";
//Styled components
import { 
    ImageTitle,
    Container,
    LoadingBox,    
    LoadingIcon,
    LoadingText,
    ContainerList,
    Title,
    List,
 } from './styles';

 type Props = {
     name: string;
 }

 export default({ ...rest }: Props)=>{
    const navigation = useNavigation();
    const route = useRoute();

    const { name } = route.params;
    
    const [ character, setCharacter ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: '', 
            headerLeft: ()=>(
                <ImageTitle source={require('../../assets/rm.png')} resizeMode="contain" />
                )
            })
        },[]);
        
        useEffect(()=>{
            const request = async () => {
                setLoading(true)
                const req = await fetch('https://rickandmortyapi.com/api/character');
                const json = await req.json();
        
                if(json){
                    setCharacter(json.results);
                }
                setLoading(false);
            }
            request()
        },[]);

    return(
    <>    
        <Container>
            
            {loading &&
                <LoadingBox>
                    <LoadingIcon size="large"/>
                    <LoadingText style={{color:"#fff"}}>Loading...</LoadingText>
                </LoadingBox>
                }

                {!loading &&
                <ContainerList>
                    <Title> Welcome: { name } </Title>
                    
                    <List 
                        data={character}
                        renderItem={({ item })=> <ListCharacters item={item} />}
                        keyExtractor={ item=>item.id.toString() }
                    />
                </ContainerList>
                }
            </Container>

    </>    
     );
 }