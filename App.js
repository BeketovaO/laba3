import React from 'react';
import { Text, View } from 'react-native';

export default function App()
{

    let arr = [12, 13, 15, 1, 7, 120, 125, 29, 48, 192, 32, 23, 45, 43, 34, 10, 75];
        var min = Math.min.apply(null, arr),
            max = Math.max.apply(null, arr);

    return (
        <View style = {{backgroundColor: '#5D4BD8', width: '100%', height: '100%'}}>

        <View style = {{backgroundColor: '#1F0772'}}>
        <Text style = {{color: '#fff', fontWeight: 'bold', fontSize: 22, textAlign:'center', paddingTop: 20, paddingBottom: 20, fontSize: 30}}>Массив</Text>
        </View>

        <View>
        <View style = {{paddingRight: 20}}>
        <Text style = {{padding: 10, borderWidth: 1, borderColor: '#fff', fontWeight: 'bold', color: '#fff', marginTop: 50, marginBottom: 30, marginLeft: 15, fontSize: 18}}>Массив: {arr.join(", ")}</Text>
        </View>
        <Text style = {{color: '#fff', marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>Максимальный элемент массива: {max}</Text>
        <Text style = {{color: '#fff', marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>Минимальный элемент массива: {min} </Text>

        </View>

        </View>

        );
};


