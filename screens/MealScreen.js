import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealScreen({route, navigation}) {
    const catId = route.params.categoryId;
    const catName = route.params.categoryTitle;

    const displayMeal = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });
 
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [navigation, catId]);
   
    function renderMealItem(itemData) {

        function pressMealItemHandler() {
            navigation.navigate('Meal Detail Screen', {
                categoryId: itemData.item.id,
                categoryTitle: itemData.item.title,
             });
        }

        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability
        };
        return (
            <MealItem {...mealItemProps} />
        );
    }

    return (
        <View style={styles.container}>
           <FlatList
              data={displayMeal}
              keyExtractor={(item) => item.id}
              renderItem={renderMealItem}
           />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
});

export default MealScreen;