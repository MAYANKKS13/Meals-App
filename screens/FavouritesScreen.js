import { Text, View, StyleSheet } from "react-native";

function FavouritesScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>This screen is in making</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default FavouritesScreen;