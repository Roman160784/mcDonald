import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { SIZES } from '../constants';
import { category } from './category';


export const Categories = () => {
    return (
        <View style={styles.categories}>
            <Text style={styles.title}>Hey, </Text>
            <Text style={styles.text}>What's up? </Text>
            <View>
                {category.map(el => (
                    <TouchableOpacity >
                        <View>
                            <Image style={styles.pict} source={{ uri: el.image }} />
                            <Text style={styles.categoryName}>{el.name}</Text>
                        </View>
                    </TouchableOpacity>
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
        width: 50,
        height: 50,
    },
    categoryName: {
        fontSize: SIZES.h4,
        color: 'black',
        marginTop: 5,
    },

});