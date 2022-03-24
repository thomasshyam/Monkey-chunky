import React,{useState} from 'react';
import { StyleSheet, TextInput,View, } from 'react-native';



function AppTextInput({...otherProps}) {

    return (
        <View style={styles.container}>
            <TextInput style={styles.text}{...otherProps} placeholder="Enter some text" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        borderWidth:4,
        width: '80%',
        height: 50,
        top:20,
        textAlign: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
    },
    text: {
        fontSize: 20,
        color: '#000',
        
    },    
})

export default AppTextInput;