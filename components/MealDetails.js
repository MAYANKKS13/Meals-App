import { Text, View, StyleSheet } from "react-native";

function MealDetails({duration, complexity, affordability, textStyle}) {
    return (
        <View style={styles.details}>
            <Text style={[styles.detailItems, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailItems, textStyle]}>{complexity}</Text>
            <Text style={[styles.detailItems, textStyle]}>{affordability}</Text>
        </View>   
    );
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center'
    },
    detailItems: {
        marginHorizontal: 4,
        fontSize: 15
    }
});

export default MealDetails;