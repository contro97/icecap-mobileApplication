import { View, Text, Pressable, StyleSheet } from "react-native";

import { GlobalStyles } from "../constants/Colors";

function PrimaryButton({ children, onPress } : {children: any, onPress: any} ) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: GlobalStyles.colors.gray500 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    marginHorizontal: 30,
    borderColor: 'white',
    borderWidth: 1
  },
  buttonInnerContainer: {
    backgroundColor: GlobalStyles.colors.primary500, 
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    
  },
  buttonText: {
    textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
  },
  pressed: {
    opacity: 0.75,
  },
});
