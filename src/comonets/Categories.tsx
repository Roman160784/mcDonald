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

                    <View style={ activeIndex === ind ? styles.activeBox : styles.box }>

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
        paddingTop: 60,
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
        height: 70,
        
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
        marginTop: 20,
    },
    box: {
        width: '30%',
        marginBottom: 20,
        borderRadius: 20,
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 2, 
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
    },
    categoryBox: {
        alignItems: 'center',
    },
    activeBox: {
        width: '30%',
        marginBottom: 20,
        borderRadius: 20,
        borderColor: 'black',
        backgroundColor: 'red',
        borderWidth: 2,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center', 
    },
});