import { View, Text, StyleSheet, Button } from "react-native"

function StartSession(){
    return(
        <View style={styles.container}>
            <Button title="Upload Stick Data"/>
            <Button title="Sync Device"/>
        </View>
    )
}

export default StartSession;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'
    }
})
