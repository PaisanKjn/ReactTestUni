import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {
    HeaderButton,
    HeaderButtons,
    Item,
  } from "react-navigation-header-buttons";

const ProductScreen = ():React.JSX.Element => {
    const navigation = useNavigation<any>();
    const MaterialHeaderButton = (props: any) => (
        // the `props` here come from <Item ... />
        // you may access them and pass something else to `HeaderButton` if you like
        <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
      );

    useLayoutEffect(() => {
        navigation.setOptions({
          headerTitleAlign: "center",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
              <Item
                title="menu"
                iconName="menu"
                onPress={() => navigation.openDrawer()
                }
              />
            </HeaderButtons>
          )
        });
      }, [navigation]);

  return (
    <View>
      <Text>ProductScreen</Text>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({})