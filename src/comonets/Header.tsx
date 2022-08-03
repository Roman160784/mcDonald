import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'


export const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com')}>
                <Image style={styles.logoMac}
                    source={{ uri: 'https://static.wikia.nocookie.net/transformers/images/b/b7/McDonald%27s_Logo.png/revision/latest/scale-to-width-down/300?cb=20150420044238&path-prefix=ru' }} />
            </TouchableOpacity>
            <View>
            <Image style={styles.shoppingCart}
                    source={{ uri: 'https://thumbs.dreamstime.com/b/fast-shopping-cart-icon-logo-white-background-vector-illustration-sign-symbol-design-isolated-183464326.jpg' }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    logoMac: {
        width: 57,
        height: 50,
       
    },
    shoppingCart: {
        width: 50,
        height: 50,
    }
});