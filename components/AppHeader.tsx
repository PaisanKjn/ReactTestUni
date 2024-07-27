import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

type AppHeaderProps = {
    title: string;
    year?: number;
}

const AppHeader = ({title, year}: AppHeaderProps):React.JSX.Element => {
  return (
    <View style = {styles.header}>
      <Text style = {styles.headerText}>
        {title}
        {year && year + 543}
        
        </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
    backgroundColor: '#AEC6CF',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    },
    headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    },
    subtitleText: {
    fontSize: 16,
    color: '#fff',
    },
    });
    

export default AppHeader