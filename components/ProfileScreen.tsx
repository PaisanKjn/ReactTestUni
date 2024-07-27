import { Text, View, Image } from 'react-native'
import React from 'react'
import styles from '../styles/styles';

const ProfileScreen = () => {
    const profieImage = require("../assets/pfp1.jpg");

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image style={styles.profileImage} source={profieImage} />
                <Text style={styles.profileName}>Paisan Kiatjanon</Text>
            </View>
        </View>
    )
}

export default ProfileScreen

