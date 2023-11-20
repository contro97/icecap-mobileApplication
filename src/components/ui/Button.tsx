import { Pressable, StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from '../../constants/Colors';

function Button({children, onPress}: {children: any, onPress: any}) {   
    return(
        <Pressable>
            <View>
                <Text>{children}</Text>
            </View>
        </Pressable>
    )
}

export default Button;

const styles = StyleSheet.create({
    button : {
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: GlobalStyles.colors.primary500,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4
    },
    pressed: {
        opacity: 0.75
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})