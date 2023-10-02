import {widthPercentageToDP,  heightPercentageToDP } from 'react-native-responsive-screen';
import { View, Text, Button, StyleSheet} from 'react-native';

export function AdjustScreen() {

    return(
        <View style={styles.container}> 
            <View style={styles.viewOne}>
                <Text>View 1</Text>
            </View>
            <View style={styles.viewTwo}>
                <Text>View 2</Text>
            </View>
            <View style={styles.viewThree}>
                <Text>View 3</Text>
            </View>
            <View style={styles.viewFour}>
                <Text>View Four</Text>
            </View>
        </View>

        
    )
}

export default AdjustScreen;

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        alignItems: 'center',
        
    },
    viewOne: {
        marginTop: heightPercentageToDP(5),
        backgroundColor: 'blue',
        width: widthPercentageToDP(80),
        height: heightPercentageToDP(25),
    },
    viewTwo: {
        backgroundColor: 'green',
        width: widthPercentageToDP(80),
        height: heightPercentageToDP(30),
    },
    viewThree: {
        backgroundColor: 'purple',
        width: widthPercentageToDP(80),
        height: heightPercentageToDP(20),
    },
    viewFour: {
        backgroundColor: 'black',
        width: widthPercentageToDP(80),
        height: heightPercentageToDP(20),
    }
})