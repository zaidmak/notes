import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button, _Text } from 'react-native';
import Loctn from './loctn';

const Notes = (props) => {
    
    return (    
        <View style = {styles.notes}>   
            <Text>{props.text}</Text>
           
        </View>

    )
}

const styles = StyleSheet.create({
    notes:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'space-around',
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
        width: '100%'
         
    },
    locan:{
        borderRadius: 20,
        backgroundColor: '#FFF',


    },
    button: {
        borderColor:'blue',
        borderRadius: 5,
        backgroundColor : '#FFF',

    }
});
export default Notes;
