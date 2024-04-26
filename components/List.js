import { View, Text, StyleSheet } from "react-native";

function List({data}) {
    return (
        data.map((dataPoint) => (
            <View style={styles.listItem} key={dataPoint}>
                <Text style={styles.itemText}>{dataPoint}</Text>
            </View>
        ))
    );
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#8a7e77'
        
    },
    itemText: {
        textAlign: 'center',
        color: '#ffffff',
        padding: 6,
        fontSize: 13,
        fontWeight: 'bold'
    }
});

export default List;