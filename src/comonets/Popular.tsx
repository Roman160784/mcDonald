import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import { SIZES } from '../constants'
import { popularProduct } from './popularProducts'


export const Popular = () => {
    

    return (
        <View style={styles.categories}>
            <Text style={styles.title}>Popular </Text>
            <View style={styles.categoryBlock}>
                {popularProduct.map((el, ind) => (

                    <View key={`el${ind}`} style={styles.box }>

                        <TouchableOpacity >
                            <View style={styles.categoryBox }>
                                <Image style={styles.pict} source={{ uri: el.image }} />
                                <Text style={styles.categoryName}>{el.name}</Text>
                                <Text style={styles.price}>{el.price}</Text>
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
        paddingTop: 5,
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
    price: {
        fontSize: SIZES.h4,
        color: 'yellow',
        marginTop: 5,
        textAlign: 'center',
    },

    categoryBlock: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    box: {
        width: '30%',
        marginBottom: 5,
        borderRadius: 20,
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
   
})
