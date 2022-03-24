import React,{useState} from 'react';
import { View,Image,StyleSheet,Text,Keyboard } from 'react-native';

import Header from '../components/Header';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function HomeScreen(props) {

    const [enteredText, setEnteredText] = useState('');
    const [goal, setGoal] =useState('');

    const inputHandler = () => {
        setGoal(enteredText);
        Keyboard.dismiss();
    }
    return (
            <View style={styles.screen}>
                <Header title="Monkey-Chunky" />
                <Image 
                    style={styles.logo}
                    source={require('../assets/img.png')}
                />
                <AppTextInput onChangeText={setEnteredText}/>
                <AppButton title="Go" onPress={inputHandler}  />
                <View style={styles.textarea}>
                    <Text style={styles.text}>
                        {goal}
                    </Text>
                </View>
            </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.mintCream,
        flex: 1,
    },
    logo:{
        width:180,
        height:180,
        alignSelf:'center',
        marginTop:10,
        marginBottom:20,
      },
        textarea:{
            marginTop:80,
            alignSelf:'center',
        },
        text:{
            fontSize:20,
            color:colors.charcoal,
        }
})

export default HomeScreen;