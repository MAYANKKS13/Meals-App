import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem({title, imageUrl, duration, complexity, affordability, id}) {

    const navigation = useNavigation();

    function mealDetailHandler() {
        navigation.navigate('Meal Detail Screen', {
            mealId: id
        });
    }
   
  return (
    <View style={styles.mainContainer}>
        <Pressable 
            android_ripple={{color: '#edd7d7'}} 
            style={({ifPressed}) => (ifPressed ? styles.buttonPressed : null)}
            onPress={mealDetailHandler}    
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image style={styles.imageContainer} source={{uri: imageUrl}} />  
                    <Text style={styles.titleContainer}>{title}</Text>
                </View>
                 
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} /> 
               
            </View>
        </Pressable>
    </View>
  );
}
 
const styles = StyleSheet.create({
    mainContainer: {
         margin: 20,
         borderRadius: 8,
         backgroundColor: 'white',
         overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
         elevation: 15
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: 200
    },
    titleContainer: {
        textAlign: 'center',
        margin: 8,
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 15
    },
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

export default MealItem;