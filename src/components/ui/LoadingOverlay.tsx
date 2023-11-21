import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

function LoadingOverlay({message} : {message: string}) {

    return(
        <View style={styles.loadingOverlay}>
            <Text style={styles.loadingText}>{message}</Text>
            <ActivityIndicator size='large' color='blue' />
        </View>
    )    

}

export default LoadingOverlay;

const styles = StyleSheet.create({ 
    loadingOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32
    },
    loadingText: {

    }
})