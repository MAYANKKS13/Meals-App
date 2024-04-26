import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({title, color, onPress}) {

    return (
        <View style={[styles.gridItem, {backgroundColor: color}]}>
            <Pressable 
                 android_ripple={{color: '#ccc'}} 
                 style={({ifPressed}) => [styles.button, ifPressed ? styles.buttonPressed : null]}
                 onPress={onPress}
            >
                <View style = {styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 22,
        height: 150,
        borderRadius: 8,
        elevation: 5,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    title: { 
        fontSize: 15,
        fontWeight: 'bold'
    },
    innerContainer: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryGridTile;