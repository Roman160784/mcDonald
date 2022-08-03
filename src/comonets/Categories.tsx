import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { SIZES } from '../constants';
import { category } from './category';


export const Categories = () => {

    const [activeIndex, setActiveIndex] = useState<number>()

    return (
        <View style={styles.categories}>
            <Text style={styles.title}>Hey, </Text>
            <Text style={styles.text}>What's up? </Text>
            <View style={styles.categoryBlock}>
                {category.map((el, ind) => (

                    <View key={`el${ind}`} style={ activeIndex === ind ? styles.activeBox : styles.box }>

                        <TouchableOpacity onPress={() => setActiveIndex(ind)}>
                            <View style={styles.categoryBox }>
                                <Image style={styles.pict} source={{ uri: el.image }} />
                                <Text style={styles.categoryName}>{el.name}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    categories: {
        paddingTop: 30,
    },
    title: {
        fontSize: SIZES.h2,
        fontWeight: 'bold',
        
    },
    text: {
        fontSize: SIZES.h2,
        
    },
    pict: {
        width: 70,
        height: 60,
        
    },
    categoryName: {
        fontSize: SIZES.h4,
        color: 'black',
        marginTop: 5,
        textAlign: 'center',
    },
    categoryBlock: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    box: {
        width: '30%',
        marginBottom: 10,
        borderRadius: 10,
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 2, 
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
    },
    categoryBox: {
        alignItems: 'center',
    },
    activeBox: {
        width: '30%',
        marginBottom: 10,
        borderRadius: 10,
        borderColor: 'black',
        backgroundColor: 'red',
        borderWidth: 2,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center', 
    },
});