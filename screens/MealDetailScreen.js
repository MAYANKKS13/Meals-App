import { View, Text, Button, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import List from "../components/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealDetailScreen({route, navigation}) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId );

    function headerButtonHandler () {
        console.log('Button Pressed');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                 return <IconButton onPress={headerButtonHandler} />
            }
        });
    }, [navigation, headerButtonHandler]);

    return (
        <ScrollView style={{margin: 10, marginBottom: 20}}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
      
 
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Ingredients</Text>
                    </View>
                    <List data={selectedMeal.ingredients} />

                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Steps</Text>
                    </View>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
           
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250,
        borderRadius: 15
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 12,
        textAlign: 'center'
    },
    mealDetail: {
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'center'
    },
    subtitleContainer: {
        padding: 5,
        marginHorizontal: 15,
        marginVertical: 15,
        borderBottomWidth: 2
     },  
    subtitle: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
   
   
});

export default MealDetailScreen;