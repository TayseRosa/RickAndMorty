import React from 'react';
//Import Libs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//Import Pages
import HomeScreen from '../pages/HomeScreen';
import ListScreen from '../pages/ListScreen';
import AboutScreen from '../pages/AboutScreen';

//Constants
const Tab = createBottomTabNavigator();
const color = '#048304';

export default ()=>(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ 
                headerStyle: { 
                    backgroundColor: '#000' 
                },
                tabBarStyle:{
                    backgroundColor:'#00ff00',
                },
                tabBarActiveTintColor:"#FFFFFF",
                tabBarInactiveTintColor:'#00ff00' ,               
            }}
            > 

        <Tab.Screen 
            name="Home" component={HomeScreen}   
            options={{    
            tabBarLabel: 'Home',
            tabBarIcon: () => (
                <Ionicons name="home" size={32} color={color} />
            ),
            tabBarStyle: { display: 'none' },
            }}
        />       

        <Tab.Screen 
            name="List" component={ListScreen}   
            options={{
            headerStyle: { 
                backgroundColor: '#333333' 
            },
            tabBarLabel: 'List',
            tabBarIcon: () => (
                <Ionicons name="list" size={32} color={color} />
            ),
            tabBarStyle: {  backgroundColor: '#222' },
            }}
        />  

        <Tab.Screen 
            name="About" component={AboutScreen}   
            options={{
            headerStyle: { 
                backgroundColor: '#333333' 
            },
            tabBarLabel: 'About',
            tabBarIcon: () => (
                <Ionicons name="information-circle" size={32} color={color} />
            ),
            tabBarStyle: {  backgroundColor: '#222' },
            }}
        />        
    </Tab.Navigator>
);